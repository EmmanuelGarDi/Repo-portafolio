export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-white text-lg font-semibold">
          SmartUI
        </h3>

        <p className="mt-2 text-sm">
          Interfaces modernas para desarrolladores
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a className="hover:text-white">Inicio</a>
          <a className="hover:text-white">Features</a>
          <a className="hover:text-white">Contacto</a>
        </div>

        <p className="mt-6 text-xs">
          © 2026 SmartUI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}