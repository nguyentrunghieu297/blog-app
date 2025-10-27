import { FilterState } from '@/components/blog-component/BlogFilter'
import { BlogPost } from '@/types/blog'
import { useMemo } from 'react'

type FilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_TAG'; payload: string }
  | { type: 'SET_ARCHIVE'; payload: string }
  | { type: 'RESET_FILTERS' }

// Filter Reducer
export const initialFilterState: FilterState = {
  searchTerm: '',
  selectedCategory: 'all',
  selectedTag: '',
  selectedArchive: 'all'
}

export function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload }
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload }
    case 'SET_TAG':
      return { ...state, selectedTag: action.payload }
    case 'SET_ARCHIVE':
      return { ...state, selectedArchive: action.payload }
    case 'RESET_FILTERS':
      return initialFilterState
    default:
      return state
  }
}

export function useFilteredPosts(posts: BlogPost[], filters: FilterState) {
  return useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      const matchesSearch =
        post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filters.searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = filters.selectedCategory === 'all' || post.category.slug === filters.selectedCategory

      // Tag filter
      const matchesTag =
        !filters.selectedTag || post.tags.some((tag) => tag.toLowerCase().includes(filters.selectedTag.toLowerCase()))

      // Archive filter - Fixed: handle 'all' case properly
      const matchesArchive =
        filters.selectedArchive === 'all' ||
        (() => {
          const [year, month] = filters.selectedArchive.split('-')
          const targetYear = Number.parseInt(year, 10)
          const targetMonth = Number.parseInt(month, 10)
          const postDate = new Date(post.publishedAt)
          return postDate.getFullYear() === targetYear && postDate.getMonth() + 1 === targetMonth
        })()

      return matchesSearch && matchesCategory && matchesTag && matchesArchive
    })
  }, [posts, filters])
}
