import { Search, Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FILTER_TAGS_LIMIT } from '@/constants'
import type { Category, MonthlyArchive, PopularTag } from '@/types/blog'
import FilterTag from '@/components/blog-component/FilterTag'
import ShowMoreBtn from '@/components/blog-component/ShowMoreBtn'

interface BlogFiltersProps {
  filters: FilterState
  categories: Category[]
  monthlyArchive: MonthlyArchive[]
  popularTags: PopularTag[]
  onFilterChange: (type: string, value: string) => void
  showAllTags: boolean
  onToggleShowAllTags: () => void
}

export interface FilterState {
  searchTerm: string
  selectedCategory: string
  selectedTag: string
  selectedArchive: string
}

export default function BlogFilters({
  filters,
  categories,
  monthlyArchive,
  popularTags,
  onFilterChange,
  showAllTags,
  onToggleShowAllTags
}: BlogFiltersProps) {
  return (
    <div className='space-y-6'>
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
              value={filters.searchTerm}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className='pl-10'
              aria-label='Tìm kiếm bài viết'
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
              onClick={() => onFilterChange('category', category.slug ?? 'all')}
              className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-colors ${
                filters.selectedCategory === category.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
              aria-label={`Lọc theo danh mục ${category.name}`}
              aria-pressed={filters.selectedCategory === category.slug}
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
              onClick={() => onFilterChange('archive', archive.slug)}
              className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-colors ${
                filters.selectedArchive === archive.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`}
              aria-label={`Lọc theo tháng ${archive.month}`}
              aria-pressed={filters.selectedArchive === archive.slug}
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
                selectedTag={filters.selectedTag}
                setSelectedTag={(value) => onFilterChange('tag', value)}
              />
            ))}
          </div>

          {popularTags.length > FILTER_TAGS_LIMIT && (
            <ShowMoreBtn
              isExpanded={showAllTags}
              onToggle={onToggleShowAllTags}
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
}
