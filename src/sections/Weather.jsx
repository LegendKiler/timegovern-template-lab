export default function Weather({ primary }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="font-display text-2xl font-bold">Weather</h1>
      <p className="text-sm text-slate-500 mt-1">{primary.name} · Demo (Open-Meteo in production)</p>
      <p className="text-4xl font-extrabold mt-4">22°C</p>
      <p className="text-slate-500">Partly cloudy · Wind 12 km/h</p>
    </div>
  )
}
