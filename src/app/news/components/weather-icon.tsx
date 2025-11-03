import React from 'react'
import { Cloud, CloudRain, Sun } from 'lucide-react'
import { WeatherData } from '@/hook/useWeather'

interface WeatherIconProps {
  condition: WeatherData['condition']
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  if (condition === 'rainy' || condition === 'drizzle') return <CloudRain className='w-4 h-4' />
  if (condition === 'cloudy') return <Cloud className='w-4 h-4' />
  return <Sun className='w-4 h-4' />
}
