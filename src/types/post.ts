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
  slug?: string;
  excerpt: string;
  content?: string | TrustedHTML;
  author: {
    name: string;
    avatar: string;
    bio?: string;
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

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export interface MonthlyArchive {
  month: string;
  count: number;
  slug: string;
}

export interface PopularTag {
  name: string;
  count: number;
}
