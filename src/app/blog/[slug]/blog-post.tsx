import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlogPost as PostBLog, RelatedPost } from '@/types/post';

interface BlogPostProps {
  post: PostBLog;
  relatedPosts: RelatedPost[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-[10.5rem] py-8'>
        <div className=''>
          {/* Main Content */}
          <main className='lg:col-span-3 min-h-[calc(100vh-theme(spacing.16))]'>
            <article className='space-y-8'>
              {/* Header */}
              <header className='space-y-4'>
                <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                  <Link href='/blog' className='hover:text-primary'>
                    Blog
                  </Link>
                  <ChevronRight className='h-4 w-4' />
                  <span>{post.category}</span>
                </div>

                <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>{post.title}</h1>

                <p className='text-lg text-muted-foreground leading-relaxed'>{post.excerpt}</p>

                {/* Meta Info */}
                <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
                  <div className='flex items-center space-x-2'>
                    <Avatar className='h-8 w-8'>
                      <AvatarImage
                        src={post.author.avatar || '/placeholder.svg'}
                        alt={post.author.name}
                      />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='h-4 w-4' />
                    <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Clock className='h-4 w-4' />
                    <span>{post.readTime}</span>
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
              <div className='relative aspect-video rounded-lg overflow-hidden'>
                <Image
                  src={post.featuredImage || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content với custom CSS classes */}
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Author Bio */}
              <Card className='bg-muted/50'>
                <CardContent className='p-6'>
                  <div className='flex items-start space-x-4'>
                    <Avatar className='h-16 w-16'>
                      <AvatarImage
                        src={post.author.avatar || '/placeholder.svg'}
                        alt={post.author.name}
                      />
                      <AvatarFallback className='text-lg'>
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='space-y-2'>
                      <h3 className='text-lg font-semibold'>{post.author.name}</h3>
                      <p className='text-muted-foreground'>{post.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <section className='space-y-6'>
                <h2 className='text-2xl font-bold'>Bài viết liên quan</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className='group hover:shadow-lg transition-shadow py-0 gap-0'
                    >
                      <CardHeader className='relative bg-amber-300 aspect-video overflow-hidden rounded-t-lg'>
                        <Image
                          src={relatedPost.featuredImage || '/placeholder.svg'}
                          // src={'/placeholder.svg'}
                          alt={relatedPost.title}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <Badge className='absolute top-2 left-2 text-xs'>
                          {relatedPost.category}
                        </Badge>
                      </CardHeader>
                      <CardContent className='p-4 space-y-3'>
                        <Link href={`/blog/${relatedPost.slug}`} className='block'>
                          <h3 className='font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <p className='text-sm text-muted-foreground line-clamp-2'>
                          {relatedPost.excerpt}
                        </p>
                        <div className='flex items-center text-xs text-muted-foreground space-x-2'>
                          <Calendar className='h-3 w-3' />
                          <span>
                            {new Date(relatedPost.publishedAt).toLocaleDateString('vi-VN')}
                          </span>
                          <Clock className='h-3 w-3' />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
