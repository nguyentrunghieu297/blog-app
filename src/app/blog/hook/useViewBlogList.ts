'use client'

import blogApi from '@/service/blog'
import { useQuery } from '@tanstack/react-query'

export default function useViewBlogList() {
  return useQuery({
    queryKey: ['viewBlogList'],
    queryFn: () => blogApi.getBlogList()
  })
}
