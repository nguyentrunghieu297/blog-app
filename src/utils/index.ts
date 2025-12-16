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

// Hàm chuyển tiếng Việt có dấu sang không dấu
export function removeVietnameseTones(str: string): string {
  // Bảng ánh xạ đầy đủ các ký tự tiếng Việt
  const replacements: { [key: string]: string } = {
    á: 'a',
    à: 'a',
    ả: 'a',
    ã: 'a',
    ạ: 'a',
    ă: 'a',
    ắ: 'a',
    ằ: 'a',
    ẳ: 'a',
    ẵ: 'a',
    ặ: 'a',
    â: 'a',
    ấ: 'a',
    ầ: 'a',
    ẩ: 'a',
    ẫ: 'a',
    ậ: 'a',
    đ: 'd',
    é: 'e',
    è: 'e',
    ẻ: 'e',
    ẽ: 'e',
    ẹ: 'e',
    ê: 'e',
    ế: 'e',
    ề: 'e',
    ể: 'e',
    ễ: 'e',
    ệ: 'e',
    í: 'i',
    ì: 'i',
    ỉ: 'i',
    ĩ: 'i',
    ị: 'i',
    ó: 'o',
    ò: 'o',
    ỏ: 'o',
    õ: 'o',
    ọ: 'o',
    ô: 'o',
    ố: 'o',
    ồ: 'o',
    ổ: 'o',
    ỗ: 'o',
    ộ: 'o',
    ơ: 'o',
    ớ: 'o',
    ờ: 'o',
    ở: 'o',
    ỡ: 'o',
    ợ: 'o',
    ú: 'u',
    ù: 'u',
    ủ: 'u',
    ũ: 'u',
    ụ: 'u',
    ư: 'u',
    ứ: 'u',
    ừ: 'u',
    ử: 'u',
    ữ: 'u',
    ự: 'u',
    ý: 'y',
    ỳ: 'y',
    ỷ: 'y',
    ỹ: 'y',
    ỵ: 'y',
    // Chữ hoa
    Á: 'A',
    À: 'A',
    Ả: 'A',
    Ã: 'A',
    Ạ: 'A',
    Ă: 'A',
    Ắ: 'A',
    Ằ: 'A',
    Ẳ: 'A',
    Ẵ: 'A',
    Ặ: 'A',
    Â: 'A',
    Ấ: 'A',
    Ầ: 'A',
    Ẩ: 'A',
    Ẫ: 'A',
    Ậ: 'A',
    Đ: 'D',
    É: 'E',
    È: 'E',
    Ẻ: 'E',
    Ẽ: 'E',
    Ẹ: 'E',
    Ê: 'E',
    Ế: 'E',
    Ề: 'E',
    Ể: 'E',
    Ễ: 'E',
    Ệ: 'E',
    Í: 'I',
    Ì: 'I',
    Ỉ: 'I',
    Ĩ: 'I',
    Ị: 'I',
    Ó: 'O',
    Ò: 'O',
    Ỏ: 'O',
    Õ: 'O',
    Ọ: 'O',
    Ô: 'O',
    Ố: 'O',
    Ồ: 'O',
    Ổ: 'O',
    Ỗ: 'O',
    Ộ: 'O',
    Ơ: 'O',
    Ớ: 'O',
    Ờ: 'O',
    Ở: 'O',
    Ỡ: 'O',
    Ợ: 'O',
    Ú: 'U',
    Ù: 'U',
    Ủ: 'U',
    Ũ: 'U',
    Ụ: 'U',
    Ư: 'U',
    Ứ: 'U',
    Ừ: 'U',
    Ử: 'U',
    Ữ: 'U',
    Ự: 'U',
    Ý: 'Y',
    Ỳ: 'Y',
    Ỷ: 'Y',
    Ỹ: 'Y',
    Ỵ: 'Y'
  }

  return str
    .split('')
    .map((char) => replacements[char] || char)
    .join('')
}

// Hàm tạo ID từ text (slug-friendly)
export function createHeadingId(text: string): string {
  return (
    removeVietnameseTones(text)
      .toLowerCase()
      .trim()
      // Loại bỏ các ký tự đặc biệt, giữ lại chữ cái, số, dấu gạch ngang
      .replace(/[^\w\s-]/g, '')
      // Thay khoảng trắng bằng dấu gạch ngang
      .replace(/\s+/g, '-')
      // Loại bỏ nhiều dấu gạch ngang liên tiếp
      .replace(/-+/g, '-')
  )
}
