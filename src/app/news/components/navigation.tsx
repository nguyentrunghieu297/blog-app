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
  // Đồng bộ với BE
  const tabs = [
    { label: 'Tổng quan', key: 'tong-quan', description: 'Tất cả tin tức' },
    {
      label: 'Kinh Tế',
      key: 'kinh-te-tai-chinh',
      description: 'Kinh doanh, tài chính, chứng khoán, BĐS'
    },
    {
      label: 'Công Nghệ',
      key: 'cong-nghe-khoa-hoc',
      description: 'Công nghệ, khoa học, chuyển đổi số'
    },
    {
      label: 'Thời Sự',
      key: 'thoi-su-the-gioi',
      description: 'Tin trong nước, quốc tế, pháp luật'
    },
    {
      label: 'Văn Hóa',
      key: 'van-hoa-giai-tri',
      description: 'Giải trí, văn hóa, du lịch'
    },
    {
      label: 'Giáo Dục & Sức Khỏe',
      key: 'giao-duc-suc-khoe',
      description: 'Giáo dục, y tế, đời sống trẻ'
    },
    {
      label: 'Thể Thao & Đời Sống',
      key: 'the-thao-doi-song',
      description: 'Thể thao, ô tô, đời sống'
    }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='hidden lg:flex justify-center space-x-8 xl:space-x-12 border-b border-gray-200 px-4 md:px-8 overflow-x-auto'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`relative py-4 text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
              activeTab === tab.key ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                activeTab === tab.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className='lg:hidden border-b border-gray-200 px-4 py-3 flex items-center justify-between'>
        <span className='text-sm font-medium text-gray-900 transition-opacity duration-200'>
          {tabs.find((t) => t.key === activeTab)?.label || 'Menu'}
        </span>
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
          isMobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='divide-y divide-gray-100'>
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => {
                onTabChange(tab.key)
                setIsMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-gray-50 text-gray-900 border-l-4 border-l-gray-800'
                  : 'text-gray-600 hover:bg-gray-50 hover:translate-x-1'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : '0ms'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
