'use client'

import { useState, useMemo } from 'react'
import { Header } from './components/header'
import { Navigation } from './components/navigation'
import { NewsArticle } from './components/news-article'
import { QuoteCard } from './components/quote-card'
import { FollowTopics } from './components/follow-topics'
import { MarketDataCard } from './components/market-data-card'
import { SectorIndices } from './components/sector-indices'
import { useCurrentTime } from '@/hook/useCurrentTime'
import { useWeather } from '@/hook/useWeather'
import { convertToLunar, getVietnameseYear } from '@/utils/lunar-calendar'
import { getTimeOfDay } from '@/utils/date-helpers'
import { MarketItem, SectorItem } from '@/types/news'
import { SidebarToggle } from './components/sidebar-toggle'
import { SidebarOverlay } from './components/sidebar-overlay'
import useViewNews from './hook/use-view-news'
import NewsArticleSkeleton from './components/news-article-skeleton'
import useViewOilPrices from './hook/use-view-oil-prices'
import useViewGoldPrices from './hook/use-view-gold-prices'

export default function FinancialNewsLayout() {
  const [activeTab, setActiveTab] = useState('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const {
    data: news,
    isLoading,
    error
  } = useViewNews({
    category: 'tong-quan',
    limit: 50
  })

  const { data: oilPrices } = useViewOilPrices()
  const { data: goldPrices } = useViewGoldPrices()

  const filteredNews = useMemo(() => {
    if (!news || activeTab === 'all') return news

    return news.filter((article) => {
      const source = article.source?.toLowerCase() || ''
      const link = article.link?.toLowerCase() || ''

      const sourceMap: Record<string, string[]> = {
        vnexpress: ['vnexpress'],
        tuoitre: ['tuoitre'],
        thanhnien: ['thanhnien'],
        dantri: ['dantri'],
        nguoilaodong: ['nld', 'nguoilaodong', 'nld.com.vn'],
        baolamdong: ['baolamdong']
      }

      const keywords = sourceMap[activeTab] || []
      return keywords.some((keyword) => source.includes(keyword) || link.includes(keyword))
    })
  }, [news, activeTab])

  const currentTime = useCurrentTime()
  const { isClient, weather, location, changeLocation, availableLocations } = useWeather()

  const lunar = convertToLunar(currentTime)
  const vietnameseYear = getVietnameseYear(lunar.year)
  const timeOfDay = getTimeOfDay(currentTime.getHours())

  const marketData: MarketItem[] = [
    { name: 'VN-INDEX', value: '1.639,65', change: '-29,92', isNegative: true },
    { name: 'HNX-INDEX', value: '265,85', change: '-1,11', isNegative: true },
    { name: 'UPCOM', value: '113,22', change: '-0,09', isNegative: true },
    { name: 'VN30', value: '1.885,36', change: '-39,82', isNegative: true }
  ]

  const sectorData: SectorItem[] = [
    { name: 'Công nghệ thông tin', value: '4.846,93', change: '+1.07%', isNegative: false },
    { name: 'Tài chính', value: '2.254,64', change: '-1.72%', isNegative: true },
    { name: 'Bất động sản', value: '1.990,18', change: '-4.65%', isNegative: true }
  ]

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderNewsContent = () => {
    if (error) {
      return (
        <div className='text-center py-12'>
          <div className='text-red-500 mb-2'>❌ Có lỗi xảy ra khi tải tin tức</div>
          <button onClick={() => window.location.reload()} className='text-sm text-blue-600 hover:underline'>
            Thử lại
          </button>
        </div>
      )
    }

    if (isLoading) {
      return [...Array(10)].map((_, i) => <NewsArticleSkeleton key={i} />)
    }

    if (!filteredNews || filteredNews.length === 0) {
      return (
        <div className='text-center py-12'>
          <div className='text-gray-500 mb-2'>Không tìm thấy bài viết từ nguồn này</div>
          <button onClick={() => setActiveTab('all')} className='text-sm text-blue-600 hover:underline'>
            Xem tất cả nguồn
          </button>
        </div>
      )
    }

    return filteredNews.map((article, i) => <NewsArticle key={`${article.link}-${i}`} article={article} />)
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col lg:flex-row'>
        {/* Main Content */}
        <div className='flex-1 border-gray-200'>
          <Header
            currentTime={currentTime}
            weather={weather}
            lunar={lunar}
            vietnameseYear={vietnameseYear}
            timeOfDay={timeOfDay}
            location={location}
            availableLocations={availableLocations}
            onLocationChange={changeLocation}
            isClient={isClient}
          />

          <Navigation
            activeTab={activeTab}
            onTabChange={handleTabChange}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <div className='px-4 md:px-6 lg:px-8 py-6 md:py-8 space-y-4 md:space-y-6'>{renderNewsContent()}</div>
        </div>

        {/* Sidebar - Desktop */}
        <div className='hidden xl:block w-96 bg-white border-l border-gray-200'>
          <div className='p-6 space-y-6 sticky top-0'>
            <QuoteCard />
            <FollowTopics />
            {/* ✅ Truyền oilPrices vào MarketDataCard */}
            <MarketDataCard
              currentTime={currentTime}
              marketData={marketData}
              oilPrices={oilPrices}
              goldPrices={goldPrices}
            />
            <SectorIndices currentTime={currentTime} sectorData={sectorData} />
          </div>
        </div>

        {/* Sidebar Toggle Button - Tablet/Mobile */}
        <SidebarToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Sidebar Overlay - Tablet/Mobile */}
        <SidebarOverlay isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
          <QuoteCard />
          <FollowTopics />
          {/* ✅ Truyền oilPrices vào MarketDataCard */}
          <MarketDataCard
            currentTime={currentTime}
            marketData={marketData}
            oilPrices={oilPrices}
            goldPrices={goldPrices}
          />
          <SectorIndices currentTime={currentTime} sectorData={sectorData} />
        </SidebarOverlay>
      </div>
    </div>
  )
}
