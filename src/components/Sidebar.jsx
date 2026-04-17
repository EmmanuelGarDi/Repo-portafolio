import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { id: "dashboard-overview", label: "Dashboard", description: "Resumen general", badge: "Resumen" },
  { id: "users", label: "Usuarios", description: "Actividad del equipo", badge: "Equipo" },
  { id: "analytics", label: "Analítica", description: "Indicadores clave", badge: "Métricas" },
  { id: "charts", label: "Gráficas", description: "Visualización de datos", badge: "Charts" },
];

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("dashboard-overview");

  const handleScroll = (id) => {
    setActiveTab(id);
    if (location.pathname !== "/dashboard") {
      navigate("/dashboard");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:max-h-[calc(100vh-6rem)] w-full max-w-xs flex-shrink-0 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-slate-950/95">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-7">
            {/* <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Navegación del panel
            </p> */}
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              Menú lateral
            </h2>
            {/* <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Selecciona una sección y el contenido se centra automáticamente.
            </p> */}
          </div>

          <nav className="space-y-3 overflow-y-auto pr-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`w-full rounded-3xl border px-4 py-4 text-left transition duration-200 ${
                  activeTab === item.id
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-gray-700 dark:hover:bg-slate-800"
                }`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.description}</p>
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={onLogout}
          className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
