import { useState } from 'react'

export default function Company({ onNavigate }) {
  const [sent, setSent] = useState(false)

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold">Company</h1>
        <p className="text-sm text-slate-500 mt-1">Melbourne headquarters (lab content)</p>
        <p className="mt-3 text-sm">Level 12, 120 Collins Street, Melbourne VIC 3000, Australia</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">contact@timegovern.com · +61 (03) 9650 4200</p>

        <form
          className="mt-5 space-y-3 max-w-md"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input required placeholder="Name" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm" />
          <textarea required rows={3} placeholder="Message" className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm" />
          <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold">
            Send message
          </button>
          {sent && <p className="text-sm text-emerald-600">Lab demo — message not emailed. Production uses the real API.</p>}
        </form>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <h2 className="font-display font-bold text-lg">Quick links</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <button type="button" onClick={() => onNavigate('world')} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            World Clock
          </button>
          <button type="button" onClick={() => onNavigate('news')} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            News
          </button>
          <button type="button" onClick={() => onNavigate('calculators')} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            Calculators
          </button>
        </div>
      </div>
    </div>
  )
}
