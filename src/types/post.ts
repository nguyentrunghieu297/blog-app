/* eslint-disable @typescript-eslint/no-explicit-any */

export interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string | any;
  publishedAt: string;
  readTime: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featuredImage: string | any;
  category: string;
}

export interface RecentPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readTime: string;
}
