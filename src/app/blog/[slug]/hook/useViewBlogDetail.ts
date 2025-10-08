import blogApi from '@/service/blog'
import { useQuery } from '@tanstack/react-query'

export default function useViewBlogDetail(slug: string) {
  return useQuery({
    queryKey: ['viewBlogDetail', slug],
    queryFn: () => blogApi.getBlogDetail(slug)
  })
}
