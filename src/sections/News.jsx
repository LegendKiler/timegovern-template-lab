const ITEMS = [
  { title: 'Global logistics adjust to port schedules', source: 'Reuters' },
  { title: 'Daylight saving policy debates continue', source: 'AP' },
  { title: 'Solar activity outlook for observers', source: 'NASA' },
  { title: 'Remote teams align on shared meeting hours', source: 'BBC' },
  { title: 'New timezone database updates published', source: 'IANA' },
]

export default function News() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="font-display text-2xl font-bold">News</h1>
      <p className="text-sm text-slate-500 mt-1">Demo headlines. Production uses free RSS feeds.</p>
      <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
        {ITEMS.map((item) => (
          <li key={item.title} className="py-3 flex justify-between gap-4">
            <a href="#" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600" onClick={(e) => e.preventDefault()}>
              {item.title}
            </a>
            <span className="text-[11px] text-slate-400 shrink-0">{item.source}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
