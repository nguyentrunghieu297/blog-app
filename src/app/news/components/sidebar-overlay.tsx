import React from 'react'
import { X } from 'lucide-react'

interface SidebarOverlayProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className='xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity' onClick={onClose} />

      {/* Sidebar Panel */}
      <div className='xl:hidden fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 overflow-y-auto transform transition-transform'>
        <div className='p-6 space-y-6'>
          {/* Header */}
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-bold text-gray-900'>Thông tin thị trường</h2>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
              aria-label='Close sidebar'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </>
  )
}
