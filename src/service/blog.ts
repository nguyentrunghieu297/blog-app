import apiInstance from '@/lib/axios'
import { ApiResponse, BlogPost, Category, PopularTag } from '@/types/blog'

const getBlogList = async (): Promise<BlogPost[]> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<BlogPost[]>>(`${process.env.NEXT_PUBLIC_VIEW_BLOG_API}`)
    return data?.data
  } catch (error) {
    console.error('Error fetching blog list:', error)
    throw new Error('Failed to fetch blog list')
  }
}

const getBlogDetail = async (slug: string): Promise<BlogPost> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<BlogPost>>(
      `${process.env.NEXT_PUBLIC_VIEW_BLOG_DETAIL_API}/${slug}`
    )
    return data?.data
  } catch (error) {
    console.error('Error fetching blog detail:', error)
    throw new Error('Failed to fetch blog detail')
  }
}

const getCategories = async (): Promise<Category[]> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<Category[]>>(`${process.env.NEXT_PUBLIC_VIEW_BLOG_CATEGORY_API}`)
    return data?.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }
}

const getTags = async (): Promise<PopularTag[]> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<PopularTag[]>>(`${process.env.NEXT_PUBLIC_VIEW_BLOG_TAG_API}`)
    return data?.data
  } catch (error) {
    console.error('Error fetching tags:', error)
    throw new Error('Failed to fetch tags')
  }
}

const getArchives = async (): Promise<{ month: string; count: number; slug: string }[]> => {
  try {
    const { data } = await apiInstance.get<ApiResponse<{ month: string; count: number; slug: string }[]>>(
      `${process.env.NEXT_PUBLIC_VIEW_BLOG_ARCHIVE_API}`
    )
    return data?.data
  } catch (error) {
    console.error('Error fetching archives:', error)
    throw new Error('Failed to fetch archives')
  }
}

const blogApi = {
  getBlogList,
  getBlogDetail,
  getCategories,
  getTags,
  getArchives
}

export default blogApi
