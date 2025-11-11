import newsApi from '@/service/news'
import { useQuery } from '@tanstack/react-query'

export default function useViewNews() {
  return useQuery({
    queryKey: ['view-news'],
    queryFn: async () => newsApi.getNews()
  })
}
