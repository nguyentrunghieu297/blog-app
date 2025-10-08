'use client'

import Link from 'next/link'
import { Code } from 'lucide-react'
import { FaFacebook, FaGithub, FaLinkedin, FaMap, FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 text-sm sm:text-base px-12 sm:px-12 border-t bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6 sm:gap-8'>
          {/* Brand Section */}
          <div className='sm:col-span-2 md:col-span-3'>
            <div className='flex items-center space-x-2 mb-3 sm:mb-4'>
              <div className='w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center'>
                <Code className='w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground' />
              </div>
              <span className='font-bold text-lg sm:text-xl'>Vài thứ hay ho</span>
            </div>
            <p className='text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed'>
              Blog cá nhân chia sẻ kiến thức linh tinh được góp nhặt từ khắp nơi trên internet. Mục đích là để lưu giữ
              và chia sẻ với mọi người.
            </p>
            <div className='flex gap-3 sm:gap-4'>
              <Link href={'https://www.facebook.com'} aria-label='Facebook'>
                <FaFacebook className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition duration-300 hover:text-blue-500' />
              </Link>
              <Link href={'https://github.com'} aria-label='GitHub'>
                <FaGithub className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition duration-300 hover:text-black' />
              </Link>
              <Link href={'https://www.linkedin.com'} aria-label='LinkedIn'>
                <FaLinkedin className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition duration-300 hover:text-blue-800' />
              </Link>
            </div>
          </div>

          {/* Content Section */}
          <div className='md:col-span-2'>
            <h3 className='font-semibold mb-3 sm:mb-4 text-base sm:text-lg'>Nội dung</h3>
            <div className='space-y-2 sm:space-y-2.5 text-muted-foreground text-sm sm:text-base'>
              <Link
                href='/blog'
                className='block hover:text-foreground transition-colors hover:translate-x-1 duration-200'
              >
                Biết chút cho vui
              </Link>
              <Link
                href='/portfolio'
                className='block hover:text-foreground transition-colors hover:translate-x-1 duration-200'
              >
                Tự giới thiệu
              </Link>
              <Link
                href='/tools'
                className='block hover:text-foreground transition-colors hover:translate-x-1 duration-200'
              >
                Tools (Sắp ra mắt)
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className='md:col-span-2'>
            <h3 className='font-semibold mb-3 sm:mb-4 text-base sm:text-lg'>Liên hệ</h3>
            <div className='space-y-2 sm:space-y-2.5 text-muted-foreground text-sm sm:text-base'>
              <div className='flex items-start gap-2 sm:gap-3'>
                <IoIosMail className='w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 mt-0.5' />
                <p className='break-all'>trunghieunguyen2729@gmail.com</p>
              </div>
              <div className='flex items-center gap-2 sm:gap-3'>
                <FaPhone className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0' />
                <p>(+84) 819 438 687</p>
              </div>
              <div className='flex items-start gap-2 sm:gap-3'>
                <FaMap className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0 mt-0.5' />
                <p>TP. Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground text-xs sm:text-sm'>
          <p>&copy; {currentYear} Vài thứ hay ho. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
