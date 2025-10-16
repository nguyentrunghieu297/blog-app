import { AlertCircle } from 'lucide-react'
import React from 'react'

export default function ErrorMessageComponent({ message }: { message?: string }) {
  if (!message) return null
  return (
    <div className='flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-xs'>
      <AlertCircle className='w-3 h-3' />
      <span>{message}</span>
    </div>
  )
}
