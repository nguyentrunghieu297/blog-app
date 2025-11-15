import React, { useState, useRef, useEffect } from 'react'
import { formatDate } from '@/utils/date-helpers'
import { LunarDate } from '@/utils/lunar-calendar'
import { WeatherIcon } from './weather-icon'
import { WeatherData } from '@/types/news'
import { Location } from '@/hook/useWeather'

interface HeaderProps {
  currentTime: Date
  weather: WeatherData
  lunar: LunarDate
  vietnameseYear: string
  timeOfDay: string
  location: Location
  availableLocations: Location[]
  onLocationChange: (location: Location) => void
  isClient?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  currentTime,
  weather,
  lunar,
  vietnameseYear,
  timeOfDay,
  location,
  availableLocations,
  onLocationChange
}) => {
  const { dayName, day, month, year } = formatDate(currentTime)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocationSelect = (newLocation: Location) => {
    onLocationChange(newLocation)
    setIsDropdownOpen(false)
  }

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

          {/* Weather Information with Location Selector */}
          <div className='flex items-center justify-center md:justify-end space-x-2 text-sm text-gray-600'>
            <WeatherIcon condition={weather.condition} />

            <div className='relative' ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='hidden sm:inline hover:text-gray-900 focus:outline-none cursor-pointer'
              >
                {location.name} ▾
              </button>

              {isDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto'>
                  {availableLocations.map((loc) => (
                    <button
                      key={loc.name}
                      onClick={() => handleLocationSelect(loc)}
                      className={`
                        w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                        ${loc.name === location.name ? 'bg-gray-50 font-medium' : ''}
                      `}
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span>{weather.temp}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
