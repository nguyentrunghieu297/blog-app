import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export async function beautifyMarkdownWithAI(raw: string): Promise<string> {
  const prompt = `
Bạn là một biên tập viên Markdown thông minh.
Hãy đọc kỹ nội dung sau và làm cho nó đẹp hơn:
- Tách các đoạn bằng dòng trống hợp lý.
- Thêm tiêu đề phụ nếu có thể (##, ###).
- Giữ nguyên nội dung, không tóm gọn, không thêm nội dung mới.
- Format lại danh sách, blockquote, link, chữ in đậm.
- Kết quả trả về chỉ là markdown thuần túy, không có chú thích.

Nội dung:
${raw}
`

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2
  })

  return res.choices[0]?.message?.content?.trim() ?? raw
}
