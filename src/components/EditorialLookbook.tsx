import { IMAGES, RITUAL_STEPS } from '../data/velouraData';

export function EditorialLookbook() {
  return (
    <section id="ritual" className="section-block">
      <div className="container lookbook-grid">
        <div className="lookbook-portrait">
          <img
            src={IMAGES.editorialLifestyle}
            alt="Mujer moldeando ondas con volumen usando VELOURA en un interior luminoso"
            width={900}
            height={1200}
          />
        </div>

        <div>
          <p className="eyebrow">Ritual en tres tiempos</p>
          <h2 className="section-title">
            Movimiento natural en menos de doce minutos
          </h2>
          <p className="section-lead">
            Sustituir las tenacillas de 210 °C por flujo de aire Coanda reduce la
            pérdida de hidratación interna y preserva la elasticidad y el brillo
            natural de la fibra capilar.
          </p>

          <div className="ritual-list">
            {RITUAL_STEPS.map((item) => (
              <div key={item.step} className="ritual-item">
                <span className="ritual-num">{item.step}</span>
                <div>
                  <div className="ritual-head">
                    <h3 className="ritual-title">{item.title}</h3>
                    <span className="ritual-duration">{item.duration}</span>
                  </div>
                  <p className="ritual-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
