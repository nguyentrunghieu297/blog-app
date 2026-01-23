import goldApi from '@/service/gold'
import { useQuery } from '@tanstack/react-query'

export default function useViewGoldPrices() {
  return useQuery({
    queryKey: ['view-gold-prices'],
    queryFn: async () => goldApi.getGoldPrice()
  })
}
