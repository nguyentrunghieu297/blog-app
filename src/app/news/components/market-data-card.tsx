import { MarketItem } from '@/types/news'
import { formatDate } from '@/utils/date-helpers'
import React from 'react'

interface MarketDataCardProps {
  currentTime: Date
  marketData: MarketItem[]
}

export const MarketDataCard: React.FC<MarketDataCardProps> = ({ currentTime, marketData }) => {
  const { day, month, year } = formatDate(currentTime)

  return (
    <div className='border-b border-gray-200 pb-6'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='font-semibold text-base'>Thị trường</h3>
        <span className='text-xs text-gray-500'>
          {currentTime.getHours().toString().padStart(2, '0')}:{currentTime.getMinutes().toString().padStart(2, '0')}{' '}
          {day.toString().padStart(2, '0')}/{month.toString().padStart(2, '0')}/{year}
        </span>
      </div>
      <div className='space-y-1 mb-5'>
        <div className='flex items-center space-x-4 pb-3 border-b border-gray-200'>
          <button className='text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1'>Chứng khoán</button>
          <button className='text-sm text-gray-500 hover:text-gray-900'>Vàng</button>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          {marketData.slice(0, 2).map((item, index) => (
            <div key={index}>
              <div className='text-sm font-medium text-gray-900 mb-1'>{item.name}</div>
              <div className='text-lg font-bold text-gray-900'>{item.value}</div>
              <div className={`text-xs font-medium ${item.isNegative ? 'text-red-600' : 'text-green-600'}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {marketData.slice(2, 4).map((item, index) => (
            <div key={index}>
              <div className='text-sm font-medium text-gray-900 mb-1'>{item.name}</div>
              <div className='text-lg font-bold text-gray-900'>{item.value}</div>
              <div className={`text-xs font-medium ${item.isNegative ? 'text-red-600' : 'text-green-600'}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
