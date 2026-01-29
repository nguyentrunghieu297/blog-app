import forexApi from '@/service/forex'
import { useQuery } from '@tanstack/react-query'

export default function useViewForex() {
  return useQuery({
    queryKey: ['view-forex-prices'],
    queryFn: async () => forexApi.getForexPrice()
  })
}
