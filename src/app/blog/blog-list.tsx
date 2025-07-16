/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: string | any;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

interface Category {
  name: string;
  slug: string;
  count: number;
}

interface MonthlyArchive {
  month: string;
  count: number;
  slug: string;
}

interface PopularTag {
  name: string;
  count: number;
}

interface BlogListProps {
  posts: BlogPost[];
  categories: Category[];
  monthlyArchive: MonthlyArchive[];
  popularTags: PopularTag[];
}

export default function BlogList({
  posts,
  categories,
  monthlyArchive,
  popularTags,
}: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter posts based on search term, category, and tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      post.category.toLowerCase() === selectedCategory.replace('-', ' ');
    const matchesTag =
      !selectedTag ||
      post.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()));

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        {/* Page Header */}
        <div className='mb-8'>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Blog</h1>
          <p className='text-lg text-muted-foreground'>
            Khám phá các bài viết về công nghệ, lịch sử, văn hóa và nhiều chủ đề thú vị khác
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Sidebar - Filters */}
          <aside className='lg:col-span-1 space-y-6 h-full lg:sticky lg:top-16'>
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                  <Search className='h-5 w-5' />
                  Tìm kiếm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                  <Input
                    placeholder='Tìm kiếm bài viết...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='pl-10'
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold flex items-center gap-2'>
                  <Filter className='h-5 w-5' />
                  Danh mục
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-md transition-colors ${
                      selectedCategory === category.slug
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant='secondary' className='text-xs'>
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Archive */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold'>Bài viết theo tháng</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                {monthlyArchive.map((archive) => (
                  <Link
                    key={archive.slug}
                    href={`/blog/archive/${archive.slug}`}
                    className='flex items-center justify-between py-1 text-sm hover:text-primary transition-colors group'
                  >
                    <span className='group-hover:translate-x-1 transition-transform'>
                      {archive.month}
                    </span>
                    <Badge variant='secondary' className='text-xs'>
                      {archive.count}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-semibold'>Tags phổ biến</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {popularTags.map((tag) => (
                    <button
                      key={tag.name}
                      onClick={() => setSelectedTag(selectedTag === tag.name ? '' : tag.name)}
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full transition-colors ${
                        selectedTag === tag.name
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      <Tag className='h-3 w-3' />
                      {tag.name}
                      <span className='ml-1 text-xs opacity-70'>({tag.count})</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - Blog Posts */}
          <main className='lg:col-span-3'>
            {/* Results Info */}
            <div className='mb-6 flex items-center justify-between'>
              <p className='text-sm text-muted-foreground'>
                Hiển thị {filteredPosts.length} bài viết
                {searchTerm && ` cho "${searchTerm}"`}
                {selectedCategory !== 'all' &&
                  ` trong danh mục "${categories.find((c) => c.slug === selectedCategory)?.name}"`}
                {selectedTag && ` với tag "${selectedTag}"`}
              </p>

              {(searchTerm || selectedCategory !== 'all' || selectedTag) && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTag('');
                  }}
                >
                  Xóa bộ lọc
                </Button>
              )}
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className='group hover:shadow-lg transition-all duration-300 overflow-hidden py-0 gap-0'
                  >
                    {/* Featured Image */}
                    <div className='relative aspect-video overflow-hidden'>
                      <Image
                        src={post.featuredImage || '/placeholder.svg'}
                        alt={post.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <Badge className='absolute top-3 left-3 text-xs'>{post.category}</Badge>
                    </div>

                    <CardContent className='p-6 space-y-4'>
                      {/* Title */}
                      <Link href={`/blog/${post.slug}`} className='block'>
                        <h2 className='text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className='flex flex-wrap gap-1'>
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant='outline' className='text-xs'>
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant='outline' className='text-xs'>
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <Separator />

                      {/* Meta Info */}
                      <div className='flex items-center justify-between text-xs text-muted-foreground'>
                        <div className='flex items-center space-x-2'>
                          <Avatar className='h-6 w-6'>
                            <AvatarImage
                              src={post.author.avatar || '/placeholder.svg'}
                              alt={post.author.name}
                            />
                            <AvatarFallback className='text-xs'>
                              {post.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author.name}</span>
                        </div>

                        <div className='flex items-center space-x-3'>
                          <div className='flex items-center space-x-1'>
                            <Calendar className='h-3 w-3' />
                            <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                          </div>
                          <div className='flex items-center space-x-1'>
                            <Clock className='h-3 w-3' />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <div className='text-muted-foreground mb-4'>
                  <Search className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <h3 className='text-lg font-semibold mb-2'>Không tìm thấy bài viết</h3>
                  <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc của bạn</p>
                </div>
                <Button
                  variant='outline'
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTag('');
                  }}
                >
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            )}

            {/* Pagination (Optional) */}
            {filteredPosts.length > 0 && (
              <div className='mt-12 flex justify-center'>
                <div className='flex items-center space-x-2'>
                  <Button variant='outline' size='sm' disabled>
                    Trước
                  </Button>
                  <Button variant='default' size='sm'>
                    1
                  </Button>
                  <Button variant='outline' size='sm'>
                    2
                  </Button>
                  <Button variant='outline' size='sm'>
                    3
                  </Button>
                  <Button variant='outline' size='sm'>
                    Sau
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
