import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full border-t bg-background p-5 '>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground'>
        {/* Social Media Links (Optional) */}
        <div className='flex items-center gap-4'>
          <Link href='#' aria-label='GitHub' className='hover:text-foreground transition-colors'>
            <FaFacebook className='h-5 w-5' />
          </Link>
          <Link href='#' aria-label='Twitter' className='hover:text-foreground transition-colors'>
            <FaGithub className='h-5 w-5' />
          </Link>
          <Link href='#' aria-label='LinkedIn' className='hover:text-foreground transition-colors'>
            <FaLinkedin className='h-5 w-5' />
          </Link>
        </div>

        {/* Copyright */}
        <p className='text-center md:text-left'>
          &copy; {currentYear} MySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
