import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import QueryProvider from '@/lib/react-query/query-provider'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // tuỳ độ đậm bạn muốn dùng
  display: 'swap',
  variable: '--font-be-vietnam' // tùy chọn nếu muốn dùng với class
})

export const metadata: Metadata = {
  title: 'N.T.Hieu - Vài thứ hay ho',
  description: 'Blog cá nhân của tôi - Trên thông thiên văn, dưới tường địa lý'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={beVietnamPro.className}>
        <QueryProvider>
          <Navbar />
          <main className='p-4 max-w-[calc(100vw-5rem)] mx-auto min-h-[calc(100vh-126px)]'>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
