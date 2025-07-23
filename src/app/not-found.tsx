'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import {
  Home,
  BookOpen,
  Code,
  Search,
  ArrowLeft,
  Mail,
  ExternalLink,
  FileQuestion,
  Compass,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularPosts = [
    {
      title: 'Tối ưu Performance React App',
      href: '/blog/optimize-react-performance',
      category: 'React',
    },
    {
      title: 'Xây dựng API RESTful với Node.js',
      href: '/blog/nodejs-restful-api',
      category: 'Backend',
    },
    {
      title: 'CSS Grid vs Flexbox',
      href: '/blog/css-grid-vs-flexbox',
      category: 'CSS',
    },
  ];

  const quickLinks = [
    {
      title: 'Trang chủ',
      description: 'Quay về trang chủ',
      href: '/',
      icon: Home,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Blog',
      description: 'Đọc các bài viết về web development',
      href: '/blog',
      icon: BookOpen,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    },
    {
      title: 'Portfolio',
      description: 'Xem các dự án và kinh nghiệm',
      href: '/portfolio',
      icon: Code,
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search page or handle search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Main 404 Section */}
          <div className='text-center mb-16'>
            <div className='relative mb-8'>
              {/* Large 404 with decorative elements */}
              <div className='text-[12rem] md:text-[16rem] font-bold text-primary/10 leading-none select-none'>
                404
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='bg-background/80 backdrop-blur-sm rounded-2xl p-8 border'>
                  <FileQuestion className='w-16 h-16 text-primary mx-auto mb-4' />
                  <h1 className='text-3xl md:text-4xl font-bold mb-2'>Oops! Trang không tồn tại</h1>
                  <p className='text-lg text-muted-foreground'>
                    Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <Button
              onClick={() => window.history.back()}
              variant='outline'
              size='lg'
              className='gap-2 mb-8'
            >
              <ArrowLeft className='w-4 h-4' />
              Quay lại trang trước
            </Button>
          </div>

          {/* Search Section */}
          <Card className='mb-12'>
            <CardHeader className='text-center'>
              <CardTitle className='flex items-center justify-center gap-2'>
                <Search className='w-5 h-5' />
                Tìm kiếm nội dung
              </CardTitle>
              <CardDescription>
                Có thể bạn đang tìm kiếm một bài viết hoặc dự án cụ thể?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className='flex gap-2 max-w-md mx-auto'>
                <Input
                  type='text'
                  placeholder='Nhập từ khóa tìm kiếm...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='flex-1'
                />
                <Button type='submit' className='gap-2'>
                  <Search className='w-4 h-4' />
                  Tìm kiếm
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className='mb-12'>
            <h2 className='text-2xl font-bold text-center mb-8'>Hoặc khám phá các mục chính</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Card
                    key={link.href}
                    className='hover:shadow-lg transition-all duration-200 hover:-translate-y-1'
                  >
                    <CardContent className='pt-6'>
                      <Link href={link.href} className='block text-center'>
                        <div
                          className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className='w-6 h-6' />
                        </div>
                        <h3 className='font-semibold text-lg mb-2'>{link.title}</h3>
                        <p className='text-muted-foreground text-sm'>{link.description}</p>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Popular Content */}
          <Card className='mb-12'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Compass className='w-5 h-5' />
                Bài viết phổ biến
              </CardTitle>
              <CardDescription>Có thể bạn quan tâm đến những bài viết này</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {popularPosts.map((post, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors'
                  >
                    <div className='flex-1'>
                      <Link
                        href={post.href}
                        className='font-medium hover:text-primary transition-colors'
                      >
                        {post.title}
                      </Link>
                      <div className='text-sm text-muted-foreground mt-1'>
                        Danh mục: {post.category}
                      </div>
                    </div>
                    <Button variant='ghost' size='sm' asChild>
                      <Link href={post.href}>
                        <ExternalLink className='w-4 h-4' />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className='bg-muted/30'>
            <CardContent className='pt-6 text-center'>
              <Mail className='w-12 h-12 text-primary mx-auto mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Vẫn không tìm thấy?</h3>
              <p className='text-muted-foreground mb-6'>
                Nếu bạn cho rằng đây là lỗi hoặc cần hỗ trợ, đừng ngại liên hệ với tôi.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button asChild>
                  <Link href='mailto:your.email@gmail.com' className='gap-2'>
                    <Mail className='w-4 h-4' />
                    Gửi email
                  </Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='/' className='gap-2'>
                    <Home className='w-4 h-4' />
                    Về trang chủ
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <div className='mt-12 text-center'>
            <div className='inline-block p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border'>
              <h4 className='font-semibold mb-2'>💡 Bạn có biết?</h4>
              <p className='text-sm text-muted-foreground max-w-md'>
                Mã lỗi 404 có nghĩa là Not Found - trang web không thể tìm thấy tài nguyên được yêu
                cầu. Đây là một trong những mã lỗi HTTP phổ biến nhất!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
