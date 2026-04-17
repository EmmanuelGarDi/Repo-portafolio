// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroPro() {
  return (
    <section className="relative py-32 w-full">

      {/* FONDO GRADIENTE */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-purple-500/10 via-blue-500/10 to-transparent
        blur-3xl
      " />

      {/* CONTENIDO */}
      <div className="max-w-3xl mx-auto text-center">

        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            leading-tight
          "
        >
          Experiencias digitales que se sienten{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            increíbles
          </span>
        </motion.h1>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-6 text-lg
            text-gray-500 dark:text-gray-300
            max-w-2xl mx-auto
          "
        >
          Interfaces modernas, animaciones fluidas y diseño centrado en el usuario.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
            mt-10 flex flex-col sm:flex-row
            justify-center gap-4
          "
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:shadow-violet-500/30"
          >
            Comenzar
          </motion.button>

          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-gray-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-gray-800"
          >
            Ver demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/60">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Panel</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Dashboard intuitivo</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Visualiza métricas clave con un diseño limpio y datos rápidos.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/60">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Panel</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Dashboard intuitivo</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Visualiza métricas clave con un diseño limpio y datos rápidos.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/60">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Informática</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Cortex operativo</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Administra datos, alertas y flujos técnicos desde una interfaz profesional.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/60">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Informática</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Cortex operativo</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Administra datos, alertas y flujos técnicos desde una interfaz profesional.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}