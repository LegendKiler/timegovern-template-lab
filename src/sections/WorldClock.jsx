import { useEffect, useState } from 'react'
import { CITIES, formatInTz, getTimeParts } from '../data/cities'

export default function WorldClock({ primary, setPrimary, pinCity, onNavigate }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = formatInTz(now, primary.tz, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  const dateStr = formatInTz(now, primary.tz, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  const { h, m, s } = getTimeParts(now, primary.tz)
  const hAngle = (h % 12) * 30 + m * 0.5
  const mAngle = m * 6
  const sAngle = s * 6

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white">World Clock</h1>
        <p className="text-sm text-slate-500 mt-1">
          Search in the header and click a city to set primary. No corner button.
        </p>

        <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-6 items-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Focal time zone</p>
            <h2 className="font-display text-3xl font-extrabold mt-1">{primary.name}</h2>
            <p className="font-mono text-4xl sm:text-5xl font-bold tracking-tight mt-2">{timeStr}</p>
            <p className="text-slate-400 text-sm mt-1">
              {dateStr} · {primary.country} · {primary.tz}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                onClick={() => pinCity(primary)}
                className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
              >
                Pin city
              </button>
              <button
                type="button"
                onClick={() => onNavigate('calendar')}
                className="px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold"
              >
                Calendar
              </button>
              <button
                type="button"
                onClick={() => onNavigate('company')}
                className="px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold"
              >
                Company
              </button>
            </div>
          </div>

          <div className="relative w-28 h-28 rounded-full border-[3px] border-slate-600 bg-slate-950 shrink-0 mx-auto">
            <div
              className="absolute left-1/2 bottom-1/2 w-0.5 h-7 bg-white origin-bottom rounded"
              style={{ transform: `translateX(-50%) rotate(${hAngle}deg)` }}
            />
            <div
              className="absolute left-1/2 bottom-1/2 w-0.5 h-9 bg-slate-300 origin-bottom rounded"
              style={{ transform: `translateX(-50%) rotate(${mAngle}deg)` }}
            />
            <div
              className="absolute left-1/2 bottom-1/2 w-px h-10 bg-rose-500 origin-bottom"
              style={{ transform: `translateX(-50%) rotate(${sAngle}deg)` }}
            />
            <div className="absolute left-1/2 top-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CITIES.map((c) => {
            const t = formatInTz(now, c.tz, {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })
            const active = c.id === primary.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setPrimary(c)}
                className={`text-left rounded-xl border p-4 transition-colors ${
                  active
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-slate-400'
                }`}
              >
                <div className="font-semibold text-sm text-slate-900 dark:text-white">{c.name}</div>
                <div className="font-mono text-xl font-bold mt-1 text-slate-900 dark:text-white">{t}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {c.abbr} · {c.country}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
