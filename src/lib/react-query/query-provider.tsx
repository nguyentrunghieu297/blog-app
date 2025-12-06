'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

// ✅ Optimized React Query configuration
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ Cache Strategy
        staleTime: 10 * 60 * 1000, // 10 phút - data vẫn fresh
        gcTime: 30 * 60 * 1000, // 30 phút - giữ cache lâu hơn (formerly cacheTime)

        // ✅ Refetch Strategy
        refetchOnWindowFocus: false, // Tắt để giảm requests
        refetchOnReconnect: true, // Bật khi reconnect
        refetchOnMount: false, // Không refetch nếu có cache

        // ✅ Retry Strategy
        retry: 2, // Chỉ retry 2 lần
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000),

        // ✅ Network Mode
        networkMode: 'online',

        // ✅ Experimental features
        experimental_prefetchInRender: true // Prefetch during render
      },
      mutations: {
        retry: 1,
        networkMode: 'online'
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => getQueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* ✅ Dev tools chỉ trong development */}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
