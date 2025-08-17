import blog_image from '@/assets/images/test-img.jpg'

export const relatedPosts = [
  {
    id: '1',
    title: 'Lịch sử hình thành và phát triển của Hà Nội - Thủ đô ngàn năm văn hiến',
    excerpt:
      'Khám phá hành trình lịch sử hơn 1000 năm của Hà Nội, từ thành Thăng Long cổ kính đến thủ đô hiện đại của Việt Nam ngày nay.',
    slug: 'lich-su-ha-noi-thu-do-ngan-nam',
    featuredImage: blog_image,
    publishedAt: '2024-01-15',
    readTime: '15 phút đọc',
    category: {
      name: 'Lịch sử',
      slug: 'lich-su',
      count: 20
    },
    tags: ['Lịch sử Việt Nam', 'Hà Nội', 'Thăng Long'],
    author: {
      name: 'Tiến sĩ Nguyễn Văn Sử',
      avatar: '/placeholder.svg?height=40&width=40'
    }
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
    category: {
      name: 'Frontend',
      slug: 'frontend',
      count: 10
    },
    tags: ['React', 'JavaScript', 'Performance'],
    author: {
      name: 'Nguyễn Văn Dev',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: '3',
    title: 'Xây dựng API RESTful với Node.js và Express',
    excerpt: 'Hướng dẫn chi tiết cách xây dựng một API RESTful hoàn chỉnh sử dụng Node.js và Express framework.',
    slug: 'xay-dung-api-restful-nodejs',
    featuredImage: blog_image,
    publishedAt: '2024-01-08',
    readTime: '12 phút đọc',
    category: {
      name: 'Backend',
      slug: 'backend',
      count: 5
    },
    tags: ['Node.js', 'Express', 'API'],
    author: {
      name: 'Trần Văn Backend',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: '4',
    title: 'Xây dựng API RESTful với Node.js và Express',
    excerpt: 'Hướng dẫn chi tiết cách xây dựng một API RESTful hoàn chỉnh sử dụng Node.js và Express framework.',
    slug: 'xay-dung-api-restful-nodejs',
    featuredImage: blog_image,
    publishedAt: '2024-01-08',
    readTime: '12 phút đọc',
    category: {
      name: 'Backend',
      slug: 'backend',
      count: 5
    },
    tags: ['Node.js', 'Express', 'API'],
    author: {
      name: 'Trần Văn Backend',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  },
  {
    id: '5',
    title: 'Xây dựng API RESTful với Node.js và Express',
    excerpt: 'Hướng dẫn chi tiết cách xây dựng một API RESTful hoàn chỉnh sử dụng Node.js và Express framework.',
    slug: 'xay-dung-api-restful-nodejs',
    featuredImage: blog_image,
    publishedAt: '2024-01-08',
    readTime: '12 phút đọc',
    category: {
      name: 'Backend',
      slug: 'backend',
      count: 5
    },
    tags: ['Node.js', 'Express', 'API'],
    author: {
      name: 'Trần Văn Backend',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  }
]
