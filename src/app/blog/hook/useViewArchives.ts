import blogApi from '@/service/blog'
import { useQuery } from '@tanstack/react-query'

export default function useViewArchives() {
  return useQuery({
    queryKey: ['viewArchives'],
    queryFn: () => blogApi.getArchives()
  })
}
