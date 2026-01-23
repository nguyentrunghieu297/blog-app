import apiInstance from '@/lib/axios'
import { GoldPricesResponse } from '@/types/gold'

const getGoldPrice = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_VIEW_GOLD_API}`
    const { data } = await apiInstance.get<GoldPricesResponse>(url)
    return data?.data
  } catch (error) {
    console.error('Error fetching gold prices:', error)
    throw new Error('Failed to fetch gold prices')
  }
}

const goldApi = {
  getGoldPrice
}

export default goldApi
