import apiInstance from '@/lib/axios'
import { OilPricesResponse } from '@/types/oil'

const getOilPrice = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_VIEW_OIL_API}`

    const { data } = await apiInstance.get<OilPricesResponse>(url)
    return data?.data
  } catch (error) {
    console.error('Error fetching oil prices:', error)
    throw new Error('Failed to fetch oil prices')
  }
}

const oilApi = {
  getOilPrice
}

export default oilApi
