import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['https://unsplash.com/', 'images.unsplash.com'], // Thêm domain hình ảnh ở đây
  },
};

export default nextConfig;
