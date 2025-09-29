'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, ExternalLink, Download, Code, Server, Palette } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import html_03 from '@/assets/images/html_03.png'
import html_04 from '@/assets/images/html_04.png'
import html_08 from '@/assets/images/html_08.png'
import avatar from '@/assets/images/avatar2.jpg'

export default function Portfolio() {
  const skills = {
    Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS/SCSS'],
    'Tools & Others': ['Git', 'Github', 'Vercel', 'Figma', 'Photoshop'],
    'Kĩ năng mềm': ['Tự học', 'Giải quyết vấn đề', 'Làm việc nhóm', 'Quản lý thời gian', 'Giao tiếp hiệu quả']
  }

  const projects = [
    {
      title: 'ShineSmile - Nha khoa trực tuyến',
      description:
        'Giao diện trang web cho phòng khám nha khoa với thông tin dịch vụ, đặt lịch hẹn và phản hồi từ khách hàng.',
      tech: ['HTML5', 'CSS3', 'Sass'],
      image: html_03,
      github: 'https://github.com/nguyentrunghieu297/htmlcsspro-project-03',
      demo: 'https://nguyentrunghieu297.github.io/htmlcsspro-project-03/'
    },
    {
      title: 'Lucy - Trạm xá thú cưng',
      description:
        'Giao diện trang web cho trạm xá thú cưng với thông tin dịch vụ, đặt lịch hẹn và phản hồi từ khách hàng.',
      tech: ['HTML5', 'CSS3', 'Sass'],
      image: html_04,
      github: 'https://github.com/nguyentrunghieu297/htmlcsspro-project-04',
      demo: 'https://nguyentrunghieu297.github.io/htmlcsspro-project-04/'
    },
    {
      title: 'Grocerymart - Tạp hóa Online',
      description:
        'Giao diện 1 trang tạp hóa trực tuyến với danh sách sản phẩm, giỏ hàng, thanh toán và quản lý đơn hàng.',
      tech: ['HTML5', 'CSS3', 'Sass'],
      image: html_08,
      github: 'https://github.com/nguyentrunghieu297/htmlcsspro-project-08',
      demo: 'https://nguyentrunghieu297.github.io/htmlcsspro-project-08/'
    }
  ]

  const experiences = [
    {
      title: 'Frontend Developer - Internship',
      company: 'FPT Software Academy',
      period: '01/2024 - 05/2024',
      description: [
        'Tham gia phát triển giao diện người dùng cho các dự án web nội bộ.',
        'Tham gia phát triển giao diện người dùng cho các dự án web tốt nghiệp.',
        'Học hỏi và áp dụng các công nghệ mới như React, Next.js và Tailwind CSS.'
      ]
    }
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='text-4xl lg:text-6xl font-bold tracking-tight'>
                  Xin chào, tôi là <span className='text-primary'>Nguyễn Trung Hiếu</span>
                </h1>
                <p className='text-xl text-muted-foreground'>Frontend Web Developer</p>
                <p className='text-lg leading-relaxed max-w-lg'>
                  Là sinh viên tốt nghiệp chuyên ngành kĩ thuật phần mềm tại Đại học FPT HCM. Tôi được đào tạo để có thể
                  tạo ra những ứng dụng website hiện đại, tương thích trên nhiều thiết bị và có giao diện thân thiện với
                  người dùng.
                </p>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Button size='lg' className='gap-2'>
                  <a href='/files/CV_NguyenTrungHieu_Intern_Frontend.pdf' download className='flex items-center'>
                    <Download className='w-4 h-4' />
                    Tải CV
                  </a>
                </Button>

                <Button variant='outline' size='lg' className='gap-2 bg-transparent'>
                  <Mail className='w-4 h-4' />
                  Liên hệ
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='relative w-80 h-80 mx-auto'>
                <Image
                  src={avatar || ''}
                  alt='Profile'
                  fill
                  className='rounded-full object-cover border-4 border-background shadow-2xl'
                />
                <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Về tôi</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Tôi là một lập trình viên web đam mê tạo ra những sản phẩm có ý nghĩa và mang lại giá trị cho người dùng.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <Code className='w-8 h-8 text-primary mb-2' />
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Chuyên về React, Next.js, Vue.js và các công nghệ frontend hiện đại. Tạo ra UI/UX đẹp mắt và
                  responsive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className='w-8 h-8 text-primary mb-2' />
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Phát triển API robust với Node.js, Python, PHP. Thiết kế database và tối ưu performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className='w-8 h-8 text-primary mb-2' />
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Hiểu biết về design principles, user experience và có thể làm việc với Figma, Photoshop.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 bg-muted/30'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Kỹ năng</h2>
            <p className='text-muted-foreground'>Các công nghệ và tools tôi sử dụng hàng ngày</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className='text-lg'>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {skillList.map((skill) => (
                      <Badge key={skill} variant='secondary'>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Dự án nổi bật</h2>
            <p className='text-muted-foreground'>Một số dự án tôi đã thực hiện gần đây</p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <Card key={index} className='overflow-hidden py-0 group hover:shadow-lg transition-shadow'>
                <div className='relative h-48'>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-2 pb-6'>
                    <Button variant='outline' size='sm' className='gap-2 w-1/2 bg-transparent'>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 w-1/2'
                      >
                        <FaGithub className='w-4 h-4' />
                        Code
                      </a>
                    </Button>
                    <Button size='sm' className='gap-2 w-1/2'>
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 w-1/2'
                      >
                        <ExternalLink className='w-4 h-4' />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='py-20 px-4 bg-muted/30'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Kinh nghiệm làm việc</h2>
            <p className='text-muted-foreground'>Hành trình phát triển sự nghiệp của tôi</p>
          </div>

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <Card key={index} className='gap-3'>
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className='text-base mt-2 font-medium text-primary'>
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant='outline' className='text-sm'>
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* <p className='text-muted-foreground'>{exp.description}</p> */}
                  {Array.isArray(exp.description) && (
                    <ul className='list-disc list-inside mt-2 text-muted-foreground'>
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4'>Liên hệ với tôi</h2>
          <p className='text-muted-foreground mb-12'>
            Sẵn sàng cho cơ hội hợp tác mới. Hãy liên hệ để thảo luận về dự án của bạn!
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <Card>
              <CardContent className='pt-6 text-center'>
                <Mail className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Email</h3>
                <p className='text-muted-foreground text-sm'>trunghieunguyen2729@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <Phone className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Điện thoại</h3>
                <p className='text-muted-foreground text-sm'>+84 819 438 687</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <MapPin className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Địa chỉ</h3>
                <p className='text-muted-foreground text-sm'>TP. Hồ Chí Minh, Việt Nam</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
