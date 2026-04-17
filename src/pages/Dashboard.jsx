import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardAnalytics from "../components/DashboardAnalytics";
import DashboardCharts from "../components/DashboardCharts";
import DashboardProducts from "../components/DashboardProducts";
import DashboardUsers from "../components/DashboardUsers";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <div className="flex pt-24">

        {/* SIDEBAR */}
        <Sidebar onLogout={handleLogout} />

        {/* CONTENIDO */}
        <main className="flex-1 p-6 lg:p-10">

          <section id="dashboard-overview" className="mb-8 flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="mx-auto lg:mx-0">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Panel de control
              </p>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => navigate("/home")}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Volver al inicio
              </button>
              {/* <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Cerrar sesión
              </button> */}
            </div>
          </section>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-8">
            {[
              { title: "Usuarios", value: "1,245", subtitle: "Cuentas activas", accent: "bg-blue-100 text-blue-700" },
              { title: "Ventas", value: "$12,340", subtitle: "Ingresos totales", accent: "bg-emerald-100 text-emerald-700" },
              { title: "Visitas", value: "8,912", subtitle: "Sesiones recientes", accent: "bg-violet-100 text-violet-700" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.accent}`}>
                  {item.title}
                </span>
                <p className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <section id="analytics">
              <DashboardAnalytics />
            </section>
            <section id="users">
              <DashboardUsers />
            </section>
          </div>

          <div className="space-y-8">
            <section id="charts">
              <DashboardCharts />
            </section>
            <DashboardProducts />
          </div>
        </main>
      </div>
    </div>
  );
}