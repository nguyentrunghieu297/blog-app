import { WeatherData } from '@/types/news'
import { useState, useEffect } from 'react'

// Định nghĩa type cho locations
export interface Location {
  name: string
  latitude: number
  longitude: number
}

// Danh sách các tỉnh thành tại Việt Nam
export const VIETNAM_LOCATIONS: Location[] = [
  { name: 'TP. Hồ Chí Minh', latitude: 10.8231, longitude: 106.6297 },
  { name: 'Hà Nội', latitude: 21.0285, longitude: 105.8542 },
  { name: 'Đà Nẵng', latitude: 16.0544, longitude: 108.2022 },
  { name: 'Cần Thơ', latitude: 10.0452, longitude: 105.7469 },
  { name: 'Hải Phòng', latitude: 20.8449, longitude: 106.6881 },
  { name: 'Nha Trang', latitude: 12.2388, longitude: 109.1967 },
  { name: 'Đà Lạt', latitude: 11.9404, longitude: 108.4583 },
  { name: 'Huế', latitude: 16.4637, longitude: 107.5909 },
  { name: 'Vũng Tàu', latitude: 10.4113, longitude: 107.1369 },
  { name: 'Quy Nhơn', latitude: 13.783, longitude: 109.2196 },
  { name: 'Buôn Ma Thuột', latitude: 12.6667, longitude: 108.05 },
  { name: 'Pleiku', latitude: 13.9833, longitude: 108.0 },
  { name: 'Phan Thiết', latitude: 10.928, longitude: 108.102 },
  { name: 'Long Xuyên', latitude: 10.3833, longitude: 105.4333 },
  { name: 'Thái Nguyên', latitude: 21.5671, longitude: 105.8252 },
  { name: 'Nam Định', latitude: 20.4388, longitude: 106.1621 },
  { name: 'Vinh', latitude: 18.6796, longitude: 105.6813 },
  { name: 'Bắc Ninh', latitude: 21.1861, longitude: 106.0763 }
]

const STORAGE_KEY = 'weather_location'

export const useWeather = () => {
  // Khởi tạo với location mặc định để tránh hydration error
  const [location, setLocation] = useState<Location>(VIETNAM_LOCATIONS[0])
  const [weather, setWeather] = useState<WeatherData>({ temp: '--', condition: 'loading' })
  const [isClient, setIsClient] = useState(false)

  // Load location từ localStorage chỉ ở client-side
  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        const foundLocation = VIETNAM_LOCATIONS.find((loc) => loc.name === parsed.name)
        if (foundLocation) {
          setLocation(foundLocation)
        }
      } catch (error) {
        console.error('Error loading saved location:', error)
      }
    }
  }, [])

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,weather_code&timezone=Asia/Bangkok`
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
  }, [location])

  const changeLocation = (newLocation: Location) => {
    setLocation(newLocation)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLocation))
  }

  return { isClient, weather, location, changeLocation, availableLocations: VIETNAM_LOCATIONS }
}
