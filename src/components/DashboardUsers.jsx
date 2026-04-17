const users = [
  { name: "Andrea Morales", role: "Product Manager", activity: 92, status: "Activo" },
  { name: "Diego Ramírez", role: "UI Designer", activity: 87, status: "En línea" },
  { name: "Lucía González", role: "Frontend Dev", activity: 84, status: "Activo" },
  { name: "Carlos Vega", role: "Data Analyst", activity: 78, status: "Revisando" },
  { name: "María Pérez", role: "Support Lead", activity: 95, status: "Online" },
];

export default function DashboardUsers() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-700 dark:text-blue-300">Usuarios</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Actividad reciente</h2>
        </div>
        <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          Ver todos los usuarios
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{user.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{user.role}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">{user.status}</span>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Actividad</span>
                <span>{user.activity}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full rounded-full bg-blue-600 dark:bg-blue-500" style={{ width: `${user.activity}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
