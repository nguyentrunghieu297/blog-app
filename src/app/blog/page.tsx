'use client'

import Loading from '@/components/Loading'
import BlogList from './blog-list'
import useViewArchives from './hook/useViewArchives'
import useViewBlogList from './hook/useViewBlogList'
import useViewCategories from './hook/useViewCategories'
import useViewTags from './hook/useViewTags'

export default function BlogPage() {
  const { data: blogPosts, isLoading: isLoadingPosts } = useViewBlogList()
  const { data: popularTags, isLoading: isLoadingTags } = useViewTags()
  const { data: categories, isLoading: isLoadingCategories } = useViewCategories()
  const { data: monthlyArchive, isLoading: isLoadingArchives } = useViewArchives()

  const isLoading = isLoadingPosts || isLoadingTags || isLoadingCategories || isLoadingArchives

  if (isLoading) {
    return <Loading />
  }

  return (
    <BlogList
      posts={blogPosts || []}
      categories={categories || []}
      monthlyArchive={monthlyArchive || []}
      popularTags={popularTags || []}
    />
  )
}
