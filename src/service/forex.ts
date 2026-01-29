import apiInstance from '@/lib/axios'
import { ExchangeRateResponse } from '@/types/forex'

const getForexPrice = async () => {
  try {
    const response = await apiInstance.get<ExchangeRateResponse>(`${process.env.NEXT_PUBLIC_FOREX_API}`)
    return response.data.data
  } catch (error) {
    console.error('Error fetching forex prices:', error)
    throw new Error('Failed to fetch forex prices')
  }
}

const forexApi = {
  getForexPrice
}

export default forexApi
