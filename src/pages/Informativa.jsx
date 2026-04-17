import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.png";

const menuItems = [
  { id: "panel", label: "Panel" },
  { id: "users", label: "Usuarios" },
  { id: "analytics", label: "Analítica" },
];

export default function Informativa() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("panel");

  const handleGoTo = (id) => {
    setActiveItem(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <div className="flex flex-col lg:flex-row pt-24">
        <aside className="lg:sticky lg:top-24 lg:w-80 h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] flex-shrink-0 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-gray-800/80 dark:bg-slate-950/90">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Interfaz inteligente
            </p>
            {/* <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Navegación rápida
            </h2> */}
          </div>
          {/* <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-800 dark:bg-slate-900">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Selecciona una sección para ver contenido centrado y fácil de seguir.
            </p>
          </div> */}
          <nav className="flex-1 space-y-3 overflow-y-auto pr-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleGoTo(item.id)}
                className={`w-full rounded-3xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  activeItem === item.id
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-gray-700 dark:hover:bg-slate-800"
                }`}
              >
                <span className="block text-base">{item.label}</span>
                <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                  {item.id === "panel" && "Resumen general"}
                  {item.id === "users" && "Actividad del equipo"}
                  {item.id === "analytics" && "Indicadores clave"}
                </span>
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="mt-6 w-full rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Cerrar sesión
          </button>
        </aside>

        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-10">
          <section id="panel" className="mb-10 text-center lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Panel de control
              </p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                Panel informativo
              </h1>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
                Vista diseñada para mostrar información clara y ordenada, con un menú lateral fijo y contenido que se centra suavemente cuando navegas entre secciones.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-slate-950">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  Perspectiva visual
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                  Imagen y contexto en un solo lugar
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                  Presenta datos, usuarios y métricas con un diseño que facilita la lectura. Esta sección combina una ilustración limpia con texto descriptivo para comunicar el valor del panel de forma directa.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Navegación fija</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Menú con altura constante para enfoque visual.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Scroll centric</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Las secciones se centran al hacer clic en el menú.</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-inner dark:border-gray-800 dark:bg-slate-900">
                <img src={heroImage} alt="Panel informativo" className="h-full w-full object-cover" />
              </div>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-10">
            {[
              { label: "Usuarios", value: "1,245", subtitle: "Cuentas activas" },
              { label: "Ventas", value: "$12,340", subtitle: "Ingresos totales" },
              { label: "Visitas", value: "8,912", subtitle: "Sesiones recientes" },
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-gray-800 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </section>

          <section id="analytics" className="grid gap-6 lg:grid-cols-2 mb-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-slate-950">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Analítica
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                Resumen del comportamiento
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Conversiones", value: "+24%" },
                  { title: "Retención", value: "89%" },
                  { title: "Tiempo", value: "4m 28s" },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-slate-900">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {item.title}
                    </p>
                    <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="users" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-slate-950">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Usuarios
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                Actividad reciente
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  { name: "Andrea Morales", role: "Product Manager", activity: 92, status: "Activo" },
                  { name: "Diego Ramírez", role: "UI Designer", activity: 87, status: "En línea" },
                ].map((user) => (
                  <div key={user.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-slate-900 dark:text-white">{user.name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{user.role}</p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
                        {user.status}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>Actividad</span>
                        <span>{user.activity}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-blue-600" style={{ width: `${user.activity}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
