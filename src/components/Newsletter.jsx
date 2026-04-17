export default function Newsletter() {
  return (
    <section className="py-24 px-6 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Únete a nuestra comunidad
      </h2>

      <p className="mt-4 text-gray-300">
        Recibe actualizaciones y nuevas funcionalidades
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Tu correo"
          className="
            px-5 py-3
            rounded-xl
            text-black
            w-72
          "
        />

        <button className="
          bg-white text-black
          px-6 py-3
          rounded-xl
          hover:scale-105
          transition
        ">
          Suscribirme
        </button>
      </div>
    </section>
  );
}