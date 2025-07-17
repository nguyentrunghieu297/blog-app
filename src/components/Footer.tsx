import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full border-t bg-background p-5 '>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground'>
        {/* Social Media Links (Optional) */}
        <div className='flex items-center gap-4'>
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

        {/* Copyright */}
        <p className='text-center md:text-left'>
          &copy; {currentYear} MySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
