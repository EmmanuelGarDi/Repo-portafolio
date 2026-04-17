// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("productos");
  const displayNav = location.pathname === "/dashboard" ? "dashboard" : location.pathname === "/info" ? "informativa" : activeNav;

  const handleScroll = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/home") {
      navigate(`/home#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 450);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/15 dark:bg-slate-950/85 border-b border-slate-200/25 dark:border-slate-800/70 shadow-sm backdrop-blur-xl"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex flex-col">
            <button
              onClick={() => navigate("/home")}
              className="text-lg font-semibold tracking-tight cursor-pointer text-slate-500 dark:text-slate-400"
            >
              SmartUI
            </button>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <button
              onClick={() => handleScroll("showcase")}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "productos"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Productos
            </button>
            <button
              onClick={() => handleScroll("gallery")}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "galeria"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Galería
            </button>
            <button
              onClick={() => handleScroll("features")}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "caracteristicas"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Características
            </button>
            <button
              onClick={() => handleScroll("newsletter")}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "contacto"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Contacto
            </button>
            <button
              onClick={() => {
                navigate("/dashboard");
                setActiveNav("dashboard");
              }}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "dashboard"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                navigate("/info");
                setActiveNav("informativa");
              }}
              className={`rounded-full px-3 py-2 transition cursor-pointer ${
                displayNav === "informativa"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800"
              }`}
            >
              Informativa
            </button>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-200 dark:hover:bg-gray-800"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-x-0 top-16 z-40 border-t border-gray-200 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-slate-950/95"
        >
          <div className="mx-auto max-w-md px-5 py-6">
            <div className="mb-5 flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-gray-800 dark:bg-slate-900">
              <div>
                {/* <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Menú
                </p> */}
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Accede a todas las secciones.
                </p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-3">
              <button
                onClick={() => handleScroll("showcase")}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">1</span>
                <div>
                  <p className="font-semibold">Productos</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Explora lo que ofrece el producto.</p>
                </div>
              </button>
              <button
                onClick={() => handleScroll("gallery")}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-600 text-white">2</span>
                <div>
                  <p className="font-semibold">Galería</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Ve ejemplos y estilos visuales.</p>
                </div>
              </button>
              <button
                onClick={() => handleScroll("features")}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white">3</span>
                <div>
                  <p className="font-semibold">Características</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Descubre los beneficios clave.</p>
                </div>
              </button>
              <button
                onClick={() => handleScroll("newsletter")}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-700 text-white">4</span>
                <div>
                  <p className="font-semibold">Contacto</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Envía tu mensaje o consulta.</p>
                </div>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/dashboard");
                }}
                className="flex items-center gap-3 rounded-3xl bg-slate-900 px-4 py-4 text-left text-white transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 dark:bg-slate-900 dark:text-white">D</span>
                <div>
                  <p className="font-semibold">Dashboard</p>
                  <p className="text-sm text-slate-200 dark:text-slate-700">Revisa estadísticas y paneles.</p>
                </div>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/info");
                }}
                className="flex items-center gap-3 rounded-3xl bg-slate-900 px-4 py-4 text-left text-white transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 dark:bg-slate-900 dark:text-white">I</span>
                <div>
                  <p className="font-semibold">Informativa</p>
                  <p className="text-sm text-slate-200 dark:text-slate-700">Accede a la página informativa.</p>
                </div>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  setMenuOpen(false);
                  navigate("/");
                }}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-slate-700 transition hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-gray-800"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100">↵</span>
                <div>
                  <p className="font-semibold">Salir</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Cerrar sesión y volver al inicio.</p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
