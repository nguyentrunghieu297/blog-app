import React from 'react'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['Tổng quan', 'Kinh Tế', 'Bất Động Sản', 'Công Nghệ', 'Doanh Nghiệp', 'Thế Giới']

  return (
    <nav className='flex justify-center space-x-12 border-b border-gray-200 px-8'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab.toLowerCase().replace(' ', '-'))}
          className={`py-4 text-sm font-medium transition-colors ${
            activeTab === tab.toLowerCase().replace(' ', '-')
              ? 'border-b-2 border-gray-800 text-gray-900'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
