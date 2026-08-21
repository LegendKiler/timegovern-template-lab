import { useEffect, useMemo, useRef, useState } from 'react'
import { Clock, Search, Sun, Moon, Shield, User, MoreHorizontal, Globe } from 'lucide-react'
import { CITIES, formatInTz } from '../data/cities'

const NAV = [
  { id: 'world', label: 'World Clock' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'astronomy', label: 'Sun & Moon' },
  { id: 'weather', label: 'Weather' },
  { id: 'timers', label: 'Timers' },
  { id: 'news', label: 'News' },
  { id: 'calculators', label: 'Calculators' },
  { id: 'company', label: 'Company' },
]

export default function Header({ section, setSection, primary, setPrimary, pinned, dark, setDark }) {
  const [now, setNow] = useState(() => new Date())
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const utc = now.toISOString().slice(11, 19) + ' UTC'
  const primaryTime = formatInTz(now, primary.tz, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CITIES.slice(0, 8)
    return CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.tz.toLowerCase().includes(q) ||
        c.abbr.toLowerCase().includes(q)
    )
  }, [query])

  const pick = (city) => {
    setPrimary(city)
    setQuery('')
    setOpen(false)
    setSection('world')
  }

  return (
    <header className="sticky top-0 z-40 shadow-lg">
      <div className="bg-slate-950 text-slate-400 text-xs h-9 flex items-center justify-between px-3 sm:px-4 gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-emerald-400 bg-slate-900 border border-emerald-900/50 rounded-lg px-2 py-0.5 shrink-0">
            <Clock className="w-3 h-3" />
            {utc}
          </span>
          <button
            type="button"
            onClick={() => {
              setOpen(true)
            }}
            className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-lg px-2 py-0.5 text-slate-300 hover:text-white max-w-[220px] truncate"
          >
            <span className="text-amber-400">★</span>
            <span className="font-semibold text-white truncate">{primary.name}</span>
            <span className="font-mono text-cyan-400">{primary.abbr}</span>
            <span className="font-mono text-slate-500 hidden md:inline">{primaryTime}</span>
          </button>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button type="button" onClick={() => setDark(!dark)} className="h-8 w-8 rounded-lg border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-200 hover:bg-slate-800" title="Theme">
            {dark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button type="button" className="h-8 w-8 rounded-lg border border-slate-700 bg-slate-900 hidden sm:flex items-center justify-center text-slate-200" title="Security">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
          </button>
          <button type="button" className="h-8 w-8 rounded-lg border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-200" title="Account">
            <User className="w-3.5 h-3.5" />
          </button>
          <button type="button" className="h-8 w-8 rounded-lg border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-200" title="More">
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="bg-slate-900 text-white px-3 sm:px-4 py-3 flex flex-col lg:flex-row lg:items-center gap-3">
        <button type="button" onClick={() => setSection('world')} className="flex items-center gap-3 shrink-0 text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-display font-extrabold text-lg leading-tight tracking-tight">
              TimeGovern<span className="text-cyan-400">.com</span>
            </div>
            <p className="text-[11px] text-slate-400">World clock & global time</p>
          </div>
        </button>

        <div ref={wrapRef} className="relative flex-1 w-full min-w-0 max-w-xl lg:mx-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search city or timezone…"
            className="w-full h-10 rounded-xl bg-slate-950 border border-slate-700 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
          />
          {open && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-slate-950 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-72 overflow-y-auto">
              {results.length === 0 ? (
                <p className="p-4 text-sm text-slate-500">No matches</p>
              ) : (
                results.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pick(c)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm hover:bg-slate-900 border-b border-slate-800/80 last:border-0"
                  >
                    <span>
                      <span className="font-semibold text-white">{c.name}</span>
                      <span className="text-slate-500 text-xs ml-2">{c.country}</span>
                    </span>
                    <span className="font-mono text-xs text-cyan-400">{c.abbr}</span>
                  </button>
                ))
              )}
              <p className="px-4 py-2 text-[10px] text-slate-500 border-t border-slate-800">Click a city to set it as primary</p>
            </div>
          )}
        </div>
      </div>

      {pinned.length > 0 && (
        <div className="bg-slate-900 px-3 sm:px-4 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar">
          {pinned.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => pick(c)}
              className={`text-[11px] px-2.5 py-1 rounded-full border shrink-0 ${
                c.id === primary.id
                  ? 'bg-cyan-950 border-cyan-500 text-cyan-200'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              {c.name} <span className="font-mono text-cyan-400">{c.abbr}</span>
            </button>
          ))}
        </div>
      )}

      <nav className="bg-slate-900/95 border-t border-slate-800 flex overflow-x-auto no-scrollbar px-1 sm:px-2">
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSection(item.id)}
            className={`px-3 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 shrink-0 ${
              section === item.id
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
