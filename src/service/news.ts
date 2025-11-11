import apiInstance from '@/lib/axios'
import { ApiResponse } from '@/types/blog'
import { NewsArticle } from '@/types/news'

const getNews = async () => {
  try {
    const { data } = await apiInstance.get<ApiResponse<NewsArticle[]>>(`${process.env.NEXT_PUBLIC_VIEW_NEWS_API}`)
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
