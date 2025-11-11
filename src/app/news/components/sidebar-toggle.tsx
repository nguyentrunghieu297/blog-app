import React from 'react'
import { Menu } from 'lucide-react'

interface SidebarToggleProps {
  onClick: () => void
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='xl:hidden fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50'
      aria-label='Toggle sidebar'
    >
      <Menu className='w-6 h-6' />
    </button>
  )
}
