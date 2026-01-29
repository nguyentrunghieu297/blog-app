import { Skeleton } from '@/components/ui/skeleton'

export default function NewsArticleSkeleton() {
  return (
    <div className='space-y-4 py-6 border-b border-gray-200'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
        {/* Image skeleton */}
        <Skeleton className='w-full sm:w-48 h-48 sm:h-32 rounded-lg sm:flex-shrink-0' />

        <div className='flex-1 space-y-3'>
          {/* Title skeleton */}
          <Skeleton className='h-6 sm:h-7 w-full' />
          <Skeleton className='h-6 sm:h-7 w-4/5' />

          {/* Description skeleton */}
          <div className='space-y-2 pt-2'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-3/4' />
          </div>

          {/* Meta info skeleton */}
          <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 pt-2'>
            <Skeleton className='h-3 w-24' />
            <Skeleton className='h-3 w-32' />
          </div>
        </div>
      </div>
    </div>
  )
}
