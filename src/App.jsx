import { useMemo, useState } from 'react'
import Header from './components/Header'
import WorldClock from './sections/WorldClock'
import CalendarSection from './sections/CalendarSection'
import Astronomy from './sections/Astronomy'
import Weather from './sections/Weather'
import Timers from './sections/Timers'
import News from './sections/News'
import Calculators from './sections/Calculators'
import Company from './sections/Company'
import { CITIES } from './data/cities'

export default function App() {
  const [section, setSection] = useState('world')
  const [primary, setPrimary] = useState(CITIES[0])
  const [pinned, setPinned] = useState([CITIES[1], CITIES[2], CITIES[4], CITIES[5]])
  const [dark, setDark] = useState(false)

  const pinCity = (city) => {
    setPinned((prev) => {
      if (prev.some((c) => c.id === city.id)) return prev
      return [city, ...prev].slice(0, 8)
    })
  }

  const body = useMemo(() => {
    switch (section) {
      case 'calendar':
        return <CalendarSection />
      case 'astronomy':
        return <Astronomy primary={primary} />
      case 'weather':
        return <Weather primary={primary} />
      case 'timers':
        return <Timers />
      case 'news':
        return <News />
      case 'calculators':
        return <Calculators />
      case 'company':
        return <Company onNavigate={setSection} />
      case 'world':
      default:
        return (
          <WorldClock
            primary={primary}
            setPrimary={setPrimary}
            pinned={pinned}
            pinCity={pinCity}
            onNavigate={setSection}
          />
        )
    }
  }, [section, primary, pinned])

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      <Header
        section={section}
        setSection={setSection}
        primary={primary}
        setPrimary={setPrimary}
        pinned={pinned}
        dark={dark}
        setDark={setDark}
      />

      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-4 py-6">{body}</main>

      <footer className="bg-slate-900 text-slate-400 text-xs py-10 px-4 mt-auto">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          <div>
            <div className="font-display font-bold text-white text-sm mb-2">
              TimeGovern<span className="text-cyan-400">.com</span>
            </div>
            <p>Template lab · Classic layout. Production repo is separate.</p>
            <p className="mt-2">Melbourne, Australia</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2 uppercase tracking-wide text-[11px]">Sections</p>
            <div className="space-y-1">
              {['world', 'news', 'company', 'calculators'].map((id) => (
                <button key={id} type="button" onClick={() => setSection(id)} className="block hover:text-cyan-400 capitalize">
                  {id === 'world' ? 'World Clock' : id}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-2 uppercase tracking-wide text-[11px]">Lab</p>
            <p>Run with npm run dev · localhost:5173</p>
            <p className="mt-1">All nav links switch sections in this app.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-3 right-3 z-50 bg-violet-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
        TEMPLATE LAB · Classic React
      </div>
    </div>
  )
}
