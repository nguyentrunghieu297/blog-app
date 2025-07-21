'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, ExternalLink, Download, Code, Server, Palette } from 'lucide-react';
import Image from 'next/image';
import blog_image from '@/public/images/test-img.jpg';
import { FaGithub } from 'react-icons/fa';

export default function Portfolio() {
  const skills = {
    Frontend: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'SASS/SCSS',
    ],
    Backend: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'FastAPI',
      'PHP',
      'Laravel',
      'REST API',
      'GraphQL',
    ],
    Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Firebase'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Photoshop', 'Linux'],
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Nền tảng thương mại điện tử hoàn chỉnh với thanh toán trực tuyến, quản lý kho hàng và dashboard admin.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      image: blog_image,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop và notifications.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      image: blog_image,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Blog CMS',
      description:
        'Hệ thống quản lý nội dung blog với editor WYSIWYG, SEO optimization và analytics dashboard.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'TinyMCE', 'Chart.js'],
      image: blog_image,
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company ABC',
      period: '2022 - Hiện tại',
      description:
        'Phát triển và duy trì các ứng dụng web quy mô lớn, leading team 5 developers, tối ưu performance và UX.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      period: '2020 - 2022',
      description:
        'Xây dựng MVP từ đầu, phát triển API backend, thiết kế database và implement frontend responsive.',
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency DEF',
      period: '2019 - 2020',
      description:
        'Phát triển website cho khách hàng, maintenance và bug fixes, học hỏi best practices trong team.',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='text-4xl lg:text-6xl font-bold tracking-tight'>
                  Xin chào, tôi là <span className='text-primary'>Nguyễn Văn A</span>
                </h1>
                <p className='text-xl text-muted-foreground'>Full Stack Web Developer</p>
                <p className='text-lg leading-relaxed max-w-lg'>
                  Với 4+ năm kinh nghiệm phát triển web, tôi chuyên tạo ra những ứng dụng web hiện
                  đại, responsive và user-friendly. Đam mê công nghệ mới và luôn học hỏi không
                  ngừng.
                </p>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Button size='lg' className='gap-2'>
                  <Download className='w-4 h-4' />
                  Tải CV
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
                  src='/placeholder.svg?height=320&width=320'
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
              Tôi là một lập trình viên web đam mê tạo ra những sản phẩm có ý nghĩa và mang lại giá
              trị cho người dùng.
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
                  Chuyên về React, Next.js, Vue.js và các công nghệ frontend hiện đại. Tạo ra UI/UX
                  đẹp mắt và responsive.
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
                  Phát triển API robust với Node.js, Python, PHP. Thiết kế database và tối ưu
                  performance.
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
                  Hiểu biết về design principles, user experience và có thể làm việc với Figma,
                  Photoshop.
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

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
              <Card key={index} className='overflow-hidden py-0'>
                <div className='relative h-48'>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover'
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
                    <Button variant='outline' size='sm' className='gap-2 bg-transparent'>
                      <FaGithub className='w-4 h-4' />
                      Code
                    </Button>
                    <Button size='sm' className='gap-2'>
                      <ExternalLink className='w-4 h-4' />
                      Demo
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
              <Card key={index}>
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className='text-base font-medium text-primary'>
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant='outline'>{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-4'>Liên hệ với tôi</h2>
          <p className='text-muted-foreground mb-12'>
            Sẵn sàng cho cơ hội hợp tác mới. Hãy liên hệ để thảo luận về dự án của bạn!
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <Card>
              <CardContent className='pt-6 text-center'>
                <Mail className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Email</h3>
                <p className='text-muted-foreground'>your.email@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <Phone className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Điện thoại</h3>
                <p className='text-muted-foreground'>+84 123 456 789</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6 text-center'>
                <MapPin className='w-8 h-8 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Địa chỉ</h3>
                <p className='text-muted-foreground'>TP. Hồ Chí Minh, Việt Nam</p>
              </CardContent>
            </Card>
          </div>

          <Button size='lg' className='gap-2'>
            <Mail className='w-4 h-4' />
            Gửi tin nhắn
          </Button>
        </div>
      </section>
    </div>
  );
}
