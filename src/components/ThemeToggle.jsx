import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Estado para el tema actual
  const [theme, setTheme] = useState(() => {
    // Primero intenta obtener del localStorage
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved;
    }
    // Si no hay guardado, detecta la preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Efecto para aplicar el tema cuando cambia
  useEffect(() => {
    const html = document.documentElement;

    // Remover clases previas
    html.classList.remove("light", "dark");

    // Agregar la clase correspondiente
    html.classList.add(theme);

    // Guardar en localStorage
    localStorage.setItem("theme", theme);

    // Actualizar el meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "dark" ? "#1f2937" : "#ffffff");
    }
  }, [theme]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-lg
        bg-gray-100 dark:bg-gray-800
        text-gray-600 dark:text-gray-300
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      "
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      title={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      {/* Icono con animación */}
      <div className="relative w-5 h-5">
        {/* Sol (modo claro) */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Luna (modo oscuro) */}
        <svg
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  );
}
