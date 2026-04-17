// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const chartData = [
  { month: "Ene", ventas: 4200, usuarios: 320 },
  { month: "Feb", ventas: 5300, usuarios: 390 },
  { month: "Mar", ventas: 6100, usuarios: 450 },
  { month: "Abr", ventas: 7000, usuarios: 520 },
  { month: "May", ventas: 8200, usuarios: 610 },
  { month: "Jun", ventas: 9200, usuarios: 700 },
];

export default function DashboardCharts() {
  return (
    <section className="grid gap-6 xl:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ingresos Mensuales</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Sales Trend</h2>
          </div>
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold dark:bg-blue-900 dark:text-blue-200">
            +18% este mes
          </span>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4338CA" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4338CA" stopOpacity={0.08} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Area type="monotone" dataKey="ventas" stroke="#4338CA" fill="url(#colorVentas)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Usuarios activos</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Engagement</h2>
          </div>
          <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold dark:bg-green-900 dark:text-green-200">
            +10% semana
          </span>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Legend wrapperStyle={{ color: "#6B7280" }} />
              <Bar dataKey="usuarios" fill="#10B981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
}
