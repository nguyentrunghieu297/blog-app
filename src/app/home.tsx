'use client'

import SplitText from '@/components/SplitText'
import TextType from '@/components/TextType'
import { StatsCounter } from '@/components/StatsCounter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {
  ArrowRight,
  BookOpen,
  Code,
  Wrench,
  Mail,
  Star,
  Users,
  FileText,
  Zap,
  Calendar,
  Clock,
  Loader,
  ExternalLink
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Bài viết', value: 15, suffix: '+' },
    { label: 'Dự án', value: 3, suffix: '+' },
    { label: 'Năm kinh nghiệm', value: 1, suffix: '+' },
    { label: 'Công nghệ', value: 2, suffix: '+' }
  ]

  const recentPosts = [
    {
      id: '1',
      title: 'Lịch sử hình thành và phát triển của Hà Nội - Thủ đô ngàn năm văn hiến',
      excerpt:
        'Khám phá hành trình lịch sử hơn 1000 năm của Hà Nội, từ thành Thăng Long cổ kính đến thủ đô hiện đại của Việt Nam ngày nay.',
      slug: 'lich-su-ha-noi-thu-do-ngan-nam',
      featuredImage:
        'https://images.unsplash.com/photo-1752184377529-b0989b6d5f5c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      publishedAt: '2024-01-15',
      readTime: '15 phút đọc',
      category: 'Lịch sử',
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
      featuredImage:
        'https://images.unsplash.com/photo-1752184377529-b0989b6d5f5c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      publishedAt: '2024-01-10',
      readTime: '8 phút đọc',
      category: 'Lập trình',
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
      featuredImage:
        'https://images.unsplash.com/photo-1752184377529-b0989b6d5f5c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      publishedAt: '2024-01-08',
      readTime: '12 phút đọc',
      category: 'Backend',
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
      featuredImage:
        'https://images.unsplash.com/photo-1752184377529-b0989b6d5f5c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      publishedAt: '2024-01-08',
      readTime: '12 phút đọc',
      category: 'Backend',
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
      featuredImage:
        'https://images.unsplash.com/photo-1752184377529-b0989b6d5f5c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      publishedAt: '2024-01-08',
      readTime: '12 phút đọc',
      category: 'Backend',
      tags: ['Node.js', 'Express', 'API'],
      author: {
        name: 'Trần Văn Backend',
        avatar: '/placeholder.svg?height=40&width=40'
      }
    }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Nền tảng thương mại điện tử hoàn chỉnh với thanh toán trực tuyến, quản lý kho hàng và dashboard admin.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      image:
        'https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop và notifications.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      image:
        'https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blog CMS',
      description: 'Hệ thống quản lý nội dung blog với editor WYSIWYG, SEO optimization và analytics dashboard.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'TinyMCE', 'Chart.js'],
      image:
        'https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='space-y-4 sm:space-y-6'>
              <div className='space-y-3 sm:space-y-4'>
                <SplitText
                  text='👋 Chào mừng đến với blog của tôi'
                  className='text-xs sm:text-sm font-normal text-left'
                  delay={100}
                  duration={0.6}
                  ease='power3.out'
                  splitType='chars'
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin='-100px'
                  textAlign='left'
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <div className='space-y-2 h-20 sm:h-48 md:h-32'>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight'>
                    <TextType
                      text={['Something new to me and maybe to you', 'Điều gì đó mới mẻ với tôi và có thể với bạn']}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      textColors={['#000']}
                      cursorCharacter='|'
                    />
                  </h1>
                </div>
                <p className='text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed'>
                  Nơi tôi chia sẻ những kiến thức linh tinh được góp nhặt từ khắp nơi trên internet. Mục đích là để lưu
                  giữ và chia sẻ với mọi người.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4'>
                <Button size='lg' asChild className='w-full sm:w-auto'>
                  <Link href='/blog' className='gap-2'>
                    <BookOpen className='w-4 h-4' />
                    Đọc Blog
                    <ArrowRight className='w-4 h-4' />
                  </Link>
                </Button>
                <Button variant='outline' size='lg' asChild className='w-full sm:w-auto'>
                  <Link href='/portfolio' className='gap-2'>
                    <Code className='w-4 h-4' />
                    Xem Portfolio
                  </Link>
                </Button>
              </div>
            </div>

            <div className='relative order-first lg:order-last'>
              <div className='relative w-full max-w-md mx-auto aspect-[4/3] lg:aspect-auto lg:h-80'>
                <Image
                  src='https://images.unsplash.com/photo-1752784365239-773786d7848e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Developer workspace'
                  fill
                  className='rounded-2xl object-cover shadow-2xl'
                />
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30'>
        <div className='max-w-6xl mx-auto'>
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Main Sections */}
      <section className='py-10 sm:py-14 md:py-20 px-3 sm:px-6 lg:px-10 xl:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
            {/* Blog Section */}
            <Card className='flex flex-col justify-between'>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                    <BookOpen className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <div>
                    <CardTitle className='text-base sm:text-lg md:text-xl'>Blog</CardTitle>
                    <CardDescription className='text-sm sm:text-base'>Kiến thức & Hướng dẫn</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                  Chia sẻ kinh nghiệm, tips & tricks, và những bài hướng dẫn chi tiết về web development.
                </p>
                <div className='flex items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap'>
                  <div className='flex items-center gap-1'>
                    <FileText className='w-4 h-4' />
                    15+ bài viết
                  </div>
                  <div className='flex items-center gap-1'>
                    <Users className='w-4 h-4' />0 lượt xem
                  </div>
                </div>
                <Button asChild className='w-full text-sm sm:text-base'>
                  <Link href='/blog'>
                    Khám phá Blog
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Section */}
            <Card className='flex flex-col justify-between'>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center'>
                    <Code className='w-5 h-5 text-green-600 dark:text-green-400' />
                  </div>
                  <div>
                    <CardTitle className='text-base sm:text-lg md:text-xl'>Portfolio</CardTitle>
                    <CardDescription className='text-sm sm:text-base'>Dự án & Kinh nghiệm</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                  Showcase các dự án đã thực hiện, kỹ năng và kinh nghiệm làm việc trong lĩnh vực web development.
                </p>
                <div className='flex items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap'>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4' />
                    3+ dự án
                  </div>
                  <div className='flex items-center gap-1'>
                    <Zap className='w-4 h-4' />1 năm kinh nghiệm
                  </div>
                </div>
                <Button asChild className='w-full text-sm sm:text-base'>
                  <Link href='/portfolio'>
                    Xem Portfolio
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tools Section */}
            <Card className='relative overflow-hidden flex flex-col justify-between sm:col-span-2 lg:col-span-1'>
              <div className='absolute top-4 right-4'>
                <Badge variant='secondary' className='text-xs sm:text-sm'>
                  Sắp ra mắt
                </Badge>
              </div>
              <CardHeader>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center'>
                    <Wrench className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                  </div>
                  <div>
                    <CardTitle className='text-base sm:text-lg md:text-xl'>Tools</CardTitle>
                    <CardDescription className='text-sm sm:text-base'>Tiện ích hữu ích</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                  Các công cụ nhỏ giúp cải thiện hiệu suất làm việc cho developers. Đang trong quá trình phát triển.
                </p>
                <div className='flex items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap'>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4' />0 tools
                  </div>
                  <div className='flex items-center gap-1'>
                    <Zap className='w-4 h-4' />0 người dùng
                  </div>
                </div>
                <Button disabled className='w-full text-sm sm:text-base'>
                  <Loader />
                  Đang phát triển...
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8'>
            <div>
              <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Bài viết mới nhất</h2>
              <p className='text-sm sm:text-base text-muted-foreground'>Những bài viết gần đây từ blog</p>
            </div>
            <Button variant='outline' asChild className='w-full sm:w-auto'>
              <Link href='/blog'>
                Xem tất cả
                <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>

          <div>
            <Carousel
              opts={{
                align: 'start',
                loop: false
              }}
              className='w-full'
            >
              <CarouselContent className='-ml-2 sm:-ml-3 md:-ml-4'>
                {recentPosts.map((relatedPost) => (
                  <CarouselItem
                    key={relatedPost.id}
                    className='pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                  >
                    <Card className='group hover:shadow-lg hover:shadow-black/10 transition-all duration-300 py-0 gap-0 h-full transform hover:-translate-y-2 mx-1 sm:mx-2 my-2'>
                      <CardHeader className='relative bg-amber-300 aspect-video overflow-hidden rounded-t-lg p-0'>
                        <Image
                          src={relatedPost.featuredImage || '/placeholder.svg'}
                          alt={relatedPost.title}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <Badge className='absolute top-2 left-2 text-xs'>{relatedPost.category}</Badge>
                      </CardHeader>
                      <CardContent className='p-3 sm:p-4 space-y-3 flex-1'>
                        <Link href={`/blog/${relatedPost.slug}`} className='block'>
                          <h3 className='font-semibold text-sm sm:text-base line-clamp-2 group-hover:text-primary transition-colors'>
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <p className='text-xs sm:text-sm text-muted-foreground line-clamp-3'>{relatedPost.excerpt}</p>
                        <div className='flex items-center text-xs text-muted-foreground space-x-2'>
                          <Calendar className='h-3 w-3' />
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString('vi-VN')}</span>
                          <Clock className='h-3 w-3' />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='hidden sm:flex' />
              <CarouselNext className='hidden sm:flex' />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12'>
            <div>
              <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Dự án nổi bật</h2>
              <p className='text-sm sm:text-base text-muted-foreground'>Một số dự án tiêu biểu từ portfolio</p>
            </div>
            <Button variant='outline' asChild className='w-full sm:w-auto'>
              <Link href='/portfolio'>
                Xem portfolio
                <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className='overflow-hidden py-0 group hover:shadow-lg gap-0 transition-all duration-300 transform hover:-translate-y-2'
              >
                <div className='relative h-40 sm:h-48 overflow-hidden'>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <CardHeader className='p-4 sm:p-6'>
                  <CardTitle className='text-base sm:text-lg'>{project.title}</CardTitle>
                  <CardDescription className='text-xs sm:text-sm'>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className='px-6 py-4 sm:px-6 sm:py-2 pt-0'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex justify-end gap-2 pb-2'>
                    <Button variant='outline' size='sm' className='gap-2 w-1/2 bg-transparent text-xs sm:text-sm'>
                      <FaGithub className='w-3 h-3 sm:w-4 sm:h-4' />
                      Code
                    </Button>
                    <Button size='sm' className='gap-2 w-1/2 text-xs sm:text-sm'>
                      <ExternalLink className='w-3 h-3 sm:w-4 sm:h-4' />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Cùng kết nối và học hỏi</h2>
          <p className='text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8'>
            Theo dõi blog để không bỏ lỡ những bài viết mới nhất về web development
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
            <Button size='lg' asChild className='w-full sm:w-auto'>
              <Link href='/blog'>
                Đọc Blog ngay
                <BookOpen className='w-4 h-4 ml-2' />
              </Link>
            </Button>
            <Button variant='outline' size='lg' className='w-full sm:w-auto'>
              <Mail className='w-4 h-4 mr-2' />
              Đăng ký nhận thông báo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
