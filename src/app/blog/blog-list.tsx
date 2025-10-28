'use client'

import { useState, useReducer } from 'react'
import { Search, Filter, ChevronLeft, ChevronRight, X, Grid3x3, List } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { filterReducer, initialFilterState, useFilteredPosts } from '@/hook/useFilteredPosts'
import { usePagination } from '@/hook/usePagination'
import { POSTS_PER_PAGE } from '@/constants'
import type { BlogPost, Category, MonthlyArchive, PopularTag } from '@/types/blog'
import BlogCard from '@/components/blog-component/BlogCard'
import BlogFilters from '@/components/blog-component/BlogFilter'
import BlogItem from '@/components/blog-component/BlogItem'

interface BlogListProps {
  posts: BlogPost[]
  categories: Category[]
  monthlyArchive: MonthlyArchive[]
  popularTags: PopularTag[]
}

export default function BlogList({ posts, categories, monthlyArchive, popularTags }: BlogListProps) {
  const [filters, dispatch] = useReducer(filterReducer, initialFilterState)
  const [showAllTags, setShowAllTags] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState('list') // 'grid' or 'list'

  // Get filtered posts
  const filteredPosts = useFilteredPosts(posts, filters)

  // Get pagination data
  const pagination = usePagination(filteredPosts, POSTS_PER_PAGE)

  // Handle filter changes and reset to page 1
  const handleFilterChange = (filterType: string, value: string) => {
    pagination.resetPage()
    switch (filterType) {
      case 'search':
        dispatch({ type: 'SET_SEARCH', payload: value })
        break
      case 'category':
        dispatch({ type: 'SET_CATEGORY', payload: value })
        break
      case 'tag':
        dispatch({ type: 'SET_TAG', payload: value })
        break
      case 'archive':
        dispatch({ type: 'SET_ARCHIVE', payload: value })
        break
    }
  }

  // Reset all filters
  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' })
    pagination.resetPage()
  }

  // Calculate active filter count
  const activeFilterCount = [
    filters.searchTerm,
    filters.selectedCategory !== 'all',
    filters.selectedTag,
    filters.selectedArchive !== 'all'
  ].filter(Boolean).length

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto p-4'>
        {/* Page Header */}
        <div className='mb-8'>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Biết chút cho vui</h1>
          <p className='text-lg text-muted-foreground'>
            Khám phá các bài viết về công nghệ, lịch sử, văn hóa và nhiều chủ đề thú vị khác
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Main Content - Blog Posts */}
          <main className='lg:col-span-3'>
            {/* Mobile Filter Sheet */}
            <div className='lg:hidden mb-6'>
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant='outline' className='w-full relative' aria-label='Mở bộ lọc'>
                    <Filter className='h-4 w-4 mr-2' />
                    Bộ lọc
                    {activeFilterCount > 0 && (
                      <Badge className='ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs'>
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side='left'
                  className='w-[300px] sm:w-[400px] overflow-y-auto'
                  aria-describedby='filter-description'
                >
                  <SheetHeader>
                    <SheetTitle>Bộ lọc</SheetTitle>
                  </SheetHeader>
                  <p id='filter-description' className='sr-only'>
                    Bộ lọc để tìm kiếm và lọc bài viết theo danh mục, tháng và tags
                  </p>
                  <div className='mt-6'>
                    <BlogFilters
                      filters={filters}
                      categories={categories}
                      monthlyArchive={monthlyArchive}
                      popularTags={popularTags}
                      onFilterChange={handleFilterChange}
                      showAllTags={showAllTags}
                      onToggleShowAllTags={() => setShowAllTags(!showAllTags)}
                    />
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
            <div className='pb-6 h-12 flex items-center justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>
                  Hiển thị {pagination.startIndex + 1}-{Math.min(pagination.endIndex, filteredPosts.length)} của{' '}
                  {filteredPosts.length} bài viết
                  {filters.searchTerm && ` cho "${filters.searchTerm}"`}
                  {filters.selectedCategory !== 'all' &&
                    ` trong danh mục "${categories.find((c) => c.slug === filters.selectedCategory)?.name}"`}
                  {filters.selectedTag && ` với tag "${filters.selectedTag}"`}
                </p>
              </div>

              <div className='flex gap-3 mt-0 md:mt-3'>
                {activeFilterCount > 0 && (
                  <Button variant='outline' size='sm' onClick={resetFilters} className='hidden lg:flex'>
                    Xóa bộ lọc
                  </Button>
                )}

                {/* View Toggle Buttons */}
                <div className='flex items-center border rounded-md'>
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size='sm'
                    onClick={() => setViewMode('grid')}
                    className='rounded-r-none'
                  >
                    <Grid3x3 className='h-4 w-4' />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size='sm'
                    onClick={() => setViewMode('list')}
                    className='rounded-l-none'
                  >
                    <List className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div>
              {pagination.currentItems.length > 0 ? (
                <div>
                  {viewMode === 'grid' ? (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                      {pagination.currentItems.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <div className='flex flex-col divide-y'>
                      {pagination.currentItems.map((post) => (
                        <BlogItem key={post.id} post={post} />
                      ))}
                    </div>
                  )}
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
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && pagination.currentItems.length > 0 && (
              <nav className='mt-12 flex justify-center' aria-label='Phân trang'>
                <div className='flex items-center space-x-1'>
                  {/* Previous Button */}
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => pagination.setCurrentPage(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className='flex items-center gap-1'
                    aria-label='Trang trước'
                  >
                    <ChevronLeft className='h-4 w-4' />
                    Trước
                  </Button>

                  {/* Page Numbers */}
                  {pagination.getPageNumbers().map((page, index) => (
                    <div key={index}>
                      {page === '...' ? (
                        <span className='px-3 py-2 text-sm text-muted-foreground' aria-hidden='true'>
                          ...
                        </span>
                      ) : (
                        <Button
                          variant={pagination.currentPage === page ? 'default' : 'outline'}
                          size='sm'
                          onClick={() => pagination.setCurrentPage(page as number)}
                          className='min-w-[40px]'
                          aria-label={`Trang ${page}`}
                          aria-current={pagination.currentPage === page ? 'page' : undefined}
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
                    onClick={() => pagination.setCurrentPage(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className='flex items-center gap-1'
                    aria-label='Trang sau'
                  >
                    Sau
                    <ChevronRight className='h-4 w-4' />
                  </Button>
                </div>
              </nav>
            )}
          </main>

          {/* Desktop Sidebar */}
          <aside className='hidden lg:block lg:col-span-1 space-y-6 h-full lg:sticky lg:top-16'>
            <BlogFilters
              filters={filters}
              categories={categories}
              monthlyArchive={monthlyArchive}
              popularTags={popularTags}
              onFilterChange={handleFilterChange}
              showAllTags={showAllTags}
              onToggleShowAllTags={() => setShowAllTags(!showAllTags)}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
