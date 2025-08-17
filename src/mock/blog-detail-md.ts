import { marked } from 'marked'
import Saigon from '@/assets/images/saigon-xua.jpg'

const markdownContent = `
Hà Nội, thủ đô của nước Cộng hòa xã hội chủ nghĩa Việt Nam, là một trong những thành phố có lịch sử lâu đời nhất Đông Nam Á. Với hơn 1000 năm lịch sử, Hà Nội đã chứng kiến sự thăng trầm của nhiều triều đại **phong kiến** và là trung tâm chính trị, văn hóa quan trọng của dân tộc Việt Nam qua các thời kỳ.

## Khởi nguồn lịch sử - Thời kỳ tiền sử và cổ đại

Vùng đất Hà Nội ngày nay đã có dấu vết sinh sống của con người từ thời đại đồ đá cũ, cách đây khoảng **500.000 năm**. Các di tích khảo cổ học tại Thanh Trì, Đông Anh và nhiều nơi khác đã chứng minh rằng đây là một trong những cái nôi văn minh cổ xưa của Việt Nam.

Trong thời kỳ các vua Hùng xây dựng nhà nước Văn Lang (thế kỷ VII - III TCN), vùng đất này thuộc bộ Mê Linh. Đây cũng là nơi sinh ra nữ tướng **Hai Bà Trưng**, những người anh hùng đã lãnh đạo cuộc khởi nghĩa chống quân xâm lược phương Bắc vào thế kỷ I.

![Văn Miếu Hà Nội - Biểu tượng của nền giáo dục truyền thống Việt Nam](https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=400&fit=crop)

*Văn Miếu Hà Nội - Biểu tượng của nền giáo dục truyền thống Việt Nam*

## Thời kỳ Đại La - Nền móng của kinh thành

Năm 866, tướng Cao Biền cho xây dựng thành **Đại La** ở phía tây sông Hồng. Thành được xây theo quy hoạch bài bản, có 8 cửa thành và hệ thống đường phố dạng ô bàn cờ → tiền thân của Hà Nội ngày nay.

## Thăng Long - Kinh đô của các triều đại phong kiến

Năm 1010, vua **Lý Thái Tổ** dời đô từ Hoa Lư về Đại La và đổi tên thành **Thăng Long**.

> "Đại Việt quốc Thăng Long thành, địa thế long hùng, thiên nhiên hiểm cố"  
> — Trích từ bia đá thời Lý

![Hoàng thành Thăng Long - Di sản văn hóa thế giới](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop)

*Hoàng thành Thăng Long - Di sản văn hóa thế giới được UNESCO công nhận*

## Thời kỳ Trần và Minh - Biến động lịch sử

- Triều Trần (1225-1400): Thăng Long tiếp tục phát triển, là trung tâm chính trị & học thuật.  
- Thời Hồ Quý Ly (1400-1407): dời đô về Tây Đô.  
- Thời Minh đô hộ (1407-1427): đổi tên Thăng Long thành **Đông Quan**.

## Thời Lê sơ và sự phục hưng

Sau khi **Lê Lợi** đánh bại quân Minh (1428), Thăng Long trở lại thời kỳ hoàng kim.  
Dưới thời Lê Thánh Tông (1460-1497), thành phố phát triển mạnh mẽ về mọi mặt.  

Trung tâm giáo dục **Văn Miếu - Quốc Tử Giám** được mở rộng và trở thành trường đại học đầu tiên của Việt Nam.

## Thời kỳ phân tranh và suy tàn

Từ thế kỷ XVI, do tranh chấp nội bộ → Thăng Long dần mất đi vị thế.  
Thời Trịnh - Nguyễn phân tranh, Thăng Long chỉ còn là trung tâm của **Đàng Ngoài**.

![Hồ Hoàn Kiếm - Trái tim của Hà Nội](https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=400&fit=crop)

*Hồ Hoàn Kiếm - Trái tim của Hà Nội với những truyền thuyết cổ xưa*

## Thời Nguyễn và sự thay đổi địa vị

Năm 1802, vua **Gia Long** dời đô về Phú Xuân (Huế). Thăng Long bị đổi tên thành **Hà Nội** (nghĩa là "nằm trong lòng sông").

Dù không còn là kinh đô, Hà Nội vẫn giữ vai trò trung tâm văn hóa – kinh tế miền Bắc.

## Thời kỳ thuộc địa Pháp (1884-1945)

- Hà Nội trở thành trung tâm hành chính Đông Dương.  
- Người Pháp quy hoạch và xây dựng nhiều công trình: **Nhà hát Lớn, Bưu điện, Đại học Đông Dương**.  
- Hình thành **khu phố Pháp** song song với **36 phố phường**.

## Hà Nội trong thời kỳ đấu tranh giải phóng

- 19/12/1946: Chủ tịch **Hồ Chí Minh** ra "Lời kêu gọi toàn quốc kháng chiến".  
- 10/10/1954: Quân đội Việt Nam tiếp quản Hà Nội, chấm dứt 70 năm đô hộ Pháp.

## Hà Nội - Thủ đô của nước Việt Nam thống nhất

1954–1975: Hà Nội là thủ đô của miền Bắc, kiên cường trong chiến tranh chống Mỹ.  
Sau 30/4/1975: Trở thành thủ đô của cả nước.

## Hà Nội hiện đại - Thủ đô thế kỷ XXI

- 1986: Chính sách Đổi mới → Hà Nội phát triển vượt bậc.  
- 2008: Mở rộng địa giới hành chính (sáp nhập Hà Tây, Vĩnh Phúc, Hòa Bình).  
- Ngày nay: Hà Nội là trung tâm **chính trị, kinh tế, văn hóa, giáo dục** lớn của cả nước.  

Với hơn **1000 năm lịch sử**, Hà Nội trở thành biểu tượng của sự kiên cường, bất khuất, xứng đáng với danh hiệu *"Thành phố vì hòa bình"* mà UNESCO trao tặng.
`

export const blogPostMd = {
  id: '1',
  title: 'Lịch sử hình thành và phát triển của Hà Nội - Thủ đô ngàn năm văn hiến',
  excerpt:
    'Khám phá hành trình lịch sử hơn 1000 năm của Hà Nội, từ thành Thăng Long cổ kính đến thủ đô hiện đại của Việt Nam ngày nay.',
  content: marked(markdownContent), // 👈 Convert Markdown -> HTML string
  author: {
    name: 'Tiến sĩ Nguyễn Văn Sử',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    bio: 'Tiến sĩ Lịch sử, chuyên gia nghiên cứu lịch sử Việt Nam, tác giả của nhiều công trình nghiên cứu về lịch sử Thăng Long - Hà Nội'
  },
  publishedAt: '2024-01-15',
  readTime: '15 phút đọc',
  tags: ['Lịch sử Việt Nam', 'Hà Nội', 'Thăng Long', 'Văn hóa', 'Di sản'],
  featuredImage: Saigon,
  category: {
    name: 'Lịch sử',
    slug: 'lich-su',
    count: 20
  }
}
