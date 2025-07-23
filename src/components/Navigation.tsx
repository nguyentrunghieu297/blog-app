'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, BookOpen, Wrench } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Trang chủ', href: '/', icon: null },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Portfolio', href: '/portfolio', icon: Code },
    { name: 'Tools', href: '/tools', icon: Wrench, badge: 'Sắp ra mắt' },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
              <Code className='w-5 h-5 text-primary-foreground' />
            </div>
            <span className='font-bold text-xl'>DevBlog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors relative'
                >
                  {Icon && <Icon className='w-4 h-4' />}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full'>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors relative py-2'
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && <Icon className='w-4 h-4' />}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className='bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full ml-auto'>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
