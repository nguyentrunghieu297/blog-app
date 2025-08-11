import blogApi from '@/service/blog'
import { useQuery } from '@tanstack/react-query'

export default function useViewTags() {
  return useQuery({
    queryKey: ['viewTags'],
    queryFn: () => blogApi.getTags()
  })
}
