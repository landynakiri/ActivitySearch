import { useState } from 'react'
import { GoogleQueryBuilder } from './domain/services/GoogleQueryBuilder'
import { ActivityCard } from './components/ActivityCard'
import './App.css'

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // 生成 Google 搜尋語法 (用於後續 API 或跳轉參考)
    const query = GoogleQueryBuilder.build({
      keyword: searchTerm,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      sites: ['kktix.com', 'accupass.com', 'facebook.com/events']
    })

    console.log('Generated Google Query:', query)

    // 模擬 API 延遲與回傳結果 (此處為計畫中的 Mock 展示環境)
    setTimeout(() => {
      const mockData: MockResult[] = [
        {
          id: '1',
          title: `台北 ${searchTerm || '活動'} - 精選推薦`,
          snippet: `這是一個模擬的搜尋結果，顯示在 ${startDate || '近日'} 期間的精彩活動。實際開發會串接 Google Custom Search API 獲取即時資訊。`,
          link: 'https://kktix.com/',
          date: startDate || '2026-03-15'
        },
        {
          id: '2',
          title: `${searchTerm || '工作坊'} 報名中`,
          snippet: `想參加 ${searchTerm || '有趣'} 的活動嗎？快來看看 Google 搜尋引擎為您搜集到的最新情報，地點位於台北市中心。`,
          link: 'https://www.accupass.com/',
          date: endDate || '2026-03-20'
        }
      ]
      setResults(mockData)
      setIsSearching(false)
    }, 800)
  }

  return (
    <div className="min-h-screen w-screen bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black text-slate-100 p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-12 pt-12">

        {/* Header Section */}
        <header className="text-center space-y-4">
          <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 px-4 py-1 rounded-full text-indigo-300 text-sm font-medium">
            AI Activity Search v4
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-500">
            活動搜尋工具
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
            輸入活動主題與日期區間，讓 Google 的索引能力為您找尋。
          </p>
        </header>

        {/* Search Control Panel (Glassmorphism) */}
        <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSearch} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-1">活動主題</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="路跑、冥想、前端講座..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder-slate-600 font-sans"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-1">開始日期</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-1">結束日期</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-slate-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 ${isSearching
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20 active:scale-[0.98]'
                }`}
            >
              {isSearching ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin"></div>
                  搜尋中...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  啟動 Google 搜尋
                </>
              )}
            </button>
          </form>

          {/* Quick Tags */}
          <div className="mt-8 flex gap-2 flex-wrap justify-center border-t border-white/5 pt-6">
            {['本週末', '路跑', '講座', '冥想'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-indigo-300 px-4 py-1.5 rounded-full text-xs font-medium transition-all"
              >
                #{tag}
              </button>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="space-y-6 mb-20 min-h-[400px]">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              搜尋結果
              {results.length > 0 && <span className="text-slate-500 text-sm font-normal">({results.length})</span>}
            </h2>
          </div>

          {!isSearching && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-600 bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-sm text-slate-500">請輸入條件並點擊搜尋，結果將列於此處</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map(res => (
              <ActivityCard
                key={res.id}
                title={res.title}
                snippet={res.snippet}
                link={res.link}
                formattedDate={res.date}
              />
            ))}
          </div>
        </section>

        <footer className="text-center pb-12">
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
            Data simulated via Google Custom Search Logic
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
