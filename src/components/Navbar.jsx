export default function Navbar({ onLogout }) {
  return (
    <nav className="w-full border-b bg-white/70 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">SmartUI</h1>

        <div className="flex gap-6 items-center">
          <a className="text-gray-600 hover:text-black">Inicio</a>
          <a className="text-gray-600 hover:text-black">Features</a>

          <button
            onClick={onLogout}
            className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}