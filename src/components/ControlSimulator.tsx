import { useState } from 'react';
import {
  AIRFLOW_LEVELS,
  IMAGES,
  TEMPERATURE_MODES,
} from '../data/velouraData';

export function ControlSimulator() {
  const [isPowered, setIsPowered] = useState(true);
  const [tempId, setTempId] = useState<(typeof TEMPERATURE_MODES)[number]['id']>('style');
  const [flowLevel, setFlowLevel] = useState<1 | 2 | 3>(2);
  const [coolShotActive, setCoolShotActive] = useState(false);

  const selectedTemp =
    TEMPERATURE_MODES.find((mode) => mode.id === tempId) ?? TEMPERATURE_MODES[2];
  const effectiveTemp = coolShotActive ? TEMPERATURE_MODES[0] : selectedTemp;
  const selectedFlow =
    AIRFLOW_LEVELS.find((lvl) => lvl.id === flowLevel) ?? AIRFLOW_LEVELS[1];

  const isCool = effectiveTemp.id === 'cool';

  return (
    <section id="control-led" className="simulator-section">
      <div className="container">
        <div className="section-header-split">
          <div>
            <p className="eyebrow">Interfaz táctil y telemetría</p>
            <h2 className="section-title">Panel LED sobre oro rosado</h2>
          </div>
          <p className="section-lead">
            Un inciso de metal cepillado en oro rosado aloja la pantalla LED
            vertical azul violácea. Consulta temperatura y caudal en tiempo real
            sin apartar la vista del espejo.
          </p>
        </div>

        <div className="simulator-grid">
          <div className="macro-card">
            <img
              src={IMAGES.controlCloseup}
              alt="Primer plano del panel de control en oro rosado cepillado y pantalla LED vertical sobre cuerpo negro mate acanalado"
              width={1000}
              height={750}
            />
            <div className="macro-caption">
              <strong>Estriado ergonómico anodizado</strong>
              El microacanalado longitudinal mejora el agarre incluso con manos
              húmedas y disipa el calor residual del mango.
            </div>
          </div>

          <div className="simulator-console" aria-label="Simulador interactivo del panel LED VELOURA">
            <div className="console-layout">
              <div className="hardware-handle">
                <div className="rose-gold-plate">
                  <button
                    id="sim-power-btn"
                    type="button"
                    className={`hardware-power-btn${isPowered ? '' : ' is-off'}`}
                    aria-pressed={isPowered}
                    aria-label={isPowered ? 'Apagar moldeador simulado' : 'Encender moldeador simulado'}
                    onClick={() => setIsPowered((prev) => !prev)}
                    title={isPowered ? 'Encendido (pulsar para apagar)' : 'Apagado (pulsar para encender)'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v10" />
                      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                    </svg>
                  </button>

                  <div className="led-screen-bezel" aria-live="polite">
                    <div className="led-group">
                      <span className="led-micro-label">AIRE</span>
                      <div className="led-bars">
                        {[1, 2, 3].map((bar) => (
                          <span
                            key={bar}
                            className={`led-bar${
                              isPowered && bar <= flowLevel
                                ? isCool
                                  ? ' is-lit-cool'
                                  : ' is-lit-violet'
                                : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className={`led-temp-readout${
                        !isPowered ? ' is-off' : isCool ? ' is-cool' : ''
                      }`}
                    >
                      {isPowered ? effectiveTemp.shortCode : '---'}
                    </div>

                    <div className="led-group">
                      <div className="led-bars">
                        {[1, 2, 3, 4].map((bar) => (
                          <span
                            key={bar}
                            className={`led-bar${
                              isPowered && bar <= effectiveTemp.barCount
                                ? isCool
                                  ? ' is-lit-cool'
                                  : ' is-lit-violet'
                                : ''
                            }`}
                          />
                        ))}
                      </div>
                      <span className="led-micro-label">TEMP</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="console-controls">
                <div>
                  <span className="control-block-label">
                    1 · Nivel térmico ({isPowered ? effectiveTemp.label : 'En espera'})
                  </span>
                  <div className="control-pills">
                    {TEMPERATURE_MODES.map((mode) => (
                      <button
                        key={mode.id}
                        id={`sim-temp-${mode.id}`}
                        type="button"
                        disabled={!isPowered}
                        className={`sim-btn${
                          !coolShotActive && tempId === mode.id ? ' is-selected' : ''
                        }`}
                        onClick={() => {
                          setCoolShotActive(false);
                          setTempId(mode.id);
                        }}
                      >
                        {mode.label}
                        <span className="sim-btn-sub">{mode.shortCode}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="control-block-label">
                    2 · Caudal del motor ({isPowered ? selectedFlow.rpm : '0 rpm'})
                  </span>
                  <div className="control-pills cols-3">
                    {AIRFLOW_LEVELS.map((lvl) => (
                      <button
                        key={lvl.id}
                        id={`sim-flow-${lvl.id}`}
                        type="button"
                        disabled={!isPowered}
                        className={`sim-btn${flowLevel === lvl.id ? ' is-selected' : ''}`}
                        onClick={() => setFlowLevel(lvl.id)}
                      >
                        {lvl.label}
                        <span className="sim-btn-sub">{lvl.rpm}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  id="sim-cool-shot-btn"
                  type="button"
                  disabled={!isPowered}
                  aria-pressed={coolShotActive}
                  className={`cool-shot-toggle${coolShotActive ? ' is-active' : ''}`}
                  onClick={() => setCoolShotActive((prev) => !prev)}
                >
                  <span>Ráfaga Fría Instantánea (28 °C)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                    {coolShotActive ? 'ACTIVA' : 'PULSAR'}
                  </span>
                </button>

                <div className="sim-readout-summary">
                  {isPowered ? (
                    <>
                      <strong>
                        {coolShotActive
                          ? 'Modo Fijación en Frío Activo (28 °C)'
                          : `${effectiveTemp.label} (${effectiveTemp.shortCode}) · ${selectedFlow.label}`}
                      </strong>
                      {coolShotActive
                        ? 'Enfriamiento rápido para sellar la cutícula tras moldear cada mechón.'
                        : `${effectiveTemp.description} ${selectedFlow.description}.`}
                    </>
                  ) : (
                    <>
                      <strong>Dispositivo en reposo</strong>
                      Pulsa el botón superior de encendido en el mango para
                      activar la lectura LED.
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
