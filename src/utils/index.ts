export const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^a-z0-9\s-]/g, '') // Chỉ giữ chữ cái, số, khoảng trắng và dấu gạch ngang
    .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-') // Loại bỏ nhiều dấu gạch ngang liên tiếp
    .replace(/^-+|-+$/g, '')
}
