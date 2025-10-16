'use client'

import BlogCard from '@/components/blog-component/BlogCard'
import { useState } from 'react'
import { Search, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { BlogPost, Category, MonthlyArchive, PopularTag } from '@/types/blog'
import { FILTER_TAGS_LIMIT } from '@/constants'
import FilterTag from '@/components/blog-component/FilterTag'
import ShowMoreBtn from '@/components/blog-component/ShowMoreBtn'

interface BlogListProps {
  posts: BlogPost[]
  categories: Category[]
  monthlyArchive: MonthlyArchive[]
  popularTags: PopularTag[]
}

const POSTS_PER_PAGE = 9

export default function BlogList({ posts, categories, monthlyArchive, popularTags }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedArchive, setSelectedArchive] = useState('all')
  const [showAllTags, setShowAllTags] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter posts based on search term, category, and tag
  const filteredPosts = posts.filter((post) => {
    const [year, month] = selectedArchive.split('-')
    const targetYear = Number.parseInt(year)
    const targetMonth = Number.parseInt(month)
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

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTag('')
    setSelectedArchive('all')
    setCurrentPage(1)
  }

  // Handle filter changes and reset to page 1
  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1)
    switch (filterType) {
      case 'search':
        setSearchTerm(value)
        break
      case 'category':
        setSelectedCategory(value)
        break
      case 'tag':
        setSelectedTag(value)
        break
      case 'archive':
        setSelectedArchive(value)
        break
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  const FilterContent = () => (
    <div className='space-y-6 p-3'>
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
              onChange={(e) => handleFilterChange('search', e.target.value)}
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
              onClick={() => handleFilterChange('category', category.slug ?? 'all')}
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
              onClick={() => handleFilterChange('archive', archive.slug)}
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
            {(showAllTags ? popularTags : popularTags.slice(0, FILTER_TAGS_LIMIT)).map((tag) => (
              <FilterTag
                key={tag.name}
                tag={tag}
                selectedTag={selectedTag}
                setSelectedTag={(value) => handleFilterChange('tag', value)}
              />
            ))}
          </div>

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
    </div>
  )

  const activeFilterCount =
    (searchTerm ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedTag ? 1 : 0) +
    (selectedArchive !== 'all' ? 1 : 0)

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
          <aside className='hidden lg:block lg:col-span-1 space-y-6 h-full lg:sticky lg:top-16'>
            <FilterContent />
          </aside>

          {/* Main Content - Blog Posts */}
          <main className='lg:col-span-3'>
            <div className='lg:hidden mb-6'>
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant='outline' className='w-full relative'>
                    <Filter className='h-4 w-4 mr-2' />
                    Bộ lọc
                    {activeFilterCount > 0 && (
                      <Badge className='ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs'>
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side='left' className='w-[300px] sm:w-[400px] overflow-y-auto'>
                  <SheetHeader>
                    <SheetTitle>Bộ lọc</SheetTitle>
                  </SheetHeader>
                  <div className='mt-6'>
                    <FilterContent />
                  </div>
                  {activeFilterCount > 0 && (
                    <div className='sticky bottom-0 bg-background pt-4 pb-2 border-t mt-6'>
                      <Button
                        variant='outline'
                        className='w-full'
                        onClick={() => {
                          resetFilters()
                          setIsFilterOpen(false)
                        }}
                      >
                        <X className='h-4 w-4 mr-2' />
                        Xóa tất cả bộ lọc
                      </Button>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>

            {/* Results Info */}
            <div className='pb-6 flex items-center justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>
                  Hiển thị {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} của {filteredPosts.length} bài
                  viết
                  {searchTerm && ` cho "${searchTerm}"`}
                  {selectedCategory !== 'all' &&
                    ` trong danh mục "${categories.find((c) => c.slug === selectedCategory)?.name}"`}
                  {selectedTag && ` với tag "${selectedTag}"`}
                </p>
              </div>

              {(searchTerm || selectedCategory !== 'all' || selectedTag || selectedArchive !== 'all') && (
                <Button variant='outline' size='sm' onClick={resetFilters} className='hidden lg:flex'>
                  Xóa bộ lọc
                </Button>
              )}
            </div>

            {/* Blog Posts Grid */}
            {currentPosts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {currentPosts.map((post) => (
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
                <Button variant='outline' onClick={resetFilters}>
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && currentPosts.length > 0 && (
              <div className='mt-12 flex justify-center'>
                <div className='flex items-center space-x-1'>
                  {/* Previous Button */}
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='flex items-center gap-1'
                  >
                    <ChevronLeft className='h-4 w-4' />
                    Trước
                  </Button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((page, index) => (
                    <div key={index}>
                      {page === '...' ? (
                        <span className='px-3 py-2 text-sm text-muted-foreground'>...</span>
                      ) : (
                        <Button
                          variant={currentPage === page ? 'default' : 'outline'}
                          size='sm'
                          onClick={() => setCurrentPage(page as number)}
                          className='min-w-[40px]'
                        >
                          {page}
                        </Button>
                      )}
                    </div>
                  ))}

                  {/* Next Button */}
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='flex items-center gap-1'
                  >
                    Sau
                    <ChevronRight className='h-4 w-4' />
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
