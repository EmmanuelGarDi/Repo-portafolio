// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function InfoSection({ reverse = false }) {
  return (
    <section className="">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            alt="Tecnología moderna"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h3 className="text-3xl font-bold mb-6">
            Tecnología de vanguardia
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Construimos experiencias digitales excepcionales utilizando las últimas tecnologías
            y mejores prácticas de desarrollo. Cada detalle está diseñado para maximizar
            la satisfacción del usuario.
          </p>
          <button className="
            bg-black dark:bg-white
            text-white dark:text-black
            px-8 py-4 rounded-xl
            hover:scale-105
            transition-all duration-300
            shadow-lg
          ">
            Explorar más
          </button>
        </motion.div>

      </div>
    </section>
  );
}