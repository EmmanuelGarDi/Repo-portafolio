// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Rápido",
      desc: "Aplicaciones optimizadas y veloces para equipos modernos.",
    },
    {
      title: "Seguro",
      desc: "Protección con autenticación y control de accesos.",
    },
    {
      title: "Escalable",
      desc: "Arquitectura preparada para crecer con tu negocio.",
    },
    {
      title: "Moderno",
      desc: "UI limpia, profesional y con experiencia premium.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            Beneficios clave
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Características intuitivas para tu producto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Navega fácilmente a través de funcionalidades diseñadas para mejorar la experiencia y acelerar resultados.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-slate-900"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-semibold text-white shadow-lg">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}