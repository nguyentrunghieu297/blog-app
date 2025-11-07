import { DateInfo } from '@/types/news'

export const getTimeOfDay = (hour: number): string => {
  if (hour >= 5 && hour < 11) return 'Buổi Sáng'
  if (hour >= 11 && hour < 13) return 'Buổi Trưa'
  if (hour >= 13 && hour < 18) return 'Buổi Chiều'
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
