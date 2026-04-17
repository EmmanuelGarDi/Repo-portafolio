import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* NAVBAR */}
      <Navbar onLogout={handleLogout} />

      {/* HERO */}
      <section className="text-center py-28 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Construye interfaces modernas 🚀
        </h1>

        <p className="mt-6 text-gray-500 text-lg">
          Estás dentro de una aplicación protegida con login.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="
            bg-black text-white
            px-8 py-4
            rounded-xl
            hover:scale-105
            transition
            shadow-lg
          ">
            Explorar
          </button>

          <button className="
            border px-8 py-4
            rounded-xl
            hover:bg-gray-100
            transition
          ">
            Ver más
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}