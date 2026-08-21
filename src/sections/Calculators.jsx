import { useState } from 'react'

export default function Calculators() {
  const today = new Date().toISOString().slice(0, 10)
  const [d1, setD1] = useState(today)
  const [d2, setD2] = useState(today)
  const [out, setOut] = useState('')

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm max-w-md">
      <h1 className="font-display text-2xl font-bold">Calculators</h1>
      <p className="text-sm text-slate-500 mt-1">Date difference</p>
      <label className="block text-xs font-semibold text-slate-500 mt-4">Start</label>
      <input type="date" value={d1} onChange={(e) => setD1(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm" />
      <label className="block text-xs font-semibold text-slate-500 mt-3">End</label>
      <input type="date" value={d2} onChange={(e) => setD2(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm" />
      <button
        type="button"
        onClick={() => {
          const a = new Date(d1)
          const b = new Date(d2)
          if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return
          const days = Math.round((b - a) / 86400000)
          setOut(`${days} day(s) between dates`)
        }}
        className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold"
      >
        Calculate
      </button>
      {out && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{out}</p>}
    </div>
  )
}
