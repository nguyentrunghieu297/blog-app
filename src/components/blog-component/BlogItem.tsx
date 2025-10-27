import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { NUMBER_OF_TAGS } from '@/constants'

interface BlogListItemProps {
  post: BlogPost
}

export default function BlogItem({ post }: BlogListItemProps) {
  return (
    <article className='flex flex-col md:flex-row gap-6 border-b pb-6 mb-6 hover:bg-muted/30 transition'>
      {/* Image */}
      <div className='relative w-full md:w-1/3 aspect-video overflow-hidden rounded-lg'>
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.featuredImage || '/placeholder.svg'}
            alt={post.title}
            fill
            className='object-cover hover:scale-105 transition-transform duration-300'
          />
        </Link>
      </div>

      {/* Content */}
      <div className='flex flex-col justify-between w-full md:w-2/3'>
        <div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className='text-xl font-semibold mb-2 hover:text-primary transition-colors'>{post.title}</h2>
          </Link>
          <p className='text-sm text-muted-foreground line-clamp-3 mb-3'>{post.excerpt}</p>

          <div className='flex flex-wrap gap-1 mb-3'>
            {post.tags.slice(0, NUMBER_OF_TAGS).map((tag) => (
              <Badge key={tag} variant='outline' className='text-xs'>
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-4 text-xs text-muted-foreground'>
          <span className='flex items-center gap-1'>
            <Calendar className='h-3 w-3' />
            {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
          </span>
          <span className='flex items-center gap-1'>
            <Clock className='h-3 w-3' />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  )
}
