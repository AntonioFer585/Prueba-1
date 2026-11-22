import { useState } from 'react';
import { ATTACHMENTS } from '../data/velouraData';

export function AttachmentsShowcase() {
  const [activeId, setActiveId] = useState<string>(ATTACHMENTS[0].id);

  const activeAttachment =
    ATTACHMENTS.find((item) => item.id === activeId) ?? ATTACHMENTS[0];

  return (
    <section id="cabezales" className="section-block">
      <div className="container">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">Arquitectura modular 5 en 1</p>
            <h2 className="section-title">Cinco cabezales, un solo cuerpo</h2>
          </div>
          <p className="section-lead">
            Cada accesorio ajusta automáticamente el patrón aerodinámico del
            flujo de aire para transformar el moldeado diario sin placas
            metálicas abrasivas.
          </p>
        </div>

        <div className="attachments-layout">
          <div
            className="attachment-tabs"
            role="tablist"
            aria-label="Selector de cabezales intercambiables"
          >
            {ATTACHMENTS.map((item) => {
              const isSelected = item.id === activeAttachment.id;
              return (
                <button
                  key={item.id}
                  id={`attachment-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`attachment-panel-${item.id}`}
                  className={`attachment-tab${isSelected ? ' is-active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="tab-code">{item.code}</span>
                  <span>
                    <span className="tab-title">{item.shortTitle}</span>
                    <span className="tab-sub">{item.category}</span>
                  </span>
                  <span className="tab-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <article
            id={`attachment-panel-${activeAttachment.id}`}
            role="tabpanel"
            aria-labelledby={`attachment-tab-${activeAttachment.id}`}
            className="attachment-detail-card"
          >
            <div className="attachment-media">
              <img
                src={activeAttachment.image}
                alt={activeAttachment.imageAlt}
                width={1000}
                height={625}
              />
              <span className="attachment-badge">
                Cabezal {activeAttachment.code} / 05
              </span>
            </div>

            <div className="attachment-body">
              <p className="attachment-category">{activeAttachment.category}</p>
              <h3 className="attachment-heading">{activeAttachment.name}</h3>
              <p className="attachment-description">
                {activeAttachment.description}
              </p>

              <div className="attachment-specs">
                <div>
                  <span className="spec-k">Temperatura sugerida</span>
                  <span className="spec-v">{activeAttachment.recommendedTemp}</span>
                </div>
                <div>
                  <span className="spec-k">Velocidad de aire</span>
                  <span className="spec-v">{activeAttachment.recommendedFlow}</span>
                </div>
                <div>
                  <span className="spec-k">Indicado para</span>
                  <span className="spec-v">{activeAttachment.idealFor}</span>
                </div>
                <div>
                  <span className="spec-k">Acoplamiento</span>
                  <span className="spec-v">Anillo magnético oro rosado</span>
                </div>
              </div>

              <p className="attachment-tip">
                <strong>Técnica recomendada:</strong> {activeAttachment.technique}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
