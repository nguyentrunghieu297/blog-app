import { DateInfo } from '@/types/news'

export const getTimeOfDay = (hour: number): string => {
  if (hour >= 5 && hour < 12) return 'Buổi Sáng'
  if (hour >= 12 && hour < 14) return 'Buổi Trưa'
  if (hour >= 14 && hour < 18) return 'Buổi Chiều'
  return 'Buổi Tối'
}

export const formatDate = (date: Date): DateInfo => {
  const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
  return {
    dayName: days[date.getDay()],
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  }
}
