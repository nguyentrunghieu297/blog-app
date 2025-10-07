'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Download, Code, Palette, Smartphone } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import html_03 from '@/assets/images/html_03.png'
import html_04 from '@/assets/images/html_04.png'
import html_08 from '@/assets/images/html_08.png'
import avatar from '@/assets/images/avatar2.jpg'
import ProjectCard from '@/components/portfolio-component/project-card'

type Project = {
  title: string
  description: string
  tech: string[]
  image: string | StaticImageData
  github: string
  demo: string
}

export default function Portfolio() {
  const skills = [
    {
      name: 'HTML5',
      icon: '/images/logos/icon-html5.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    { name: 'CSS', icon: '/images/logos/icon-css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {
      name: 'Javascript',
      icon: '/images/logos/icon-javascript.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { name: 'Typescript', icon: '/images/logos/icon-typescript.svg', link: 'https://www.typescriptlang.org/' },
    { name: 'React', icon: '/images/logos/icon-react.svg', link: 'https://react.dev/' },
    { name: 'Redux', icon: '/images/logos/icon-redux.svg', link: 'https://redux.js.org/' },
    { name: 'Next.js', icon: '/images/logos/icon-nextjs.svg', link: 'https://nextjs.org/' },
    { name: 'Sass/Scss', icon: '/images/logos/icon-sass.svg', link: 'https://sass-lang.com/' },
    { name: 'Bootstrap', icon: '/images/logos/icon-bootstrap.svg', link: 'https://getbootstrap.com/' },
    { name: 'Tailwindcss', icon: '/images/logos/icon-tailwindcss.svg', link: 'https://tailwindcss.com/' },
    { name: 'Ant Design', icon: '/images/logos/icon-antdesign.svg', link: 'https://ant.design/' },
    { name: 'Node.js', icon: '/images/logos/icon-nodejs.svg', link: 'https://nodejs.org/' },
    { name: 'Express.js', icon: '/images/logos/icon-express.svg', link: 'https://expressjs.com/' },
    { name: 'MongoDB', icon: '/images/logos/icon-mongodb.svg', link: 'https://www.mongodb.com/' },
    { name: 'Postman', icon: '/images/logos/icon-postman.svg', link: 'https://www.postman.com/' },
    { name: 'Git', icon: '/images/logos/icon-git.svg', link: 'https://git-scm.com/' },
    { name: 'GitHub', icon: '/images/logos/icon-github.svg', link: 'https://github.com/' },
    { name: 'VS Code', icon: '/images/logos/icon-vscode.svg', link: 'https://code.visualstudio.com/' },
    { name: 'Figma', icon: '/images/logos/icon-figma.svg', link: 'https://www.figma.com/' },
    { name: 'Jira', icon: '/images/logos/icon-jira.svg', link: 'https://www.atlassian.com/software/jira' },
    { name: 'Trello', icon: '/images/logos/icon-trello.svg', link: 'https://trello.com/' }
  ]

  const projects = [
    {
      title: 'ShineSmile - Nha khoa online',
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
      ],
      technologies: ['React', 'Typescript', 'TailwindCSS', 'Figma', 'Tanstack query'],
      link: 'https://www.fpt-software.com/',
      logo: '/images/fpt-sw.png'
    }
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background sm:bg-accent to-secondary/5'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='space-y-4 sm:space-y-6 order-2 lg:order-1'>
              <div className='space-y-3 sm:space-y-4'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
                  Xin chào, tôi là <span className='text-primary block mt-2'>Nguyễn Trung Hiếu</span>
                </h1>
                <p className='text-lg sm:text-xl text-muted-foreground'>Frontend Developer | React & UI Enthusiast</p>

                <p className='text-base sm:text-lg leading-relaxed'>
                  Tôi là một lập trình viên <b>Frontend</b>, đam mê tạo ra những giao diện hiện đại, trực quan và mượt
                  mà. Với nền tảng <b>Kỹ thuật phần mềm</b> tại <b>Đại học FPT</b>, tôi tập trung phát triển các sản
                  phẩm có trải nghiệm người dùng tốt và dễ mở rộng.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4'>
                <Button size='lg' className='gap-2 w-full sm:w-auto'>
                  <a
                    href='/files/CV_NguyenTrungHieu_Intern_Frontend.pdf'
                    download
                    className='flex items-center justify-center w-full'
                  >
                    <Download className='w-4 h-4 mr-2' />
                    Tải CV
                  </a>
                </Button>

                <Button variant='outline' size='lg' className='gap-2 bg-transparent w-full sm:w-auto'>
                  <Mail className='w-4 h-4' />
                  Liên hệ
                </Button>
              </div>
            </div>

            <div className='relative order-1 lg:order-2'>
              <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto'>
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
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Về tôi</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4'>
              Tôi là một <b>Frontend Developer</b> đam mê tạo ra những trải nghiệm <b>web</b> và <b>mobile</b> mượt mà,
              hiệu quả và thân thiện với người dùng.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <Card>
              <CardHeader>
                <Code className='w-8 h-8 text-primary mb-2' />
                <CardTitle className='text-lg sm:text-xl'>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm sm:text-base'>
                  Hiểu biết cơ bản về React, Next.js, TypeScript. Ứng dụng công nghệ để xây dựng ứng dụng web hiện đại
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className='w-8 h-8 text-primary mb-2' />
                <CardTitle className='text-lg sm:text-xl'>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm sm:text-base'>
                  Phát triển ứng dụng di động đa nền tảng với React Native. Tạo trải nghiệm native mượt mà cho cả iOS và
                  Android.
                </p>
              </CardContent>
            </Card>

            <Card className='sm:col-span-2 lg:col-span-1'>
              <CardHeader>
                <Palette className='w-8 h-8 text-primary mb-2' />
                <CardTitle className='text-lg sm:text-xl'>UI/UX Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm sm:text-base'>
                  Chuyển đổi designs từ Figma thành mã nguồn. Tích hợp RESTful APIs, GraphQL và quản lý state hiệu quả.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 text-center'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Kỹ năng</h2>
            <p className='text-muted-foreground text-sm sm:text-base'>Các công nghệ và tools tôi sử dụng</p>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 place-items-center'>
            {skills.map((skill) => (
              <a
                href={skill.link}
                target='_blank'
                key={skill.name}
                className='flex flex-col items-center space-y-2 group w-full'
              >
                <div className='relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110'>
                  <Image src={skill.icon} alt={skill.name} fill className='object-contain' />
                </div>
                <span className='text-gray-400 text-xs sm:text-sm text-center'>{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Dự án nổi bật</h2>
            <p className='text-muted-foreground text-sm sm:text-base'>Một số dự án tôi đã thực hiện gần đây</p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project as Project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Kinh nghiệm làm việc</h2>
            <p className='text-muted-foreground text-sm sm:text-base'>Hành trình phát triển sự nghiệp của tôi</p>
          </div>

          <div className='space-y-6 sm:space-y-8'>
            {experiences.map((exp, index) => (
              <Card key={index} className='gap-3'>
                <CardHeader>
                  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4'>
                      <Image
                        width={80}
                        height={40}
                        src='/images/icon-fpt.png'
                        alt=''
                        className='sm:w-[100px] sm:h-[50px]'
                      />
                      <div>
                        <CardTitle className='text-lg sm:text-xl'>{exp.company}</CardTitle>
                        <CardDescription className='text-sm sm:text-base mt-2 font-light text-primary'>
                          {exp.title}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant='outline' className='text-xs sm:text-sm self-start sm:self-auto'>
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {Array.isArray(exp.description) && (
                    <ul className='list-disc list-inside mt-2 text-muted-foreground space-y-1 text-sm sm:text-base'>
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && (
                    <div className='mt-4 sm:mt-5'>
                      <div className='flex flex-wrap gap-2'>
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant='secondary' className='text-xs sm:text-sm'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>Liên hệ với tôi</h2>
          <p className='text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base px-4'>
            Sẵn sàng cho cơ hội hợp tác mới. Hãy liên hệ để thảo luận về dự án của bạn!
          </p>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
            <Card className='sm:col-span-2 md:col-span-1'>
              <CardContent className='pt-6 text-center'>
                <Mail className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2 text-base sm:text-lg'>Email</h3>
                <p className='text-muted-foreground text-xs sm:text-sm break-all px-2'>trunghieunguyen2729@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <Phone className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2 text-base sm:text-lg'>Điện thoại</h3>
                <p className='text-muted-foreground text-xs sm:text-sm'>+84 819 438 687</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <MapPin className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2 text-base sm:text-lg'>Địa chỉ</h3>
                <p className='text-muted-foreground text-xs sm:text-sm'>TP. Hồ Chí Minh, Việt Nam</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
