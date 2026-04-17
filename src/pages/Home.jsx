import Navbar from "../components/Navbar";
import Container from "../components/Container";
import HeroPro from "../components/HeroPro";
import Showcase from "../components/Showcase";
import Gallery from "../components/Gallery";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      <Navbar />

      <div className="pt-24">

        <Container>
          <section id="hero" className="scroll-mt-24">
            <HeroPro />
          </section>
        </Container>

        <Container>
          <section id="showcase" className="scroll-mt-24">
            <Showcase />
          </section>
        </Container>

        <Container>
          <section id="gallery" className="scroll-mt-24">
            <Gallery />
          </section>
        </Container>

        <Container>
          <section className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl dark:border-gray-800 dark:bg-gray-950">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900">
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">Impulsa tu diseño</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Lanzamiento rápido</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">Usa componentes listos para usar y acelera tu flujo de trabajo con secciones prediseñadas.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900">
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">Soporte</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Crecimiento continuo</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">Diseñado para escalar con tu producto e incorporar mejoras de forma rápida.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900 dark:text-violet-200">Data</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Decisiones más inteligentes</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">Visualiza información clara y toma decisiones estratégicas con datos clave.</p>
              </div>
            </div>
          </section>
        </Container>

        <Container>
          <section id="info" className="scroll-mt-24 space-y-10">
            <InfoSection />
            <InfoSection reverse />
          </section>
        </Container>

        <Container>
          <section id="features" className="scroll-mt-24">
            <Features />
          </section>
        </Container>

        <Container>
          <section id="newsletter" className="scroll-mt-24">
            <Newsletter />
          </section>
        </Container>

        <Footer />

      </div>
    </div>
  );
}