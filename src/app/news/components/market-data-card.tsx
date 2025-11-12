import { MarketItem } from '@/types/news'
import { formatDate } from '@/utils/date-helpers'
import React, { useState, useMemo } from 'react'

interface MarketDataCardProps {
  currentTime: Date
  marketData: MarketItem[]
}

type TabType = 'stocks' | 'gold' | 'forex' | 'agriculture'

interface Tab {
  id: TabType
  label: string
}

const TABS: Tab[] = [
  { id: 'agriculture', label: 'Nông sản' },
  { id: 'stocks', label: 'Chứng khoán' },
  { id: 'gold', label: 'Vàng' },
  { id: 'forex', label: 'Ngoại tệ' }
]

export const MarketDataCard: React.FC<MarketDataCardProps> = ({ currentTime, marketData }) => {
  const { day, month, year } = formatDate(currentTime)
  const [activeTab, setActiveTab] = useState<TabType>('stocks')

  // Memoize formatted time để tránh tính toán lại mỗi render
  const formattedTime = useMemo(() => {
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const dayStr = day.toString().padStart(2, '0')
    const monthStr = month.toString().padStart(2, '0')
    return `${hours}:${minutes} ${dayStr}/${monthStr}/${year}`
  }, [currentTime, day, month, year])

  // Component con cho tab button để tránh lặp lại code
  const TabButton = ({ tab }: { tab: Tab }) => {
    const isActive = activeTab === tab.id
    return (
      <button
        onClick={() => setActiveTab(tab.id)}
        className={`text-sm pb-3 transition-colors relative ${
          isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-pressed={isActive}
        aria-label={`Xem ${tab.label}`}
      >
        {tab.label}
        {isActive && <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900' />}
      </button>
    )
  }

  // Component con cho market item để tránh lặp lại code
  const MarketItemCard = ({ item }: { item: MarketItem }) => (
    <div>
      <div className='text-sm font-medium text-gray-900 mb-1'>{item.name}</div>
      <div className='text-lg font-bold text-gray-900'>{item.value}</div>
      <div className={`text-xs font-medium ${item.isNegative ? 'text-red-600' : 'text-green-600'}`}>{item.change}</div>
    </div>
  )

  return (
    <div className='border-b border-gray-200 pb-6'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='font-semibold text-base'>Thị trường</h3>
        <span className='text-xs text-gray-500'>{formattedTime}</span>
      </div>

      {/* Tab navigation */}
      <nav className='mb-5' aria-label='Các danh mục thị trường'>
        <div className='flex items-center space-x-4 border-b border-gray-200 relative'>
          {TABS.map((tab) => (
            <TabButton key={tab.id} tab={tab} />
          ))}
        </div>
      </nav>

      {/* Market data display */}
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          {marketData.slice(0, 2).map((item, index) => (
            <MarketItemCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {marketData.slice(2, 4).map((item, index) => (
            <MarketItemCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
