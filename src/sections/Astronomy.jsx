export default function Astronomy({ primary }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="font-display text-2xl font-bold">Sun & Moon</h1>
      <p className="text-sm text-slate-500 mt-1">Demo data for {primary.name}. Production uses SunCalc.</p>
      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        {[
          ['Sunrise', '06:42'],
          ['Sunset', '19:28'],
          ['Moon phase', 'Waxing gibbous'],
        ].map(([label, val]) => (
          <div key={label} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50">
            <div className="text-xs text-slate-500 font-semibold">{label}</div>
            <div className="font-mono text-lg font-bold mt-1">{val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
