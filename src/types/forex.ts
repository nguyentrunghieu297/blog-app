// Giá mua / bán
export type PriceInfo = {
  price: number
  change: number
}

// Thông tin từng loại tiền tệ
export type CurrencyItem = {
  code: string
  name: string
  buy: PriceInfo
  sell: PriceInfo
}

// Danh sách tỷ giá
export type CurrencyItems = {
  unit: string
  updatedAt: string // ISO date string
  items: CurrencyItem[]
}

// Data chính
export type ExchangeRateData = {
  updatedAt: string // ISO date string
  unit: string
  items: CurrencyItems
}

// Response tổng
export type ExchangeRateResponse = {
  success: boolean
  cached: boolean
  data: ExchangeRateData
}
