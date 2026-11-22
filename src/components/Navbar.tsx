import { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar-inner">
        <a href="#inicio" className="brand-group" aria-label="VELOURA Inicio">
          <span className="brand-wordmark">VELOURA</span>
          <span className="brand-tag">Prototipo Conceptual</span>
        </a>

        <button
          id="mobile-menu-toggle"
          type="button"
          className="mobile-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <a href="#cabezales" className="nav-link" onClick={handleLinkClick}>
            5 Cabezales
          </a>
          <a href="#control-led" className="nav-link" onClick={handleLinkClick}>
            Control LED
          </a>
          <a href="#ritual" className="nav-link" onClick={handleLinkClick}>
            Ritual
          </a>
          <a href="#especificaciones" className="nav-link" onClick={handleLinkClick}>
            Especificaciones
          </a>
          <a
            id="nav-reserve-cta"
            href="#reserva"
            className="nav-cta"
            onClick={handleLinkClick}
          >
            Reservar acceso
          </a>
        </nav>
      </div>
    </header>
  );
}
