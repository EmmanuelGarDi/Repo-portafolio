// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const items = [
  {
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Diseño limpio",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Trabajo en equipo",
  },
  {
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    title: "Experiencia digital",
  },
  {
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    title: "Tecnología",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Interfaz moderna",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Animaciones UX",
  },
];

export default function Gallery() {
  return (
    <section className="">

      {/* TITULO */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Experiencias visuales
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mt-3">
          Diseño que conecta con el usuario
        </p>
      </div>

      {/* GRID PRO */}
      <div className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      ">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              group
              cursor-pointer
            "
          >

            {/* IMAGEN */}
            <img
              src={item.img}
              className="
                w-full h-[300px]
                object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0
              bg-black/40
              opacity-0
              group-hover:opacity-100
              transition
              flex items-center justify-center
            ">
              <p className="text-white text-lg font-semibold">
                {item.title}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}