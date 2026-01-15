import React from 'react'
import { ChevronDown, X } from 'lucide-react'

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
  // Danh sách các nguồn báo
  const newsSources = [
    { label: 'Tất cả', key: 'all', description: 'Tất cả nguồn tin' },
    { label: 'VnExpress', key: 'vnexpress', description: 'vnexpress.net' },
    { label: 'Tuổi Trẻ', key: 'tuoitre', description: 'tuoitre.vn' },
    { label: 'Thanh Niên', key: 'thanhnien', description: 'thanhnien.vn' },
    { label: 'Dân Trí', key: 'dantri', description: 'dantri.com.vn' },
    // { label: 'Vietnamnet', key: 'vietnamnet', description: 'vietnamnet.vn' },
    { label: 'Người Lao Động', key: 'nguoilaodong', description: 'nld.com.vn' },
    { label: 'Báo Lâm Đồng', key: 'baolamdong', description: 'baolamdong.vn' }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='hidden lg:flex justify-center space-x-8 xl:space-x-12 border-b border-gray-200 px-4 md:px-8 overflow-x-auto'>
        {newsSources.map((source) => (
          <button
            key={source.key}
            onClick={() => onTabChange(source.key)}
            className={`relative py-4 text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
              activeTab === source.key ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {source.label}
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                activeTab === source.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className='lg:hidden border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm font-medium text-gray-900 transition-opacity duration-200'>
            {newsSources.find((s) => s.key === activeTab)?.label || 'Chọn nguồn'}
          </span>
          {activeTab !== 'all' && (
            <span className='text-xs text-gray-500 mt-0.5'>
              {newsSources.find((s) => s.key === activeTab)?.description}
            </span>
          )}
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='p-2 hover:bg-gray-100 rounded-lg transition-all duration-200'
          aria-label='Toggle menu'
        >
          <div className='relative w-5 h-5'>
            <X
              className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
              }`}
            />
            <ChevronDown
              className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden border-b border-gray-200 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='divide-y divide-gray-100'>
          {newsSources.map((source, index) => (
            <button
              key={source.key}
              onClick={() => {
                onTabChange(source.key)
                setIsMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                activeTab === source.key
                  ? 'bg-gray-50 text-gray-900 border-l-4 border-l-gray-800'
                  : 'text-gray-600 hover:bg-gray-50 hover:translate-x-1'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : '0ms'
              }}
            >
              <div className='text-sm font-medium'>{source.label}</div>
              <div className='text-xs text-gray-500 mt-0.5'>{source.description}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
