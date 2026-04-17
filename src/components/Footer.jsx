export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 py-12 text-slate-700 dark:border-gray-800 dark:bg-gray-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-300">
            SmartUI
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Construyendo interfaces con intención
          </h2>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Diseños modernos, experiencias rápidas y una apariencia profesional para tu producto.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200">
            Contáctanos
          </button>
          <button className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-gray-700 dark:text-slate-200 dark:hover:border-gray-500">
            Ver portfolio
          </button>
        </div>
      </div>
    </footer>
  );
}