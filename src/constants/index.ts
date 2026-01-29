export const dateFormatList = ['YYYY-MM-DD', 'DD-MM-YYYY']

export const AUTHORITIES = {
  MANAGER: 'Quản lý',
  ADMIN: 'Admin',
  CUSTOMER: 'User',
  STAFF: 'Staff'
}

export const AUTHORITIES_ID = {
  MANAGER: 1,
  ADMIN: 4
}

export const THEME_CODES = {
  PRIMARY: '#2D3748'
}

export const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const PAGINATION = {
  PAGE_SIZE: 10,
  PAGE_NUM: 1,
  DEFAULT_SORT: 'id',
  DEFAULT_SORT_DIR: 'asc'
}

// Mapping mã tiền tệ sang tên đầy đủ
export const CURRENCY_NAMES: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  SGD: 'Singapore',
  AUD: 'Australian',
  CAD: 'Canadian',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  DKK: 'Danish Krone',
  GBP: 'British Pound',
  HKD: 'Hong Kong',
  INR: 'Indian Rupee',
  KWD: 'Kuwaiti Dinar',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  RUB: 'Russian Ruble',
  SAR: 'Saudi Riyal',
  SEK: 'Swedish Krona',
  THB: 'Thai Baht'
}

// CARD CONSTANTS

export const NUMBER_OF_TAGS = 3
export const FILTER_TAGS_LIMIT = 15
export const POSTS_PER_PAGE = 9
export const MAX_VISIBLE_PAGES = 5

export const SOCIALS = {
  FACEBOOK: 'https://www.facebook.com/ngtrxhieu/',
  GITHUB: 'https://github.com/nguyentrunghieu297',
  LINKEDIN: 'https://www.linkedin.com/in/hieunt23/'
}

export const DEFAULT_MARKDOWN = `# 🧭 Hướng Dẫn Sử Dụng Markdown Toàn Tập

Markdown là một ngôn ngữ đánh dấu nhẹ, giúp bạn **định dạng văn bản dễ dàng** mà không cần công cụ phức tạp.  
Dưới đây là hướng dẫn sử dụng đầy đủ các cú pháp trong Markdown.

---

## 1️⃣ Tiêu đề (Headings)

Dùng ký tự \`#\` từ 1 đến 6 để tạo tiêu đề.

\`\`\`markdown
# Tiêu đề cấp 1
## Tiêu đề cấp 2
### Tiêu đề cấp 3
#### Tiêu đề cấp 4
##### Tiêu đề cấp 5
###### Tiêu đề cấp 6
\`\`\`

---

## 2️⃣ Định dạng văn bản

\`\`\`markdown
**Chữ đậm**  
*Chữ nghiêng*  
***Chữ nghiêng và đậm***  
~~Chữ gạch bỏ~~  
__Chữ đậm (cách khác)__  
_**Vừa nghiêng vừa đậm**_
\`\`\`

📘 **Kết quả:**

**Chữ đậm**  
*Chữ nghiêng*  
***Chữ nghiêng và đậm***  
~~Chữ gạch bỏ~~  
__Chữ đậm (cách khác)__  
_**Vừa nghiêng vừa đậm**_

---

## 3️⃣ Danh sách

### Danh sách không thứ tự:
\`\`\`markdown
- Mèo
- Chó
  - Husky
  - Corgi
- Thỏ
\`\`\`

### Danh sách có thứ tự:
\`\`\`markdown
1. Bước 1
2. Bước 2
   1. Bước 2.1
   2. Bước 2.2
3. Bước 3
\`\`\`

---

## 4️⃣ Liên kết & Hình ảnh

\`\`\`markdown
[Truy cập Google](https://google.com)

![Ảnh minh họa](https://via.placeholder.com/150)
\`\`\`

---

## 5️⃣ Trích dẫn (Quote)

\`\`\`markdown
> Đây là một trích dẫn.  
> Có thể dùng để ghi chú, trích dẫn lời nói, v.v.
\`\`\`

> Đây là một trích dẫn.  
> Có thể dùng để ghi chú, trích dẫn lời nói, v.v.

---

## 6️⃣ Đoạn mã (Code)

### Dòng code trong văn bản:
\`\`\`markdown
Sử dụng \`console.log('Hello world!')\` để in ra màn hình.
\`\`\`

Sử dụng \`console.log('Hello world!')\` để in ra màn hình.

### Khối code nhiều dòng:
\`\`\`\`\`
\`\`\`javascript
function greet(name) {
  return \`Xin chào, \${name}!\`;
}
console.log(greet("Trung"));
\`\`\`
\`\`\`\`\`

---

## 7️⃣ Bảng (Table)

\`\`\`markdown
| Họ Tên | Tuổi | Nghề nghiệp     |
|--------|------|-----------------|
| Trung  | 25   | Lập trình viên  |
| Mai    | 23   | Nhà thiết kế    |
| Nam    | 27   | Quản lý dự án   |
\`\`\`

📊 **Kết quả:**

| Họ Tên | Tuổi | Nghề nghiệp     |
|--------|------|-----------------|
| Trung  | 25   | Lập trình viên  |
| Mai    | 23   | Nhà thiết kế    |
| Nam    | 27   | Quản lý dự án   |

---

## 8️⃣ Đường kẻ ngang (Horizontal Line)

\`\`\`markdown
---
***
___
\`\`\`

---

## 9️⃣ Checkbox (Danh sách công việc)

\`\`\`markdown
- [x] Viết tài liệu
- [ ] Thêm ví dụ minh họa
- [ ] Kiểm tra chính tả
\`\`\`

✅ **Kết quả:**

- [x] Viết tài liệu  
- [ ] Thêm ví dụ minh họa  
- [ ] Kiểm tra chính tả  

---

## 🔟 Kết hợp HTML (nếu được hỗ trợ)

Bạn có thể chèn HTML vào Markdown để tăng tính linh hoạt:

\`\`\`markdown
<p style="color: blue;">Đoạn này có màu xanh dương.</p>
<b>Đây là chữ đậm dùng HTML.</b>
\`\`\`

---

## 🧩 Ghi chú mở rộng

### 1. Chèn công thức toán (nếu trình hỗ trợ LaTeX)
\`\`\`markdown
Công thức: $E = mc^2$
\`\`\`

### 2. Chèn biểu tượng cảm xúc
\`\`\`markdown
:tada: :fire: :sparkles:
\`\`\`

🎉🔥✨

---

## ✅ Tổng kết

| Chức năng         | Ký hiệu sử dụng | Ví dụ                    |
|-------------------|-----------------|---------------------------|
| Tiêu đề           | \`#\`              | \`## Tiêu đề\`             |
| In đậm            | \`**text**\`       | **đậm**                  |
| Nghiêng           | \`*text*\`         | *nghiêng*                |
| Code              | \`\` \`code\` \`\`     | \`console.log()\`          |
| Danh sách         | \`-\` hoặc \`1.\`    | \`- mục\` hoặc \`1. bước\`   |
| Hình ảnh          | \`![]()\`          | \`![alt](url)\`            |
| Liên kết          | \`[]()\`           | \`[Google](url)\`          |
| Bảng              | \`|\`              | \`| A | B |\`              |
| Checkbox          | \`- [ ]\`          | \`- [x] hoàn thành\`       |

---

🎯 **Mẹo:**  
Nếu bạn đang dùng trình biên tập như VSCode, Typora, Obsidian hoặc GitHub README, bạn có thể xem **preview trực tiếp** để học nhanh hơn.
`
