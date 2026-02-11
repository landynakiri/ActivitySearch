import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Settings, Home, LayoutGrid, Sparkles } from 'lucide-react'
import { ActivityCard } from './components/ActivityCard'

interface MockResult {
  id: string;
  title: string;
  snippet: string;
  link: string;
  date: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [results, setResults] = useState<MockResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    // Simulate API delay
    setTimeout(() => {
      const mockData: MockResult[] = [
        {
          id: '1',
          title: 'Hiking Expedition',
          snippet: 'Explore scenic trails with guided support. Discover nature like never before in this premium expedition.',
          link: 'https://kktix.com/',
          date: 'Oct 26'
        },
        {
          id: '2',
          title: 'Hiking Climbing',
          snippet: 'Explore scenic trails and mountain climbing. Experience the thrill of the heights with our expert guides.',
          link: 'https://www.accupass.com/',
          date: 'Oct 26'
        },
        {
          id: '3',
          title: 'Rural Expedition',
          snippet: 'Explore your local trails with outdoor snacks and hiking developed activities for families.',
          link: 'https://www.facebook.com/events',
          date: 'Oct 26'
        },
        {
          id: '4',
          title: 'Hiking Expedition',
          snippet: 'Short of inspiration and beautiful challenges? Join us for an unforgettable trekking expression.',
          link: 'https://kktix.com/',
          date: 'Oct 26'
        }
      ]
      setResults(mockData)
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="flex h-screen bg-[#0E1117] text-white font-sans antialiased overflow-hidden">
      {/* Slim Sidebar - Matches Mockup Exactly */}
      <aside className="flex flex-col items-center w-20 py-8 border-r border-white/5 bg-[#0E1117]">
        <div className="mb-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Sparkles className="h-6 w-6 text-white/80" />
          </div>
        </div>

        <nav className="flex flex-col gap-8">
          <button className="text-white/40 hover:text-white transition-colors">
            <Home className="h-6 w-6" />
          </button>
          <button className="text-primary h-6 w-6">
            <Search className="h-6 w-6" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <LayoutGrid className="h-6 w-6" />
          </button>
        </nav>

        <div className="mt-auto">
          <button className="text-white/40 hover:text-white transition-colors">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-12 py-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Activity Search Tool</h1>
        </header>

        {/* Search Formulation Area */}
        <section className="max-w-4xl space-y-4 mb-14">
          <form onSubmit={handleSearch} className="space-y-4">
            {/* Search Input Box */}
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search activities..."
                className="w-full h-16 bg-white/[0.03] border border-white/5 rounded-2xl px-6 text-lg focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all placeholder-white/20"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/20 group-focus-within:text-white/40 transition-colors" />
            </div>

            {/* Dates Area */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center px-5 group hover:border-white/10 transition-all">
                <span className="text-white/20 text-sm flex-1">Start Date</span>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Calendar className="h-5 w-5 text-white/20 group-hover:text-white/40" />
                {startDate && <span className="absolute left-5 text-sm text-white/70">{startDate}</span>}
              </div>
              <div className="relative h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center px-5 group hover:border-white/10 transition-all">
                <span className="text-white/20 text-sm flex-1">End Date</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Calendar className="h-5 w-5 text-white/20 group-hover:text-white/40" />
                {endDate && <span className="absolute left-5 text-sm text-white/70">{endDate}</span>}
              </div>
            </div>

            <button type="submit" className="hidden">Submit</button>
          </form>
        </section>

        {/* Results Grid Area */}
        <section>
          {isSearching ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/[0.02] border border-white/5" />
              ))}
            </div>
          ) : results.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {results.map(res => (
                <ActivityCard
                  key={res.id}
                  title={res.title}
                  snippet={res.snippet}
                  link={res.link}
                  formattedDate={res.date}
                />
              ))}
            </motion.div>
          ) : (
            hasSearched ? (
              <div className="flex flex-col items-center justify-center py-20 text-white/20 border border-dashed border-white/5 rounded-3xl">
                <Search className="h-10 w-10 mb-4 opacity-5" />
                <p>No activities found</p>
              </div>
            ) : null
          )}
        </section>
      </main>
    </div>
  )
}

export default App
