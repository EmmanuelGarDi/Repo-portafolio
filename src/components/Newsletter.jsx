export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/95 p-10 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Newsletter
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              Suscríbete para recibir novedades premium
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Recibe consejos de diseño, tendencias UX y actualizaciones de producto directamente en tu correo.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <label className="sr-only" htmlFor="newsletter-email">Correo electrónico</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Ingresa tu correo"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-900/30 sm:max-w-xl"
            />
            <button className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-violet-500/20 transition hover:brightness-110">
              Suscribirse
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 p-5 text-left dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Gratis</p>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Recibe contenido exclusivo sin costo adicional.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 text-left dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Actualizaciones</p>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Sé de los primeros en conocer nuevas funciones y mejoras.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}