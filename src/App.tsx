import { useState } from 'react'
import {
  makeStyles,
  shorthands,
  tokens,
  Title2,
  Subtitle1,
  Input,
  Button,
  Field,
  Spinner,
  Divider,
  Tab,
  TabList,
  Text
} from '@fluentui/react-components'
import {
  SearchRegular,
  CalendarDateRegular,
  SettingsRegular,
  HomeRegular,
  AppsRegular,
  SparkleRegular
} from '@fluentui/react-icons'
import { ActivityCard } from './components/ActivityCard'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
  },
  sidebar: {
    width: '72px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.padding('24px', '0'),
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  navItem: {
    marginBottom: '24px',
  },
  main: {
    flex: 1,
    ...shorthands.padding('40px', '48px'),
    overflowY: 'auto',
  },
  header: {
    marginBottom: '40px',
  },
  searchSection: {
    maxWidth: '800px',
    marginBottom: '48px',
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    ...shorthands.padding('24px'),
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  inputRow: {
    display: 'flex',
    gap: '16px',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '24px',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.padding('80px', '0'),
    color: tokens.colorNeutralForeground4,
  }
});

interface MockResult {
  id: string;
  title: string;
  snippet: string;
  link: string;
  date: string;
}

function App() {
  const styles = useStyles();
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

    setTimeout(() => {
      const mockData: MockResult[] = [
        {
          id: '1',
          title: 'Fluent UI Workshop',
          snippet: '深度探索 Microsoft Fluent UI v9 的實作細節。學習如何建構具備系統感的專業介面。',
          link: 'https://kktix.com/',
          date: 'Oct 26'
        },
        {
          id: '2',
          title: 'Taipei Tech Summit',
          snippet: '年度最大技術盛會。匯集國內外頂尖專家談論雲端、AI 與前端開發趨勢。',
          link: 'https://www.accupass.com/',
          date: 'Nov 12'
        },
        {
          id: '3',
          title: 'Hiking with Experts',
          snippet: '在專家領路下探索台北郊山。享受大自然的同時也能交流戶外技能與心法。',
          link: 'https://www.facebook.com/events',
          date: 'Dec 05'
        }
      ]
      setResults(mockData)
      setIsSearching(false)
    }, 1200)
  }

  return (
    <div className={styles.container}>
      {/* Sidebar - Fluent System Style */}
      <aside className={styles.sidebar}>
        <div className={styles.navItem}>
          <Button appearance="subtle" icon={<SparkleRegular fontSize={24} />} />
        </div>
        <Divider appearance="subtle" style={{ width: '40%', marginBottom: '24px' }} />
        <nav className="flex flex-col">
          <TabList vertical appearance="subtle" selectedValue="search">
            <Tab value="home" icon={<HomeRegular fontSize={20} />} />
            <Tab value="search" icon={<SearchRegular fontSize={20} />} />
            <Tab value="apps" icon={<AppsRegular fontSize={20} />} />
          </TabList>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Button appearance="subtle" icon={<SettingsRegular fontSize={20} />} />
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <Title2>Activity Search Tool</Title2>
          <Subtitle1 block style={{ color: tokens.colorNeutralForeground3 }}>
            基於 Microsoft Fluent UI 的專業活動查詢系統
          </Subtitle1>
        </header>

        <section className={styles.searchSection}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <Field label="搜尋關鍵字">
              <Input
                contentAfter={<SearchRegular />}
                placeholder="搜尋路跑、講座、工作坊..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="large"
              />
            </Field>

            <div className={styles.inputRow}>
              <Field label="從日期" style={{ flex: 1 }}>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  contentAfter={<CalendarDateRegular />}
                />
              </Field>
              <Field label="至日期" style={{ flex: 1 }}>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  contentAfter={<CalendarDateRegular />}
                />
              </Field>
            </div>

            <Button
              appearance="primary"
              size="large"
              disabled={isSearching}
              onClick={handleSearch}
            >
              {isSearching ? '搜尋中...' : '開始搜尋'}
            </Button>
          </form>
        </section>

        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <Subtitle1>搜尋結果</Subtitle1>
            {results.length > 0 && <Text size={200}>找到 {results.length} 個結果</Text>}
          </div>

          {isSearching ? (
            <div className={styles.emptyState}>
              <Spinner label="正在檢索 Google 索引數據..." />
            </div>
          ) : results.length > 0 ? (
            <div className={styles.resultsGrid}>
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
          ) : (
            hasSearched && (
              <div className={styles.emptyState}>
                <SearchRegular fontSize={48} style={{ opacity: 0.1, marginBottom: '16px' }} />
                <Text>未找到符合條件的活動</Text>
              </div>
            )
          )}
        </section>
      </main>
    </div>
  )
}

export default App
