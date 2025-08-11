'use client'

import BlogList from './blog-list'
import useViewArchives from './hook/useViewArchives'
import useViewBlogList from './hook/useViewBlogList'
import useViewCategories from './hook/useViewCategories'
import useViewTags from './hook/useViewTags'

// const monthlyArchive = [
//   { month: 'January 2024', count: 4, slug: '2024-01' },
//   { month: 'December 2023', count: 2, slug: '2023-12' },
//   { month: 'November 2023', count: 3, slug: '2023-11' },
//   { month: 'October 2023', count: 5, slug: '2023-10' },
//   { month: 'September 2023', count: 2, slug: '2023-09' },
//   { month: 'August 2023', count: 4, slug: '2023-08' },
//   { month: 'July 2023', count: 3, slug: '2023-07' },
//   { month: 'June 2023', count: 2, slug: '2023-06' },
//   { month: 'May 2023', count: 5, slug: '2023-05' },
//   { month: 'April 2023', count: 3, slug: '2023-04' },
//   { month: 'March 2023', count: 4, slug: '2023-03' },
//   { month: 'February 2023', count: 2, slug: '2023-02' }
// ]

// const categories = [
//   { name: 'Tất cả', slug: 'all', count: 6 },
//   { name: 'Lịch sử', slug: 'lich-su', count: 1 },
//   { name: 'Lập trình', slug: 'lap-trinh', count: 1 },
//   { name: 'Frontend', slug: 'frontend', count: 1 },
//   { name: 'Backend', slug: 'backend', count: 1 },
//   { name: 'DevOps', slug: 'devops', count: 1 },
//   { name: 'Văn hóa', slug: 'van-hoa', count: 1 }
// ]

// const popularTags = [
//   { name: 'React', count: 8 },
//   { name: 'JavaScript', count: 12 },
//   { name: 'Next.js', count: 6 },
//   { name: 'CSS', count: 10 },
//   { name: 'Node.js', count: 7 },
//   { name: 'Lịch sử Việt Nam', count: 5 },
//   { name: 'Hà Nội', count: 4 },
//   { name: 'API', count: 6 }
// ]

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
