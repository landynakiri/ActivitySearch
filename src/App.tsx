import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, ChevronRight, Settings2, History, Sparkles, Filter, LayoutGrid } from 'lucide-react'
import { GoogleQueryBuilder } from './domain/services/GoogleQueryBuilder'
import { ActivityCard } from './components/ActivityCard'
import { cn } from './lib/utils'

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

    const query = GoogleQueryBuilder.build({
      keyword: searchTerm,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      sites: ['kktix.com', 'accupass.com', 'facebook.com/events']
    })

    console.log('Query:', query)

    // Simulate API delay
    setTimeout(() => {
      const mockData: MockResult[] = [
        {
          id: '1',
          title: `探索 ${searchTerm} - 台北週末活動指南`,
          snippet: `這是一個基於 Google 索引結果的模擬摘要。當前選擇日期為 ${startDate || '近期開始'}。點擊卡片可前往原始活動頁面了解詳細資訊與票價。`,
          link: 'https://kktix.com/',
          date: startDate || '2026-03-15'
        },
        {
          id: '2',
          title: `${searchTerm} 工作坊：深度實作與交流`,
          snippet: `參加專業級的 ${searchTerm} 訓練，由業界專家親自授課。Google 搜尋建議這是一個高質量的活動來源。`,
          link: 'https://www.accupass.com/',
          date: endDate || '2026-03-24'
        },
        {
          id: '3',
          title: `2026 ${searchTerm} 高峰會 (Taipei)`,
          snippet: `全球領先的 ${searchTerm} 專家齊聚台北，探討未來十年的發展趨勢。限定票券熱賣中，請盡速前往官網查看。`,
          link: 'https://www.facebook.com/events',
          date: '2026-04-10'
        }
      ]
      setResults(mockData)
      setIsSearching(false)
    }, 1200)
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden w-64 border-r bg-card/50 p-6 md:flex flex-col gap-8">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">Activity Kit</span>
        </div>

        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-sm font-medium">
            <Search className="h-4 w-4" /> 搜尋
          </button>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <History className="h-4 w-4" /> 歷史紀錄
          </button>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <LayoutGrid className="h-4 w-4" /> 探索分類
          </button>
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors">
            <Settings2 className="h-4 w-4" /> 設定
          </button>
        </nav>

        <div className="mt-auto px-2">
          <div className="rounded-xl border bg-secondary/30 p-4">
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Google Indexing</p>
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              透過 Google 進階語法即時檢索各大活動預售平台。
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">

          {/* Top Bar / Search Panel */}
          <section className="mb-12 space-y-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight">找尋下一次體驗</h2>
              <p className="text-muted-foreground">輸入活動關鍵字與區間，開始智慧搜尋。</p>
            </div>

            <form onSubmit={handleSearch} className="rounded-2xl border bg-card p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="例如：馬拉松、音樂祭、程式開發講座"
                    className="h-12 w-full bg-transparent pl-10 pr-4 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1 border-t md:border-t-0 md:border-l px-2 py-2 md:py-0">
                  <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="flex items-center gap-1">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="h-8 bg-transparent text-xs text-muted-foreground focus:outline-none focus:text-foreground transition-colors"
                    />
                    <span className="text-xs text-muted-foreground opacity-50">至</span>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="h-8 bg-transparent text-xs text-muted-foreground focus:outline-none focus:text-foreground transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSearching ? '搜尋中...' : '開始搜尋'}
                </button>
              </div>
            </form>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-muted-foreground py-1 px-1">常用標籤：</span>
              {['路跑', '講座', '本週末', '台北'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="rounded-full border px-3 py-1 text-xs font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Results Area */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-lg font-bold">搜尋結果</h3>
              </div>
              {results.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  找到 {results.length} 個相關活動
                </span>
              )}
            </div>

            {hasSearched ? (
              <AnimatePresence mode="wait">
                {isSearching ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-48 animate-pulse rounded-xl bg-secondary/50 border" />
                    ))}
                  </motion.div>
                ) : results.length > 0 ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  <motion.div
                    key="empty"
                    className="flex flex-col items-center justify-center rounded-3xl border border-dashed py-24 text-center"
                  >
                    <div className="rounded-full bg-secondary p-4 mb-4">
                      <Search className="h-8 w-8 text-muted-foreground opacity-50" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">找不到符合條件的活動</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">請嘗試調整關鍵字或日期區間</p>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed py-32 text-center bg-card/10">
                <LayoutGrid className="h-10 w-10 text-muted-foreground mb-4 opacity-10" />
                <p className="text-sm text-muted-foreground">準備好開始您的下一次冒險了嗎？</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
