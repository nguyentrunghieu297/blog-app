export interface OilPricesResponse {
  success: boolean
  cached: boolean
  data: {
    updatedAt: string
    items: Array<{
      product: string
      unit: string
      prices: {
        PVOIL?: {
          price: number
          change: number
        }
        Petrolimex?: {
          price: number
          change: number
        }
      }
    }>
  }
}

export interface OilPrices {
  updatedAt: string
  items: Array<{
    product: string
    unit: string
    prices: {
      PVOIL?: {
        price: number
        change: number
      }
      Petrolimex?: {
        price: number
        change: number
      }
    }
  }>
}

export type FuelItem = {
  product: string
  prices: {
    [source: string]: string // PVOIL, PETROLIMEX, ...
  }
}
