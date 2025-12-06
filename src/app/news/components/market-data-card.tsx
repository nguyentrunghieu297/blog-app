import { MarketItem } from '@/types/news'
import { formatDate } from '@/utils/date-helpers'
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'

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
  const [activeTab, setActiveTab] = useState<TabType>('agriculture')
  const [isClient, setIsClient] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<Record<TabType, HTMLButtonElement | null>>({
    agriculture: null,
    stocks: null,
    gold: null,
    forex: null
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  // ✅ Update indicator position khi tab thay đổi
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab]
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth
      })
    }
  }, [activeTab, isClient])

  const formattedTime = useMemo(() => {
    if (!isClient) {
      return '--:-- --/--/----'
    }
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const dayStr = day.toString().padStart(2, '0')
    const monthStr = month.toString().padStart(2, '0')
    return `${hours}:${minutes} ${dayStr}/${monthStr}/${year}`
  }, [isClient, currentTime, day, month, year])

  // ✅ Redesigned TabButton - auto width, flex grow
  const TabButton = ({ tab }: { tab: Tab }) => {
    const isActive = activeTab === tab.id
    const handleRef = useCallback(
      (el: HTMLButtonElement | null) => {
        if (el) {
          tabRefs.current[tab.id] = el
        }
      },
      [tab.id]
    )
    return (
      <button
        ref={handleRef}
        onClick={() => setActiveTab(tab.id)}
        className={`
          flex-auto text-sm py-3 px-3 transition-colors relative whitespace-nowrap
          ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}
        `}
        aria-pressed={isActive}
        aria-label={`Xem ${tab.label}`}
      >
        {tab.label}
      </button>
    )
  }

  const MarketItemCard = ({ item }: { item: MarketItem }) => (
    <div className='bg-gray-50 rounded-lg p-3'>
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

      {/* ✅ Redesigned Tab Navigation - với sliding indicator */}
      <nav className='mb-5' aria-label='Các danh mục thị trường'>
        <div className='flex items-stretch border-b border-gray-200 relative'>
          {TABS.map((tab) => (
            <TabButton key={tab.id} tab={tab} />
          ))}
          {/* ✅ Sliding indicator */}
          <span
            className='absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-out'
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
          />
        </div>
      </nav>

      {/* Market data display */}
      <div className='space-y-3'>
        <div className='grid grid-cols-2 gap-3'>
          {marketData.slice(0, 2).map((item, index) => (
            <MarketItemCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-3'>
          {marketData.slice(2, 4).map((item, index) => (
            <MarketItemCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
