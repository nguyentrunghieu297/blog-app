'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const navigationLinks = [
  { href: '/', label: 'Trang chủ', logo: true },
  { href: '/blog', label: 'Biết chút cho vui' },
  { href: '/forwork', label: 'Cần cho công việc' },
  { href: '/about', label: 'Tự giới thiệu' },
  { href: '/admin', label: 'Admin' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-12'>
        <div className='flex h-16 items-center justify-between'>
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-black relative group'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:flex'>
            <div className='flex items-center space-x-4'>
              <Link href={'https://www.facebook.com'}>
                <FaFacebook className='size-5 text-muted-foreground transition duration-350 hover:text-blue-500' />
              </Link>
              <Link href={'https://github.com'}>
                <FaGithub className='size-5 text-muted-foreground transition duration-350 hover:text-black' />
              </Link>
              <Link href={'https://www.linkedin.com'}>
                <FaLinkedin className='size-5 text-muted-foreground transition duration-350 hover:text-blue-800' />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col space-y-4 mt-8'>
                {navigationLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className='flex items-center py-3 px-4 text-lg font-medium rounded-lg hover:bg-accent transition-colors'
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className='pt-4 mx-4 border-t'>
                  <Button className='w-full px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
                    Đăng nhập
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
