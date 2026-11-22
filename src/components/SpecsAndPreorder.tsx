import { useState, type FormEvent } from 'react';
import { TECHNICAL_SPECS } from '../data/velouraData';

export function SpecsAndPreorder() {
  const [email, setEmail] = useState('');
  const [hairType, setHairType] = useState('ondulado');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Introduce una dirección de correo electrónico válida.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="especificaciones" className="section-block">
      <div className="container specs-preorder-grid">
        <div>
          <p className="eyebrow">Ficha de ingeniería</p>
          <h2 className="section-title">Especificaciones técnicas</h2>
          <p className="section-lead" style={{ marginBottom: '2rem' }}>
            Diseñado para ofrecer potencia profesional en un cuerpo ligero y
            equilibrado en la mano.
          </p>

          <div className="specs-table">
            {TECHNICAL_SPECS.map((spec) => (
              <div key={spec.label} className="spec-row">
                <span className="spec-row-label">{spec.label}</span>
                <div>
                  <span className="spec-row-value">{spec.value}</span>
                  <span className="spec-row-detail">{spec.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside id="reserva" className="preorder-card" aria-label="Reserva de acceso anticipado">
          <p className="eyebrow">Edición de lanzamiento · Pre-reserva</p>
          <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            Set Completo VELOURA 5 en 1
          </h3>
          <div className="price-row">
            <span className="price-amount">289 €</span>
            <span className="price-note">Precio estimado · Incluye estuche</span>
          </div>

          {submitted ? (
            <div className="confirmation-box" role="status">
              <h4 className="confirmation-title">Solicitud registrada</h4>
              <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
                Hemos anotado <strong>{email}</strong> (perfil capilar:{' '}
                <strong>{hairType}</strong>) para avisarte cuando la primera
                producción conceptual de VELOURA abra reservas.
              </p>
              <button
                id="preorder-reset-btn"
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                }}
              >
                Registrar otro correo
              </button>
            </div>
          ) : (
            <form className="preorder-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="preorder-email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="preorder-email"
                  type="email"
                  className="form-input"
                  placeholder="nombre@ejemplo.es"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="preorder-hair-type" className="form-label">
                  Tu tipo de cabello (para guía de cabezales)
                </label>
                <select
                  id="preorder-hair-type"
                  className="form-select"
                  value={hairType}
                  onChange={(e) => setHairType(e.target.value)}
                >
                  <option value="fino">Fino o lacio (búsqueda de volumen)</option>
                  <option value="ondulado">Ondulado o medio</option>
                  <option value="rizado">Rizado o con frizz</option>
                  <option value="grueso">Grueso y abundante</option>
                </select>
              </div>

              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}

              <button id="preorder-submit-btn" type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                Solicitar acceso anticipado
              </button>

              <p className="form-disclaimer">
                Prototipo conceptual: este formulario es una demostración local
                sin cobro ni envío de datos a servidores externos.
              </p>
            </form>
          )}
        </aside>
      </div>
    </section>
  );
}
