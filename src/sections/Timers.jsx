import { useEffect, useRef, useState } from 'react'

export default function Timers() {
  const [running, setRunning] = useState(false)
  const [acc, setAcc] = useState(0)
  const startRef = useRef(0)
  const [, setTick] = useState(0)

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => setTick((t) => t + 1), 100)
    return () => clearInterval(id)
  }, [running])

  const elapsed = acc + (running ? Date.now() - startRef.current : 0)
  const ms = Math.floor((elapsed % 1000) / 100)
  const s = Math.floor(elapsed / 1000) % 60
  const m = Math.floor(elapsed / 60000)
  const display =
    String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + ms

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="font-display text-2xl font-bold">Timers</h1>
      <p className="text-sm text-slate-500 mt-1">Stopwatch</p>
      <p className="font-mono text-4xl font-bold mt-4">{display}</p>
      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={() => {
            if (running) {
              setAcc((a) => a + (Date.now() - startRef.current))
              setRunning(false)
            } else {
              startRef.current = Date.now()
              setRunning(true)
            }
          }}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold"
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false)
            setAcc(0)
          }}
          className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-sm font-bold"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
