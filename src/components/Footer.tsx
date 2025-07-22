import { Code } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaMap, FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pt-12 pb-8 text-md px-4 border-t bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-7 gap-8'>
          <div className='md:col-span-3'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <Code className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='font-bold text-xl'>DevBlog</span>
            </div>
            <p className='text-muted-foreground mb-4'>
              Blog cá nhân chia sẻ kiến thức linh tinh được góp nhặt từ khắp nơi trên internet. Mục
              đích là để lưu giữ và chia sẻ với mọi người.
            </p>
            <div className='flex gap-4'>
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

          <div className='md:col-span-2'>
            <h3 className='font-semibold mb-4'>Nội dung</h3>
            <div className='space-y-2 text-muted-foreground'>
              <Link href='/blog' className='block hover:text-foreground transition-colors'>
                Biết chút cho vui
              </Link>
              <Link href='/portfolio' className='block hover:text-foreground transition-colors'>
                Tự giới thiệu
              </Link>
              <Link href='/tools' className='block hover:text-foreground transition-colors'>
                Tools (Sắp ra mắt)
              </Link>
            </div>
          </div>

          <div className='md:col-span-2'>
            <h3 className='font-semibold mb-4'>Liên hệ</h3>
            <div className=' text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <IoIosMail className='size-3 text-muted-foreground' />
                <p>trunghieunguyen2729@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaPhone className='size-3 text-muted-foreground' />
                <p>+84 819 438 687</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaMap className='size-3 text-muted-foreground' />

                <p>TP. Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
          <p>&copy; {currentYear} DevBlog. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
