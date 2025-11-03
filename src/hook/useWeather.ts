import { WeatherData } from '@/types/news'
import { useState, useEffect } from 'react'

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData>({ temp: '--', condition: 'loading' })

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=10.8231&longitude=106.6297&current=temperature_2m,weather_code&timezone=Asia/Bangkok'
        )
        const data = await response.json()
        const temp = Math.round(data.current.temperature_2m)
        const weatherCode = data.current.weather_code

        let condition: WeatherData['condition'] = 'sunny'
        if (weatherCode >= 61 && weatherCode <= 67) condition = 'rainy'
        else if (weatherCode >= 51 && weatherCode <= 57) condition = 'drizzle'
        else if (weatherCode >= 80 && weatherCode <= 82) condition = 'rainy'
        else if (weatherCode >= 2 && weatherCode <= 3) condition = 'cloudy'

        setWeather({ temp: `${temp}°C`, condition })
      } catch (error) {
        console.error('Error fetching weather data:', error)
        setWeather({ temp: '28°C', condition: 'sunny' })
      }
    }
    fetchWeather()
  }, [])

  return weather
}
