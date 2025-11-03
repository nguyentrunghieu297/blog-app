'use client'

import React, { useState } from 'react'
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
import { MarketItem, NewsArticle as NewsArticleType, SectorItem } from '@/types/news'

export default function FinancialNewsLayout() {
  const [activeTab, setActiveTab] = useState('Tổng quan')
  const currentTime = useCurrentTime()
  const weather = useWeather()

  const lunar = convertToLunar(currentTime)
  const vietnameseYear = getVietnameseYear(lunar.year)
  const timeOfDay = getTimeOfDay(currentTime.getHours())

  // Mock data - should be fetched from API
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

  const newsArticles: NewsArticleType[] = [
    {
      id: 1,
      title: 'TP.HCM duy trì tăng trưởng mạnh cuối năm, sức mua và thu ngân sách bứt phá',
      content:
        'Tháng 10 và 10 tháng đầu năm, TP.HCM ghi nhận chỉ số tiêu thụ sản phẩm công nghiệp tăng gần 10%, doanh thu bán lẻ và dịch vụ tiêu dùng đạt hơn 1,57 triệu tỷ đồng (tăng 15%). Thu ngân sách Nhà nước đạt hơn 652.500 tỷ đồng, nhờ dòng vốn đầu tư tư nhân và giao dịch đất sôi động, đặc biệt từ nhà đất tăng 180,7%, thuế thu nhập cá nhân tăng 21,6%.',
      source: 'vietnamnet'
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <div className='flex'>
        <div className='flex-1 border-gray-200'>
          <Header
            currentTime={currentTime}
            weather={weather}
            lunar={lunar}
            vietnameseYear={vietnameseYear}
            timeOfDay={timeOfDay}
          />
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          <div className='px-8 py-8 space-y-8'>
            {[...Array(5)].map((_, i) => (
              <NewsArticle key={i} article={newsArticles[0]} />
            ))}
          </div>
        </div>

        <div className='w-96 bg-white'>
          <div className='p-6 space-y-6'>
            <QuoteCard />
            <FollowTopics />
            <MarketDataCard currentTime={currentTime} marketData={marketData} />
            <SectorIndices currentTime={currentTime} sectorData={sectorData} />
          </div>
        </div>
      </div>
    </div>
  )
}
