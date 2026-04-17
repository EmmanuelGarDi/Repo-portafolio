// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Smart Dashboard Pro", category: "SaaS", price: "$49", stock: "Disponible", status: "Activo" },
  { id: 2, name: "Growth Kit", category: "Marketing", price: "$32", stock: "Disponible", status: "Nuevo" },
  { id: 3, name: "UX Booster", category: "UX", price: "$27", stock: "Limitado", status: "Hot" },
  { id: 4, name: "Analytics Pack", category: "Data", price: "$65", stock: "Disponible", status: "Popular" },
  { id: 5, name: "Agency Theme", category: "UI", price: "$39", stock: "Disponible", status: "Activo" },
  { id: 6, name: "Builder Suite", category: "Dev", price: "$72", stock: "Disponible", status: "Nuevo" },
  { id: 7, name: "Conversion Lab", category: "Sales", price: "$54", stock: "Limitado", status: "Trending" },
  { id: 8, name: "Content Flow", category: "Content", price: "$29", stock: "Disponible", status: "Activo" },
  { id: 9, name: "Mobile Pulse", category: "App", price: "$58", stock: "Disponible", status: "Popular" },
  { id: 10, name: "Support Desk", category: "Help", price: "$46", stock: "Disponible", status: "Nuevo" },
];

export default function DashboardProducts() {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Catálogo</p>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Productos destacados</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Ver todos los productos
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100/50 transition hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/10"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">{product.category}</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.price}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{product.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{product.stock} • {product.status}</p>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Stock</span>
              <span>{product.stock}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
