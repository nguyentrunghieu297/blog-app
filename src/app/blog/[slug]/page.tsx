'use client'

import { relatedPosts } from '@/mock/related-posts'
import { blogPostMd } from '@/mock/blog-detail-md'
import { useParams } from 'next/navigation'
import BlogPost from './blog-post'
import useViewBlogDetail from './hook/useViewBlogDetail'
import Loading from '@/components/Loading'

export default function BlogPostPage() {
  const params = useParams()
  const { data: blogPostData, isLoading } = useViewBlogDetail(params.slug as string)

  if (isLoading) {
    return <Loading />
  } else {
    console.log('Blog Post Data: ', blogPostData)
  }

  return <BlogPost post={blogPostMd} relatedPosts={relatedPosts} />
}
