import React from 'react'
import Image from 'next/image'
import { NewsArticle as NewsArticleType } from '@/types/news'
import { getRelativeTime } from '@/utils/time-helpers'
import { Clock, ImageOff } from 'lucide-react'

interface NewsArticleProps {
  article: NewsArticleType
}

export const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  const relativeTime = getRelativeTime(article.pubDate)

  return (
    <a
      href={article.link}
      target='_blank'
      rel='noopener noreferrer'
      className='block pb-4 border-b border-gray-50 last:border-b-0 hover:border-gray-200 p-3 md:p-4 -mx-3 md:-mx-4 transition-all duration-300 ease-in-out cursor-pointer'
    >
      <article className='flex gap-3 md:gap-4'>
        {/* Article Image - Responsive sizes */}
        {article.featuredImage ? (
          <div className='flex-shrink-0 w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 relative overflow-hidden rounded-md'>
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className='object-cover transition-transform duration-300 ease-in-out hover:scale-105'
              sizes='(max-width: 640px) 96px, (max-width: 768px) 128px, 144px'
            />
          </div>
        ) : (
          <div className='flex-shrink-0 w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center text-gray-400'>
            <div className='flex flex-col items-center gap-1'>
              <ImageOff className='w-5 h-5' />
              <span className='text-[10px] sm:text-xs'>Ảnh lỗi</span>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className='flex-1 min-w-0'>
          <h2 className='text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2 leading-tight hover:text-green-800 transition-colors duration-200 line-clamp-2'>
            {article.title}
          </h2>

          {/* Description - Hidden on mobile */}
          <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-2 line-clamp-2 hidden sm:block'>
            {article.description}
          </p>

          {/* Footer with time and source */}
          <div className='flex items-center justify-between text-xs text-gray-500 mt-2'>
            <span className='flex items-center gap-1'>
              <Clock className='w-3 h-3' />
              {relativeTime}
            </span>
            <span className='hidden sm:inline'>Nguồn: {article.sourceName}</span>
          </div>
        </div>
      </article>
    </a>
  )
}
