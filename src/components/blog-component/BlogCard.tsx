import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { BlogPost } from '@/types/blog'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { Calendar, Clock } from 'lucide-react'
import { NUMBER_OF_TAGS } from '@/constants'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className='group hover:shadow-lg transition-all duration-300 overflow-hidden py-0 gap-0'>
      {/* Featured Image */}
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={post?.featuredImage || '/placeholder.svg'}
          alt={post.title}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
        <Badge className='absolute top-3 left-3 text-xs'>{post.category.name}</Badge>
      </div>

      <CardContent className='p-6 space-y-4'>
        {/* Title */}
        <Link href={`/blog/${post.slug}`} className='block'>
          <h2 className='text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>{post.excerpt}</p>

        {/* Tags */}
        <div className='flex flex-wrap gap-1'>
          {post.tags.slice(0, NUMBER_OF_TAGS).map((tag) => (
            <Badge key={tag} variant='outline' className='text-xs'>
              {tag}
            </Badge>
          ))}
          {post.tags.length > NUMBER_OF_TAGS && (
            <Badge variant='outline' className='text-xs'>
              +{post.tags.length - NUMBER_OF_TAGS}
            </Badge>
          )}
        </div>

        <Separator />

        {/* Meta Info */}
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          <div className='flex items-center space-x-1'>
            <Calendar className='h-3 w-3' />
            <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
          </div>
          <div className='flex items-center space-x-1'>
            <Clock className='h-3 w-3' />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
