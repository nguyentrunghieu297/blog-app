import { BlogPost } from '@/types/blog'

const getListBlog = async (): Promise<BlogPost[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    next: { revalidate: 60 }
  })
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts')
  }
  const data = await response.json()
  return data as BlogPost[]
}

const blogApi = {
  getListBlog
}

export default blogApi
