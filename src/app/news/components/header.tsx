import { formatDate } from '@/utils/date-helpers'
import { LunarDate } from '@/utils/lunar-calendar'
import { WeatherIcon } from './weather-icon'
import { WeatherData } from '@/types/news'
import React from 'react'

interface HeaderProps {
  currentTime: Date
  weather: WeatherData
  lunar: LunarDate
  vietnameseYear: string
  timeOfDay: string
}

export const Header: React.FC<HeaderProps> = ({ currentTime, weather, lunar, vietnameseYear, timeOfDay }) => {
  const { dayName, day, month, year } = formatDate(currentTime)

  return (
    <header>
      <div className='px-4 md:px-8'>
        <div
          className='
            py-4 
            grid grid-cols-1 gap-3
            md:grid-cols-3 md:items-center
          '
        >
          {/* Date Information */}
          <div className='text-xs text-gray-600 leading-tight text-center md:text-left'>
            <div>
              {dayName}, {day} tháng {month}, {year}
            </div>
            <div className='hidden sm:block mt-1'>
              Âm lịch: {lunar.day} tháng {lunar.month}
              {lunar.isLeap ? ' (nhuận)' : ''}, năm {vietnameseYear}
            </div>
          </div>

          {/* Title - Perfectly centered */}
          <h1 className='text-2xl md:text-3xl font-serif tracking-wide text-center'>Điểm Tin {timeOfDay}</h1>

          {/* Weather Information */}
          <div className='flex items-center justify-center md:justify-end space-x-2 text-sm text-gray-600'>
            <WeatherIcon condition={weather.condition} />
            <span className='hidden sm:inline'>TP.HCM</span>
            <span>{weather.temp}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
