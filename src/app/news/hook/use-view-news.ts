import newsApi from '@/service/news'
import { useQuery } from '@tanstack/react-query'

interface UseViewNewsOptions {
  category?: string
  source?: string
  limit?: number
}

export default function useViewNews(options: UseViewNewsOptions = {}) {
  const { category, source, limit = 30 } = options

  return useQuery({
    queryKey: ['view-news', category, source, limit],
    queryFn: async () => newsApi.getNews({ category, source, limit }),
    staleTime: 5 * 60 * 1000, // Cache 5 phút
    refetchInterval: 10 * 60 * 1000 // Refetch mỗi 10 phút
  })
}
