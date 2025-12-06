import newsApi from '@/service/news'
import { useQuery } from '@tanstack/react-query'

interface UseViewNewsOptions {
  category?: string
  source?: string
  limit?: number
}

export default function useViewNews(options: UseViewNewsOptions = {}) {
  const { category, source, limit = 20 } = options // ✅ Giảm default từ 30 → 20

  return useQuery({
    queryKey: ['view-news', category, source, limit],
    queryFn: async () => newsApi.getNews({ category, source, limit }),

    // ✅ Cache Strategy Optimization
    staleTime: 10 * 60 * 1000, // Tăng từ 5 → 10 phút (giảm requests)
    gcTime: 30 * 60 * 1000, // 30 phút - giữ cache lâu hơn

    // ✅ Performance Optimizations
    refetchInterval: false, // Tắt auto refetch - user tự refresh
    refetchOnWindowFocus: false, // Tắt refetch khi focus window
    refetchOnReconnect: true, // Chỉ refetch khi reconnect
    refetchOnMount: false, // Không refetch nếu đã có cache

    // ✅ Network Optimizations
    networkMode: 'online', // Chỉ fetch khi online
    retry: 2, // Giảm retry từ 3 → 2
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000), // Exponential backoff

    // ✅ Stale-While-Revalidate Pattern
    placeholderData: (previousData) => previousData // Keep old data while fetching

    // ✅ Enable suspense nếu cần
    // suspense: false,
  })
}
