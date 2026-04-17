// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    // Simulación login
    localStorage.setItem("user", JSON.stringify({ email }));

    // Redirige al home profesional
    navigate("/home");
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-gray-100 to-gray-300
        dark:from-gray-900 dark:to-gray-950
      "
    >
      {/* CONTENEDOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >

        {/* EFECTO GLOW (PRO) */}
        <div className="
          absolute -inset-1
          bg-gradient-to-r from-purple-500 to-blue-500
          blur-2xl opacity-20
        " />

        {/* CARD LOGIN */}
        <motion.form
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="
            relative
            backdrop-blur-xl
            bg-white/70 dark:bg-gray-800/70
            border border-white/20
            shadow-2xl
            rounded-2xl
            p-8 w-80 space-y-5
          "
        >
          {/* TITULO */}
          <h2 className="text-2xl font-bold text-center">
            Bienvenido 👋
          </h2>

          <p className="text-center text-sm text-gray-500 dark:text-gray-300">
            Accede a tu cuenta
          </p>

          {/* INPUT EMAIL */}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="
              w-full p-3 rounded-xl
              border
              bg-transparent
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500 dark:placeholder:text-slate-400
              focus:outline-none
              focus:ring-2 focus:ring-black
              dark:focus:ring-white
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* INPUT PASSWORD */}
          <input
            type="password"
            placeholder="Contraseña"
            className="
              w-full p-3 rounded-xl
              border
              bg-transparent
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500 dark:placeholder:text-slate-400
              focus:outline-none
              focus:ring-2 focus:ring-black
              dark:focus:ring-white
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BOTÓN */}
          <button
            className="
              w-full py-3 rounded-xl
              bg-black dark:bg-white
              text-white dark:text-black
              hover:scale-105
              active:scale-95
              transition-all duration-300
              shadow-lg
            "
          >
            Ingresar
          </button>

          {/* TEXTO EXTRA */}
          <p className="text-xs text-center text-gray-400">
            Proyecto demo para portafolio
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
}