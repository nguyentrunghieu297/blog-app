import React from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const tabs = [
    { label: 'Tổng quan', key: 'tong-quan' },
    { label: 'Kinh Tế', key: 'kinh-te' },
    { label: 'Bất Động Sản', key: 'bat-dong-san' },
    { label: 'Công Nghệ', key: 'cong-nghe' },
    { label: 'Doanh Nghiệp', key: 'doanh-nghiep' },
    { label: 'Thế Giới', key: 'the-gioi' }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='hidden lg:flex justify-center space-x-8 xl:space-x-12 border-b border-gray-200 px-4 md:px-8 overflow-x-auto'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`py-4 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.key
                ? 'border-b-2 border-gray-800 text-gray-900'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className='lg:hidden border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
        <span className='text-sm font-medium text-gray-900'>
          {tabs.find((t) => t.key === activeTab)?.label || 'Menu'}
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='lg:hidden border-b border-gray-200 bg-white'>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                onTabChange(tab.key)
                setIsMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-gray-50 text-gray-900 border-l-4 border-gray-800'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
