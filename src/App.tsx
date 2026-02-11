import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // 預計跳轉至 Google 搜尋
    const query = encodeURIComponent(`site:kktix.com OR site:accupass.com "${searchTerm}"`)
    window.open(`https://www.google.com/search?q=${query}`, '_blank')
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4">
      {/* Glassmorphism Card */}
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">活動查詢</h1>
        <p className="text-indigo-200 mb-8 opacity-80">找尋您的下一個精彩體驗 (東亞區域)</p>

        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜尋課程、講座、路跑..."
            className="w-full bg-white/5 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            搜尋
          </button>
        </form>

        <div className="mt-8 flex gap-3 flex-wrap">
          {['路跑', '講座', '工作坊', '冥想'].map(tag => (
            <span
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer border border-white/10 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs italic">
            Powered by Google Search Engine • Backendless Architecture
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
