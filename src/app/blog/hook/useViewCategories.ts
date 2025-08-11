import blogApi from '@/service/blog'
import { useQuery } from '@tanstack/react-query'

export default function useViewCategories() {
  return useQuery({
    queryKey: ['viewCategories'],
    queryFn: () => blogApi.getCategories()
  })
}
