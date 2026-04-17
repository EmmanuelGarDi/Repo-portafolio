export default function Features() {
  const features = [
    {
      title: "Rápido",
      desc: "Aplicaciones optimizadas y veloces",
    },
    {
      title: "Seguro",
      desc: "Protección con autenticación",
    },
    {
      title: "Escalable",
      desc: "Arquitectura preparada para crecer",
    },
    {
      title: "Moderno",
      desc: "UI limpia y profesional",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Características
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="
            p-6
            bg-white/80
            backdrop-blur-md
            border
            rounded-2xl
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-1
            transition
            "
          >
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}