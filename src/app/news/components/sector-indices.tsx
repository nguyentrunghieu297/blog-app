'use client'

import React, { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { formatDate } from '@/utils/date-helpers'
import { SectorItem } from '@/types/news'

interface SectorIndicesProps {
  currentTime: Date
  sectorData: SectorItem[]
}

export const SectorIndices: React.FC<SectorIndicesProps> = ({ currentTime, sectorData }) => {
  const [clientTime, setClientTime] = useState<Date | null>(null)

  useEffect(() => {
    setClientTime(new Date()) // đảm bảo giờ lấy đúng phía client
  }, [])

  const { day, month, year } = formatDate(currentTime)

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='font-semibold text-base'>Chỉ số ngành</h3>

        <span className='text-xs text-gray-500'>
          {clientTime
            ? `${clientTime.getHours().toString().padStart(2, '0')}:${clientTime
                .getMinutes()
                .toString()
                .padStart(2, '0')} ${day}/${month}/${year}`
            : '--:--'}
        </span>
      </div>

      <div className='space-y-4'>
        {sectorData.map((sector, index) => (
          <div key={index} className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              {sector.isNegative ? (
                <TrendingDown className='w-4 h-4 text-red-600' />
              ) : (
                <TrendingUp className='w-4 h-4 text-green-600' />
              )}
              <span className='text-sm text-gray-900'>{sector.name}</span>
            </div>
            <div className='text-right'>
              <div className='text-base font-bold text-gray-900'>{sector.value}</div>
              <div className={`text-xs font-medium ${sector.isNegative ? 'text-red-600' : 'text-green-600'}`}>
                {sector.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
