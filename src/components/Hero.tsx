import { IMAGES } from '../data/velouraData';

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Ingeniería térmica · Edición 01</p>
          <h1 className="hero-title">
            Aire esculpido. <em>Cero daño</em> por calor extremo.
          </h1>
          <p className="hero-subtitle">
            VELOURA es un set moldeador de aire caliente 5 en 1 diseñado en negro
            mate acanalado, metal cepillado oro rosado y pantalla LED vertical.
            Cinco cabezales magnéticos para secar, alisar, dar volumen o crear
            ondas mediante flujo Coanda controlado.
          </p>

          <div className="hero-actions">
            <a id="hero-explore-btn" href="#cabezales" className="btn-primary">
              Explorar los 5 cabezales
            </a>
            <a id="hero-simulator-btn" href="#control-led" className="btn-secondary">
              Probar panel LED
            </a>
          </div>

          <div className="hero-metrics" aria-label="Prestaciones clave">
            <div>
              <span className="metric-value">110.000 rpm</span>
              <span className="metric-label">Motor digital brushless de flujo laminar</span>
            </div>
            <div>
              <span className="metric-value">5 cabezales</span>
              <span className="metric-label">Acoplamiento magnético de giro frío</span>
            </div>
            <div>
              <span className="metric-value">28 – 110 °C</span>
              <span className="metric-label">Regulación inteligente 40 veces/s</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img
              src={IMAGES.heroPlinth}
              alt="Moldeador de aire VELOURA en negro mate acanalado con panel oro rosado sobre plinto de travertino"
              width={1200}
              height={900}
            />
          </div>
          <div className="hero-caption-bar">
            <span>Acabado: Negro Mate / Oro Rosado</span>
            <span>Prototipo 5 en 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
