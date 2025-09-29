import BlogPost from './blog-post'
import { relatedPosts } from '@/mock/related-posts'
import { blogPostHtml } from '@/mock/blog-detail-html'
import { blogPostMd } from '@/mock/blog-detail-md'

export default function BlogPostPage() {
  return <BlogPost post={blogPostMd} relatedPosts={relatedPosts} />
  return <BlogPost post={blogPostHtml} relatedPosts={relatedPosts} />
}
