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
      <div className='px-8'>
        <div className='flex items-center justify-between py-4'>
          <div className='text-xs text-gray-600 leading-tight'>
            <div>
              {dayName}, {day} tháng {month}, {year}
            </div>
            <div>
              Âm lịch: {lunar.day} tháng {lunar.month}
              {lunar.isLeap ? ' (nhuận)' : ''}, năm {vietnameseYear}
            </div>
          </div>
          <h1 className='text-3xl font-serif tracking-wide'>Điểm Tin {timeOfDay}</h1>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <WeatherIcon condition={weather.condition} />
            <span>TP.HCM</span>
            <span>{weather.temp}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
