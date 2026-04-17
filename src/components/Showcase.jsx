// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Diseño elegante",
    desc: "Interfaces limpias y modernas centradas en el usuario",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
  },
  {
    title: "Experiencia fluida",
    desc: "Animaciones suaves que mejoran la interacción",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Tecnología moderna",
    desc: "Construido con herramientas de última generación",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

export default function Showcase() {
  const [index, setIndex] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <section className=" ">

      <h2 className="text-3xl font-bold text-center mb-10">
        Experiencia del producto
      </h2>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* IMAGEN */}
            <img
              src={slides[index].img}
              alt=""
              className="w-full h-[400px] object-cover"
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0
              bg-black/40
              flex flex-col justify-center items-center
              text-center text-white p-6
            ">
              <h3 className="text-3xl font-bold">
                {slides[index].title}
              </h3>
              <p className="mt-3 max-w-md">
                {slides[index].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTONES */}
        <button
          onClick={prevSlide}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            bg-white/70 dark:bg-gray-800/70
            p-2 rounded-full
          "
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            bg-white/70 dark:bg-gray-800/70
            p-2 rounded-full
          "
        >
          ▶
        </button>

      </div>
    </section>
  );
}