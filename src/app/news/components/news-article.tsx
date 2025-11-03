import { NewsArticle as NewsArticleType } from '@/types/news'
import React from 'react'

interface NewsArticleProps {
  article: NewsArticleType
}

export const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => (
  <article className='pb-8 border-b border-gray-200 last:border-b-0'>
    <h2 className='text-2xl font-bold text-gray-900 mb-2 leading-tight'>{article.title}</h2>
    <p className='text-gray-700 text-base leading-relaxed mb-3'>{article.content}</p>
    <span className='text-xs text-gray-500 flex justify-end'>Nguồn: {article.source}</span>
  </article>
)
