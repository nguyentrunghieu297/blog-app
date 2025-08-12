'use client'

import BlogCard from '@/components/blog-component/BlogCard'
import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BlogPost, Category, MonthlyArchive, PopularTag } from '@/types/blog'
import { FILTER_TAGS_LIMIT } from '@/constants'
import FilterTag from '@/components/blog-component/FilterTag'
import ShowMoreBtn from '@/components/blog-component/ShowMoreBtn'

interface BlogListProps {
  posts: BlogPost[]
  categories: Category[]
  monthlyArchive: MonthlyArchive[]
  popularTags: PopularTag[]
}

export default function BlogList({ posts, categories, monthlyArchive, popularTags }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedArchive, setSelectedArchive] = useState('all')
  const [showAllTags, setShowAllTags] = useState(false)

  // Filter posts based on search term, category, and tag
  const filteredPosts = posts.filter((post) => {
    const [year, month] = selectedArchive.split('-')
    const targetYear = parseInt(year)
    const targetMonth = parseInt(month)
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category.slug === selectedCategory
    const matchesTag = !selectedTag || post.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()))

    const matchesArchive =
      selectedArchive === 'all' ||
      (new Date(post.publishedAt).getFullYear() === targetYear &&
        new Date(post.publishedAt).getMonth() + 1 === targetMonth)

    return matchesSearch && matchesCategory && matchesTag && matchesArchive
  })

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        {/* Page Header */}
        <div className='mb-8'>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Blog</h1>
          <p className='text-lg text-muted-foreground'>
            Khám phá các bài viết về công nghệ, lịch sử, văn hóa và nhiều chủ đề thú vị khác
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Sidebar - Filters */}
          <aside className='lg:col-span-1 space-y-6 h-full lg:sticky lg:top-16'>
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                  <Search className='h-5 w-5' />
                  Tìm kiếm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    placeholder='Tìm kiếm bài viết...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='pl-10'
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                  <Filter className='h-5 w-5' />
                  Danh mục
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-colors ${
                      selectedCategory === category.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant='secondary' className='text-xs'>
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Archive */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold'>Bài viết theo tháng</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                {monthlyArchive.map((archive) => (
                  <button
                    key={archive.slug}
                    onClick={() => setSelectedArchive(archive.slug)}
                    className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-colors ${
                      selectedArchive === archive.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    <span className='group-hover:translate-x-1 transition-transform'>{archive.month}</span>
                    <Badge variant='secondary' className='text-xs'>
                      {archive.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold'>Tags phổ biến</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {/* Hiển thị tags theo điều kiện */}
                  {(showAllTags ? popularTags : popularTags.slice(0, FILTER_TAGS_LIMIT)).map((tag) => (
                    <FilterTag key={tag.name} tag={tag} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                  ))}
                </div>

                {/* Nút hiển thị thêm/thu gọn */}
                {popularTags.length > FILTER_TAGS_LIMIT && (
                  <ShowMoreBtn
                    isExpanded={showAllTags}
                    onToggle={() => setShowAllTags(!showAllTags)}
                    expandedText='Thu gọn'
                    collapsedText='Xem thêm'
                    className='mt-3'
                    showChevron={true}
                  />
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - Blog Posts */}
          <main className='lg:col-span-3'>
            {/* Results Info */}
            <div className='mb-6 flex items-center justify-between'>
              <p className='text-sm text-muted-foreground'>
                Hiển thị {filteredPosts.length} bài viết
                {searchTerm && ` cho "${searchTerm}"`}
                {selectedCategory !== 'all' &&
                  ` trong danh mục "${categories.find((c) => c.slug === selectedCategory)?.name}"`}
                {selectedTag && ` với tag "${selectedTag}"`}
              </p>

              {(searchTerm || selectedCategory !== 'all' || selectedTag) && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedTag('')
                  }}
                >
                  Xóa bộ lọc
                </Button>
              )}
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className='text-center py-12 mt-12'>
                <div className='text-muted-foreground mb-4'>
                  <Search className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <h3 className='text-lg font-semibold mb-2'>Không tìm thấy bài viết</h3>
                  <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc của bạn</p>
                </div>
                <Button
                  variant='outline'
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedTag('')
                  }}
                >
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            )}

            {/* Pagination (Optional) */}
            {filteredPosts.length > 0 && (
              <div className='mt-12 flex justify-center'>
                <div className='flex items-center space-x-2'>
                  <Button variant='ghost' size='sm' disabled>
                    Trước
                  </Button>
                  <Button variant='default' size='sm'>
                    1
                  </Button>
                  <Button variant='outline' size='sm'>
                    2
                  </Button>
                  <Button variant='outline' size='sm'>
                    3
                  </Button>
                  <Button variant='ghost' size='sm'>
                    Sau
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
