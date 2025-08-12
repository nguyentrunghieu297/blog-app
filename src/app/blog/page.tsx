'use client'

import BlogList from './blog-list'
import useViewArchives from './hook/useViewArchives'
import useViewBlogList from './hook/useViewBlogList'
import useViewCategories from './hook/useViewCategories'
import useViewTags from './hook/useViewTags'

export default function BlogPage() {
  const { data: blogPosts } = useViewBlogList()
  const { data: popularTags } = useViewTags()
  const { data: categories } = useViewCategories()
  const { data: monthlyArchive } = useViewArchives()

  return (
    <BlogList
      posts={blogPosts || []}
      categories={categories || []}
      monthlyArchive={monthlyArchive || []}
      popularTags={popularTags || []}
    />
  )
}
