import blogApi from '@/service/blog'
import { BlogPost } from '@/types/blog'
import { useMutation } from '@tanstack/react-query'

export default function useCreateBlog() {
  return useMutation({
    mutationFn: async (newBlogData: BlogPost) => blogApi.createBlogPost(newBlogData),
    onSuccess: (data) => {
      console.log('Blog post created successfully:', data)
    },
    onError: (error) => {
      console.error('Error creating blog post:', error)
    }
  })
}
