import React from 'react'
import { X } from 'lucide-react'

export const QuoteCard: React.FC = () => (
  <div className='border-b border-gray-200 pb-6'>
    <div className='flex items-center justify-between mb-4'>
      <h3 className='font-semibold text-base'>Trích dẫn hôm nay</h3>
      <button className='text-gray-400 hover:text-gray-600'>
        <X className='w-4 h-4' />
      </button>
    </div>
    <blockquote className='text-sm text-gray-700 italic mb-2 leading-relaxed'>
      Cuộc hành trình ngàn dặm bắt đầu từ một bước chân.
    </blockquote>
    <p className='text-xs text-gray-500 text-right'>- Lão Tử -</p>
  </div>
)
