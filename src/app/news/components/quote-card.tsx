'use client'

import React, { useEffect, useState } from 'react'
import { RefreshCcw } from 'lucide-react'
import { quotes } from '@/mock/quotes'

export const QuoteCard: React.FC = () => {
  const [quote, setQuote] = useState(quotes[0])

  const randomizeQuote = () => {
    let newQuote = quote
    while (newQuote.text === quote.text) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)]
    }
    setQuote(newQuote)
  }

  useEffect(() => {
    randomizeQuote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='border-b border-gray-200 pb-6'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-semibold text-base'>Trích dẫn hôm nay</h3>

        <button
          onClick={randomizeQuote}
          className='text-gray-400 hover:text-gray-600 transition-transform active:rotate-180'
          aria-label='Đổi câu trích dẫn'
        >
          <RefreshCcw className='w-4 h-4' />
        </button>
      </div>

      <blockquote className='text-sm text-gray-700 italic mb-2 leading-relaxed transition-opacity duration-300'>
        {quote.text}
      </blockquote>

      <p className='text-xs text-gray-500 text-right'>- {quote.author} -</p>
    </div>
  )
}
