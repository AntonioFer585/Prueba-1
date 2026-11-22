import { AttachmentsShowcase } from './components/AttachmentsShowcase';
import { ControlSimulator } from './components/ControlSimulator';
import { EditorialLookbook } from './components/EditorialLookbook';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SpecsAndPreorder } from './components/SpecsAndPreorder';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="craft-strip" aria-label="Pilares de diseño">
          <div className="container craft-grid">
            <div className="craft-item">
              <span className="craft-code">01 · MATERIALIDAD</span>
              <h2 className="craft-heading">Negro mate acanalado</h2>
              <p className="craft-desc">
                Cuerpo anodizado con estriado longitudinal antideslizante y
                tacto térmico aislado.
              </p>
            </div>
            <div className="craft-item">
              <span className="craft-code">02 · TELEMETRÍA LED</span>
              <h2 className="craft-heading">Panel en oro rosado</h2>
              <p className="craft-desc">
                Pantalla vertical azul violácea integrada sobre metal cepillado
                para lectura inmediata.
              </p>
            </div>
            <div className="craft-item">
              <span className="craft-code">03 · AERODINÁMICA</span>
              <h2 className="craft-heading">Efecto Coanda guiado</h2>
              <p className="craft-desc">
                Envuelve, alisa y da volumen mediante aire laminar controlado sin
                placas abrasivas.
              </p>
            </div>
          </div>
        </section>

        <AttachmentsShowcase />
        <ControlSimulator />
        <EditorialLookbook />
        <SpecsAndPreorder />
      </main>
      <Footer />
    </>
  );
}

export default App;
