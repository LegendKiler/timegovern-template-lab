export default function CalendarSection() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const first = new Date(year, month, 1)
  const startPad = first.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < startPad; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const monthName = now.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="font-display text-2xl font-bold">Calendar</h1>
      <p className="text-sm text-slate-500 mt-1">{monthName} · Lab calendar grid</p>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="py-2">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
              d === now.getDate()
                ? 'bg-blue-600 text-white font-bold'
                : d
                  ? 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  : ''
            }`}
          >
            {d || ''}
          </div>
        ))}
      </div>
    </div>
  )
}
