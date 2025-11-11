export interface MarketItem {
  name: string
  value: string
  change: string
  isNegative: boolean
}

export interface SectorItem {
  name: string
  value: string
  change: string
  isNegative: boolean
}

export interface LunarDate {
  day: number
  month: number
  year: number
  isLeap: boolean
}

export interface WeatherData {
  temp: string
  condition: 'sunny' | 'cloudy' | 'rainy' | 'drizzle' | 'loading'
}

export interface NewsArticle {
  title: string
  description: string
  link: string
  pubDate: string
  sourceIcon: string
  sourceName: string
  category: string
  featuredImage: string
}

export interface DateInfo {
  dayName: string
  day: number
  month: number
  year: number
}
