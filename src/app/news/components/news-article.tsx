import React, { useState } from 'react'
import Image from 'next/image'
import { NewsArticle as NewsArticleType } from '@/types/news'
import { getRelativeTime } from '@/utils/time-helpers'
import { Clock, ImageOff } from 'lucide-react'

interface NewsArticleProps {
  article: NewsArticleType
}

export const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  // ✅ Fix: State để handle image error
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const relativeTime = getRelativeTime(article.pubDate)

  // ✅ Fix: Validate image URL trước khi render
  const hasValidImage = article.featuredImage && !imageError && article.featuredImage.startsWith('http')

  return (
    <a
      href={article.link}
      target='_blank'
      rel='noopener noreferrer'
      className='block pb-4 border-b border-gray-50 last:border-b-0 hover:border-gray-200 p-3 md:p-4 -mx-3 md:-mx-4 transition-all duration-300 ease-in-out cursor-pointer'
    >
      <article className='flex gap-3 md:gap-4'>
        {/* Article Image - Responsive sizes */}
        {hasValidImage ? (
          <div className='flex-shrink-0 w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 relative overflow-hidden rounded-md bg-gray-100'>
            {imageLoading && <div className='absolute inset-0 animate-pulse bg-gray-200' />}
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className={`object-cover transition-all duration-300 ease-in-out hover:scale-105 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              sizes='(max-width: 640px) 96px, (max-width: 768px) 128px, 144px'
              // ✅ Fix: Xử lý lỗi ảnh
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
              onLoad={() => setImageLoading(false)}
              // ✅ Fix: Loading priority
              loading='lazy'
              // ✅ Fix: Thêm quality
              quality={75}
            />
          </div>
        ) : (
          <div className='flex-shrink-0 w-24 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center text-gray-400'>
            <div className='flex flex-col items-center gap-1'>
              <ImageOff className='w-5 h-5' />
              <span className='text-[10px] sm:text-xs'>No image</span>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className='flex-1 min-w-0'>
          {/* ✅ Fix: Thêm title attribute để show full title on hover */}
          <h2
            className='text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2 leading-tight hover:text-green-800 transition-colors duration-200 line-clamp-2'
            title={article.title}
          >
            {article.title}
          </h2>

          {/* Description - Hidden on mobile */}
          {article.description && (
            <p
              className='text-sm md:text-base text-gray-700 leading-relaxed mb-2 line-clamp-2 hidden sm:block'
              title={article.description}
            >
              {article.description}
            </p>
          )}

          {/* Footer with time and source */}
          <div className='flex items-center justify-between text-xs text-gray-500 mt-2'>
            <span className='flex items-center gap-1'>
              <Clock className='w-3 h-3' />
              {relativeTime}
            </span>
            {article.sourceName && (
              <span className='hidden sm:inline truncate max-w-[150px]' title={article.sourceName}>
                Nguồn: {article.sourceName}
              </span>
            )}
          </div>
        </div>
      </article>
    </a>
  )
}
