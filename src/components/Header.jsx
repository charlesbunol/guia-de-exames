import { Link, NavLink } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <span className="logo-title">Guia de Exames do <span>Gato de Botas</span></span>
        </Link>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/ler-solicitacao"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Ler pedido
          </NavLink>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Alternar tema escuro/claro"
            title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </nav>
      </div>
      <style>{`
        .header {
          background-color: var(--surface);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .header-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.55rem;
          height: auto;
          min-height: 5.9rem;
          padding-top: 0.75rem;
          padding-bottom: 0.7rem;
        }
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          max-width: 100%;
          text-align: center;
          text-decoration: none;
        }
        .logo svg {
          flex: 0 0 auto;
        }
        .logo-title {
          font-size: 1.05rem;
          line-height: 1.15;
          margin: 0;
          color: var(--text-main);
          font-weight: 600;
        }
        .logo span {
          color: var(--primary);
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
          width: 100%;
        }
        .nav a {
          color: var(--text-muted);
          font-weight: 500;
          text-decoration: none;
          padding-bottom: 0.2rem;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .nav a:hover {
          color: var(--primary);
        }
        .nav a.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
        }
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          color: var(--text-muted);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        .theme-toggle:hover {
          color: var(--primary);
          background-color: var(--primary-light);
        }

        @media (min-width: 1024px) {
          .header-container {
            flex-direction: row;
            justify-content: space-between;
            gap: 1.5rem;
            height: 4rem;
            min-height: 0;
            padding-top: 0;
            padding-bottom: 0;
          }

          .logo {
            justify-content: flex-start;
            text-align: left;
          }

          .logo-title {
            font-size: 1.25rem;
          }

          .nav {
            justify-content: flex-end;
            gap: 1.5rem;
            width: auto;
          }

          .nav a {
            padding-bottom: 0.25rem;
          }

          .theme-toggle {
            padding: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
