import React from 'react'

export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background pb-36'>
      <div className='text-center'>
        {/* Modern spinner with multiple dots */}
        <div className='relative w-20 h-20 mx-auto mb-6'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-16 h-16 border-4 border-muted rounded-full border-t-primary animate-spin' />
          </div>
          <div className='absolute inset-0 flex items-center justify-center animate-pulse'>
            <div className='w-12 h-12 bg-primary/10 rounded-full' />
          </div>
        </div>

        {/* Loading text with fade animation */}
        <div className='space-y-2'>
          <p className='text-lg font-medium text-foreground animate-pulse'>Đang tải...</p>
          <p className='text-sm text-muted-foreground'>Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    </div>
  )
}
