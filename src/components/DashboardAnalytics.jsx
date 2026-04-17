const analytics = [
  { title: "Conversiones", value: "+24%", caption: "Este mes" },
  { title: "Retención", value: "89%", caption: "Última semana" },
  { title: "Tiempo medio", value: "4m 28s", caption: "Por sesión" },
];

export default function DashboardAnalytics() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-700 dark:text-blue-300">Analytics</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Resumen del comportamiento</h2>
        </div>
        <span className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Datos actualizados hoy
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.title}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
