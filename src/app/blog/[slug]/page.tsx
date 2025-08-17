import { blogPostMd } from '@/mock/blog-detail-md'
import BlogPost from './blog-post'
import { relatedPosts } from '@/mock/related-posts'

export default function BlogPostPage() {
  console.log('Rendering BlogPostPage with markdown content: ', blogPostMd)
  return <BlogPost post={blogPostMd} relatedPosts={relatedPosts} />
}
