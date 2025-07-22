import BlogList from './blog-list';
import blog_image from '@/assets/images/test-img.jpg';

// Mock data cho demo
const blogPosts = [
  {
    id: '1',
    title: 'Lịch sử hình thành và phát triển của Hà Nội - Thủ đô ngàn năm văn hiến',
    excerpt:
      'Khám phá hành trình lịch sử hơn 1000 năm của Hà Nội, từ thành Thăng Long cổ kính đến thủ đô hiện đại của Việt Nam ngày nay.',
    slug: 'lich-su-ha-noi-thu-do-ngan-nam',
    featuredImage: blog_image,
    publishedAt: '2024-01-15',
    readTime: '15 phút đọc',
    category: 'Lịch sử',
    tags: ['Lịch sử Việt Nam', 'Hà Nội', 'Thăng Long'],
    author: {
      name: 'Tiến sĩ Nguyễn Văn Sử',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '2',
    title: 'Tối ưu hóa hiệu suất React với useMemo và useCallback',
    excerpt:
      'Tìm hiểu cách sử dụng useMemo và useCallback để tối ưu hóa hiệu suất ứng dụng React của bạn một cách hiệu quả.',
    slug: 'toi-uu-hoa-hieu-suat-react',
    featuredImage: blog_image,
    publishedAt: '2024-01-10',
    readTime: '8 phút đọc',
    category: 'Lập trình',
    tags: ['React', 'JavaScript', 'Performance'],
    author: {
      name: 'Nguyễn Văn Dev',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '3',
    title: 'Xây dựng API RESTful với Node.js và Express',
    excerpt:
      'Hướng dẫn chi tiết cách xây dựng một API RESTful hoàn chỉnh sử dụng Node.js và Express framework.',
    slug: 'xay-dung-api-restful-nodejs',
    featuredImage: blog_image,
    publishedAt: '2024-01-08',
    readTime: '12 phút đọc',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API'],
    author: {
      name: 'Trần Văn Backend',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: Khi nào nên sử dụng?',
    excerpt:
      'So sánh chi tiết giữa CSS Grid và Flexbox, giúp bạn lựa chọn công cụ phù hợp cho từng tình huống thiết kế.',
    slug: 'css-grid-vs-flexbox',
    featuredImage: blog_image,
    publishedAt: '2024-01-05',
    readTime: '7 phút đọc',
    category: 'Frontend',
    tags: ['CSS', 'Grid', 'Flexbox'],
    author: {
      name: 'Lê Thị Frontend',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '5',
    title: 'Văn hóa ẩm thực Hà Nội xưa và nay',
    excerpt: 'Hành trình khám phá ẩm thực truyền thống của người Hà Nội qua các thời kỳ lịch sử.',
    slug: 'van-hoa-am-thuc-ha-noi',
    featuredImage: blog_image,
    publishedAt: '2024-01-03',
    readTime: '6 phút đọc',
    category: 'Văn hóa',
    tags: ['Ẩm thực', 'Hà Nội', 'Văn hóa'],
    author: {
      name: 'Phạm Văn Ẩm thực',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '6',
    title: 'Deployment Next.js lên Vercel trong 5 phút',
    excerpt:
      'Hướng dẫn chi tiết cách deploy ứng dụng Next.js lên Vercel một cách nhanh chóng và hiệu quả.',
    slug: 'deployment-nextjs-vercel',
    featuredImage: blog_image,
    publishedAt: '2023-12-28',
    readTime: '4 phút đọc',
    category: 'DevOps',
    tags: ['Next.js', 'Vercel', 'Deployment'],
    author: {
      name: 'Hoàng Văn DevOps',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '7',
    title: 'CSS Grid vs Flexbox: Khi nào nên sử dụng?',
    excerpt:
      'So sánh chi tiết giữa CSS Grid và Flexbox, giúp bạn lựa chọn công cụ phù hợp cho từng tình huống thiết kế.',
    slug: 'css-grid-vs-flexbox',
    featuredImage: blog_image,
    publishedAt: '2024-01-05',
    readTime: '7 phút đọc',
    category: 'Frontend',
    tags: ['CSS', 'Grid', 'Flexbox'],
    author: {
      name: 'Lê Thị Frontend',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '8',
    title: 'Văn hóa ẩm thực Hà Nội xưa và nay',
    excerpt: 'Hành trình khám phá ẩm thực truyền thống của người Hà Nội qua các thời kỳ lịch sử.',
    slug: 'van-hoa-am-thuc-ha-noi',
    featuredImage: blog_image,
    publishedAt: '2024-01-03',
    readTime: '6 phút đọc',
    category: 'Văn hóa',
    tags: ['Ẩm thực', 'Hà Nội', 'Văn hóa'],
    author: {
      name: 'Phạm Văn Ẩm thực',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
  {
    id: '9',
    title: 'Deployment Next.js lên Vercel trong 5 phút',
    excerpt:
      'Hướng dẫn chi tiết cách deploy ứng dụng Next.js lên Vercel một cách nhanh chóng và hiệu quả.',
    slug: 'deployment-nextjs-vercel',
    featuredImage: blog_image,
    publishedAt: '2023-12-28',
    readTime: '4 phút đọc',
    category: 'DevOps',
    tags: ['Next.js', 'Vercel', 'Deployment'],
    author: {
      name: 'Hoàng Văn DevOps',
      avatar: '/placeholder.svg?height=40&width=40',
    },
  },
];

const categories = [
  { name: 'Tất cả', slug: 'all', count: 6 },
  { name: 'Lịch sử', slug: 'lich-su', count: 1 },
  { name: 'Lập trình', slug: 'lap-trinh', count: 1 },
  { name: 'Frontend', slug: 'frontend', count: 1 },
  { name: 'Backend', slug: 'backend', count: 1 },
  { name: 'DevOps', slug: 'devops', count: 1 },
  { name: 'Văn hóa', slug: 'van-hoa', count: 1 },
];

const monthlyArchive = [
  { month: 'January 2024', count: 4, slug: '2024-01' },
  { month: 'December 2023', count: 2, slug: '2023-12' },
  { month: 'November 2023', count: 3, slug: '2023-11' },
  { month: 'October 2023', count: 5, slug: '2023-10' },
  { month: 'September 2023', count: 2, slug: '2023-09' },
  { month: 'August 2023', count: 4, slug: '2023-08' },
  { month: 'July 2023', count: 3, slug: '2023-07' },
  { month: 'June 2023', count: 2, slug: '2023-06' },
  { month: 'May 2023', count: 5, slug: '2023-05' },
  { month: 'April 2023', count: 3, slug: '2023-04' },
  { month: 'March 2023', count: 4, slug: '2023-03' },
  { month: 'February 2023', count: 2, slug: '2023-02' },
];

const popularTags = [
  { name: 'React', count: 8 },
  { name: 'JavaScript', count: 12 },
  { name: 'Next.js', count: 6 },
  { name: 'CSS', count: 10 },
  { name: 'Node.js', count: 7 },
  { name: 'Lịch sử Việt Nam', count: 5 },
  { name: 'Hà Nội', count: 4 },
  { name: 'API', count: 6 },
];

export default function BlogPage() {
  return (
    <BlogList
      posts={blogPosts}
      categories={categories}
      monthlyArchive={monthlyArchive}
      popularTags={popularTags}
    />
  );
}
