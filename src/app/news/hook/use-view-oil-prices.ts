import oilApi from '@/service/oil'
import { useQuery } from '@tanstack/react-query'

export default function useViewOilPrices() {
  return useQuery({
    queryKey: ['view-oil-prices'],
    queryFn: async () => oilApi.getOilPrice()
  })
}
