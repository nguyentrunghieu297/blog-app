import { Tag } from 'lucide-react'
import React from 'react'

interface FilterTagProps {
  tag: { name: string; count: number }
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export default function FilterTag({ tag, selectedTag, setSelectedTag }: FilterTagProps) {
  return (
    <button
      key={tag.name}
      onClick={() => setSelectedTag(selectedTag === tag.name ? '' : tag.name)}
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full transition-colors ${
        selectedTag === tag.name ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
      }`}
    >
      <Tag className='h-3 w-3' />
      {tag.name}
      <span className='ml-1 text-xs opacity-70'>({tag.count})</span>
    </button>
  )
}
