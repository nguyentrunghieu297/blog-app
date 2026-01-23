export interface GoldPriceItem {
  brand: string
  buy: {
    price: number
    change: number
  }
  sell: {
    price: number
    change: number
  }
}

export interface GoldPricesData {
  updatedAt: string
  unit: string
  items: GoldPriceItem[]
}

export interface GoldPricesResponse {
  success: boolean
  cached: boolean
  data: GoldPricesData
}

export type GoldPrices = GoldPricesData
