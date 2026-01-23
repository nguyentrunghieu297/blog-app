import { GoldPrices } from '@/types/gold'
import { MarketItem } from '@/types/news'
import { OilPrices, OilPricesResponse } from '@/types/oil'
import { formatDate } from '@/utils/date-helpers'
import { ChevronsDown, ChevronsUp } from 'lucide-react'
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'

interface MarketDataCardProps {
  currentTime: Date
  marketData: MarketItem[]
  oilPrices?: OilPrices
  goldPrices?: GoldPrices
}

type TabType = 'oil' | 'gold' | 'forex' | 'agriculture'

interface Tab {
  id: TabType
  label: string
}

const TABS: Tab[] = [
  { id: 'oil', label: 'Xăng dầu' },
  { id: 'agriculture', label: 'Nông sản' },
  { id: 'gold', label: 'Vàng' },
  { id: 'forex', label: 'Ngoại tệ' }
]

export const MarketDataCard: React.FC<MarketDataCardProps> = ({ currentTime, marketData, oilPrices, goldPrices }) => {
  const { day, month, year } = formatDate(currentTime)
  const [activeTab, setActiveTab] = useState<TabType>('oil')
  const [isClient, setIsClient] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<Record<TabType, HTMLButtonElement | null>>({
    oil: null,
    agriculture: null,
    gold: null,
    forex: null
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  // ✅ Format thời gian cập nhật giá xăng dầu
  const oilPriceUpdateTime = useMemo(() => {
    if (!oilPrices?.updatedAt || !isClient) return formattedTime

    const updatedDate = new Date(oilPrices.updatedAt)
    const hours = updatedDate.getHours().toString().padStart(2, '0')
    const minutes = updatedDate.getMinutes().toString().padStart(2, '0')
    const day = updatedDate.getDate().toString().padStart(2, '0')
    const month = (updatedDate.getMonth() + 1).toString().padStart(2, '0')
    const year = updatedDate.getFullYear()
    return `${hours}:${minutes} ${day}/${month}/${year}`
  }, [oilPrices, isClient, formattedTime])

  // ✅ Format số tiền VND
  const formatPrice = (price: number): string => {
    return price.toLocaleString('vi-VN')
  }

  // ✅ Format thay đổi giá
  const formatChange = (change: number): string => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toLocaleString('vi-VN')}`
  }

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

  // ✅ Component hiển thị giá xăng dầu mới
  const OilPriceCard = ({ item }: { item: OilPricesResponse['data']['items'][0] }) => {
    const pvoilData = item.prices.PVOIL
    const petrolimexData = item.prices.Petrolimex
    const displayData = pvoilData || petrolimexData

    if (!displayData) return null

    const isPositive = displayData.change >= 0
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600'

    return (
      <div className='bg-gray-50 rounded-lg p-3'>
        <div className='text-xs text-gray-600 mb-1.5 line-clamp-1' title={item.product}>
          {item.product}
        </div>
        <div className='text-base font-bold text-gray-900 mb-0.5'>{formatPrice(displayData.price)} đ</div>
        <div className='flex items-center justify-between'>
          <div className={`text-xs font-medium ${changeColor}`}>
            {formatChange(displayData.change)} đ
            {isPositive ? (
              <ChevronsUp className='ml-1 inline w-3 h-3 mr-1' />
            ) : (
              <ChevronsDown className='ml-1 inline w-3 h-3 mr-1' />
            )}{' '}
          </div>
          {pvoilData && <div className='text-[10px] text-gray-500 font-medium'>PVOIL</div>}
          {!pvoilData && petrolimexData && <div className='text-[10px] text-gray-500 font-medium'>PTL</div>}
        </div>
      </div>
    )
  }

  const normalizeGoldPrice = (value: number) => {
    // Nếu số quá lớn → chia về nghìn
    if (value > 1_000_000) {
      return Math.round(value / 1000)
    }
    return value
  }

  const GoldPriceCard = ({ item }: { item: GoldPrices['items'][0] }) => {
    const buyPrice = normalizeGoldPrice(item.buy.price)
    const buyChange = normalizeGoldPrice(item.buy.change)
    const isPositive = buyChange >= 0

    return (
      <div className='bg-gray-50 rounded-lg p-3'>
        <div className='text-sm font-medium text-gray-900 mb-1 line-clamp-1'>{item.brand}</div>

        <div className='text-lg font-bold text-gray-900'>{formatPrice(buyPrice)} m</div>

        <div className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {formatChange(buyChange)} m
          {isPositive ? (
            <ChevronsUp className='ml-1 inline w-3 h-3 mr-1' />
          ) : (
            <ChevronsDown className='ml-1 inline w-3 h-3 mr-1' />
          )}
        </div>
      </div>
    )
  }

  // ✅ Render nội dung theo tab
  const renderContent = () => {
    if (activeTab === 'oil') {
      if (!oilPrices?.items) {
        return (
          <div className='bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500'>
            Đang cập nhật giá xăng dầu...
          </div>
        )
      }

      const items = oilPrices.items

      return (
        <div className='space-y-3'>
          <div className='grid grid-cols-2 gap-3'>
            {items.slice(0, 2).map((item, index) => (
              <OilPriceCard key={`oil-${index}`} item={item} />
            ))}
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {items.slice(2, 4).map((item, index) => (
              <OilPriceCard key={`oil-${index + 2}`} item={item} />
            ))}
          </div>
          {items.length > 4 && (
            <div className='grid grid-cols-2 gap-3'>
              {items.slice(4, 6).map((item, index) => (
                <OilPriceCard key={`oil-${index + 4}`} item={item} />
              ))}
            </div>
          )}
        </div>
      )
    }

    if (activeTab === 'gold') {
      if (!goldPrices?.items?.length) {
        return (
          <div className='bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-500'>Đang cập nhật giá vàng...</div>
        )
      }

      return (
        <div className='grid grid-cols-2 gap-3'>
          {goldPrices.items.slice(0, 6).map((item, index) => (
            <GoldPriceCard key={`gold-${index}`} item={item} />
          ))}
        </div>
      )
    }

    // Hiển thị dữ liệu chứng khoán cho các tab khác
    return (
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
    )
  }

  const displayTime = activeTab === 'oil' ? oilPriceUpdateTime : formattedTime

  return (
    <div className='border-b border-gray-200 pb-6'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='font-semibold text-base'>Thị trường</h3>
        <span className='text-xs text-gray-500'>{displayTime}</span>
      </div>

      <nav className='mb-5' aria-label='Các danh mục thị trường'>
        <div className='flex items-stretch border-b border-gray-200 relative'>
          {TABS.map((tab) => (
            <TabButton key={tab.id} tab={tab} />
          ))}
          <span
            className='absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-out'
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
          />
        </div>
      </nav>

      {renderContent()}
    </div>
  )
}
