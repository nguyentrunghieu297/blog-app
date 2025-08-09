import apiInstance from '@/lib/axios'
import { ApiResponse, BlogPost } from '@/types/blog'

const getBlogList = async (): Promise<BlogPost[]> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<BlogPost[]>>('/blogs')
    return data?.data
  } catch (error) {
    console.error('Error fetching blog list:', error)
    throw new Error('Failed to fetch blog list')
  }
}

const getBlogDetail = async (slug: string): Promise<BlogPost> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<BlogPost>>(`/blogs/${slug}`)
    return data?.data
  } catch (error) {
    console.error('Error fetching blog detail:', error)
    throw new Error('Failed to fetch blog detail')
  }
}

const blogApi = {
  getBlogList,
  getBlogDetail
}

export default blogApi
