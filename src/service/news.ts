import apiInstance from '@/lib/axios'
import { ApiResponse } from '@/types/blog'
import { NewsArticle } from '@/types/news'

interface GetNewsParams {
  category?: string
  source?: string
  limit?: number
}

const getNews = async (params: GetNewsParams = {}) => {
  try {
    const { category, source, limit = 30 } = params

    // Tạo query string
    const queryParams = new URLSearchParams()

    if (category && category !== 'tong-quan') {
      queryParams.append('category', category)
    }

    if (source) {
      queryParams.append('source', source)
    }

    queryParams.append('limit', limit.toString())

    // Tạo URL với query params
    const url = `${process.env.NEXT_PUBLIC_VIEW_NEWS_API}?${queryParams.toString()}`

    const { data } = await apiInstance.get<ApiResponse<NewsArticle[]>>(url)
    return data?.data
  } catch (error) {
    console.error('Error fetching news articles:', error)
    throw new Error('Failed to fetch news articles')
  }
}

const newsApi = {
  getNews
}

export default newsApi
