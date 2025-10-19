import Image from 'next/image'
import Link from 'next/link'
import { marked } from 'marked'
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { BlogPost as PostBLog, RelatedPost } from '@/types/blog'

interface BlogPostProps {
  post: PostBLog
  relatedPosts: RelatedPost[]
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const postContent = post.content ? marked(post.content.toString()) : ''
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-42 py-6 md:py-8'>
        <div className=''>
          {/* Main Content */}
          <main className='lg:col-span-3 min-h-[calc(100vh-theme(spacing.16))]'>
            <article className='space-y-6 md:space-y-8'>
              {/* Header */}
              <header className='space-y-4'>
                <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                  <Link href='/blog' className='hover:text-primary'>
                    Biết chút cho vui
                  </Link>
                  <ChevronRight className='h-4 w-4' />
                  <span>{post.category.name}</span>
                </div>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight'>{post.title}</h1>

                <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>{post.excerpt}</p>

                {/* Meta Info */}
                <div className='flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted-foreground'>
                  <div className='flex items-center space-x-2'>
                    <Avatar className='h-8 w-8'>
                      <AvatarImage src={post.author.avatar || '/placeholder.svg'} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className='text-xs sm:text-sm'>{post.author.name}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='h-4 w-4' />
                    <span className='text-xs sm:text-sm'>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Clock className='h-4 w-4' />
                    <span className='text-xs sm:text-sm'>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className='text-xs'>
                      <Tag className='h-3 w-3 mr-1' />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Featured Image */}
              <div className='relative aspect-video md:aspect-[16/9] rounded-lg overflow-hidden'>
                <Image src={post.featuredImage || '/placeholder.svg'} alt={post.title} fill className='object-cover' />
              </div>

              {/* Content với custom CSS classes */}
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: postContent }} />

              {/* Author Bio */}
              <Card className='bg-muted/50'>
                <CardContent className='p-4 md:p-6'>
                  <div className='flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4'>
                    <Avatar className='h-12 w-12 sm:h-16 sm:w-16'>
                      <AvatarImage src={post.author.avatar || '/placeholder.svg'} alt={post.author.name} />
                      <AvatarFallback className='text-base sm:text-lg'>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className='space-y-2'>
                      <h3 className='text-base sm:text-lg font-semibold'>{post.author.name}</h3>
                      <p className='text-sm md:text-base text-muted-foreground'>{post.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <section className='space-y-4 md:space-y-6'>
                <h2 className='text-xl md:text-2xl font-bold'>Bài viết vừa xem</h2>
                <div>
                  <Carousel
                    opts={{
                      align: 'center',
                      loop: false
                    }}
                    className='w-full'
                  >
                    <CarouselContent className='-ml-2 md:-ml-4'>
                      {relatedPosts.map((relatedPost) => (
                        <CarouselItem
                          key={relatedPost.id}
                          className='pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                        >
                          <Card className='group py-0 gap-0 h-full'>
                            <CardHeader className='relative bg-amber-300 aspect-video overflow-hidden rounded-t-lg p-0'>
                              <Image
                                src={relatedPost.featuredImage || '/placeholder.svg'}
                                alt={relatedPost.title}
                                fill
                                className='object-cover group-hover:scale-105 transition-transform duration-300'
                              />
                              <Badge className='absolute top-2 left-2 text-xs'>{relatedPost.category.name}</Badge>
                            </CardHeader>
                            <CardContent className='p-4 space-y-3 flex-1'>
                              <Link href={`/blog/${relatedPost.slug}`} className='block'>
                                <h3 className='text-sm sm:text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
                                  {relatedPost.title}
                                </h3>
                              </Link>
                              <p className='text-xs sm:text-sm text-muted-foreground line-clamp-3'>
                                {relatedPost.excerpt}
                              </p>
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
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
