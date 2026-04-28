/* global process */
import { createServer } from 'node:http';
import { Buffer } from 'node:buffer';
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import handler from '../api/analyze-request.js';

const rootDir = resolve('.');
const distDir = join(rootDir, 'dist');
const portArgIndex = process.argv.findIndex(arg => arg === '--port');
const port = Number(
  process.env.PORT ||
  (portArgIndex >= 0 ? process.argv[portArgIndex + 1] : '') ||
  4176,
);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

const loadEnvFile = () => {
  const envPath = join(rootDir, '.env.local');

  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;

    const separatorIndex = trimmedLine.indexOf('=');
    if (separatorIndex < 0) continue;

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

const decorateResponse = (res) => {
  res.status = (statusCode) => {
    res.statusCode = statusCode;
    return res;
  };

  res.json = (payload) => {
    const body = JSON.stringify(payload);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.end(body);
    return res;
  };

  return res;
};

const sendStaticFile = (res, filePath) => {
  if (!existsSync(filePath)) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  res.setHeader('Content-Type', contentTypes[extname(filePath)] || 'application/octet-stream');
  createReadStream(filePath).pipe(res);
};

loadEnvFile();

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || `127.0.0.1:${port}`}`);

  if (url.pathname === '/api/analyze-request') {
    await handler(req, decorateResponse(res));
    return;
  }

  const safePath = url.pathname.replace(/^\/+/, '');
  const requestedPath = join(distDir, safePath);

  if (safePath && existsSync(requestedPath)) {
    sendStaticFile(res, requestedPath);
    return;
  }

  sendStaticFile(res, join(distDir, 'index.html'));
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Guia de Exames local: http://127.0.0.1:${port}/`);
});
