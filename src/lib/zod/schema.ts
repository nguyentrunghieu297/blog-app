import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})

export const blogSchema = z.object({
  title: z
    .string()
    .min(1, 'Tiêu đề là bắt buộc')
    .min(10, 'Tiêu đề phải có ít nhất 10 ký tự')
    .max(200, 'Tiêu đề không được vượt quá 200 ký tự'),
  excerpt: z
    .string()
    .min(1, 'Tóm tắt là bắt buộc')
    .min(20, 'Tóm tắt phải có ít nhất 20 ký tự')
    .max(500, 'Tóm tắt không được vượt quá 500 ký tự'),
  authorName: z.string().min(1, 'Tên tác giả là bắt buộc').min(2, 'Tên tác giả phải có ít nhất 2 ký tự'),
  authorAvatar: z.string().min(1, 'URL ảnh đại diện không hợp lệ').optional().or(z.literal('')),
  authorBio: z.string().max(500, 'Giới thiệu không được vượt quá 500 ký tự').optional(),
  publishedAt: z.string().min(1, 'Ngày xuất bản là bắt buộc'),
  isPublished: z.boolean(),
  tags: z.array(z.string()).optional(),
  featuredImage: z.string().min(1, 'URL ảnh nổi bật là bắt buộc').or(z.literal('')),
  categoryName: z.string().optional(),
  categorySlug: z.string().optional()
})
