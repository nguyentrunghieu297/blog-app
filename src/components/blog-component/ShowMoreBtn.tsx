import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

interface ShowMoreBtnProps {
  isExpanded: boolean
  onToggle: () => void
  expandedText?: string
  collapsedText?: string
  className?: string
  showChevron?: boolean
}

export default function ShowMoreBtn({
  isExpanded,
  onToggle,
  expandedText = 'Thu gọn',
  collapsedText = 'Xem thêm',
  className = '',
  showChevron = true
}: ShowMoreBtnProps) {
  return (
    <div className={`mt-3 text-right ${className}`}>
      <button
        onClick={onToggle}
        className='inline-flex items-center gap-1 px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50'
      >
        {isExpanded ? (
          <>
            {expandedText}
            {showChevron && <ChevronUp className='h-4 w-4' />}
          </>
        ) : (
          <>
            {collapsedText}
            {showChevron && <ChevronDown className='h-4 w-4' />}
          </>
        )}
      </button>
    </div>
  )
}
