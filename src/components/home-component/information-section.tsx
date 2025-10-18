import { BookOpen, FileText, Users, Code, Star, Zap, Wrench, ArrowRight, Loader } from 'lucide-react'

export default function InformationSection() {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
          {/* Blog Card */}
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow overflow-hidden'>
            <div className='p-4 sm:p-5 md:p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <BookOpen className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-base sm:text-lg text-gray-900 dark:text-white'>Blog</h3>
                  <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>Kiến thức & Hướng dẫn</p>
                </div>
              </div>

              <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                Chia sẻ kinh nghiệm, tips & tricks, và những bài hướng dẫn chi tiết về web development.
              </p>

              <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4'>
                <div className='flex items-center gap-1'>
                  <FileText className='w-4 h-4 flex-shrink-0' />
                  <span>15+ bài viết</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Users className='w-4 h-4 flex-shrink-0' />
                  <span>0 lượt xem</span>
                </div>
              </div>

              <button className='w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2'>
                Khám phá Blog
                <ArrowRight className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Portfolio Card */}
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow overflow-hidden'>
            <div className='p-4 sm:p-5 md:p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Code className='w-5 h-5 text-green-600 dark:text-green-400' />
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-base sm:text-lg text-gray-900 dark:text-white'>Portfolio</h3>
                  <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>Dự án & Kinh nghiệm</p>
                </div>
              </div>

              <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                Showcase các dự án đã thực hiện, kỹ năng và kinh nghiệm làm việc trong lĩnh vực web development.
              </p>

              <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4'>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4 flex-shrink-0' />
                  <span>3+ dự án</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Zap className='w-4 h-4 flex-shrink-0' />
                  <span>1 năm kinh nghiệm</span>
                </div>
              </div>

              <button className='w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2'>
                Xem Portfolio
                <ArrowRight className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Tools Card */}
          <div className='sm:col-span-2 lg:col-span-1 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative'>
            <div className='absolute top-3 right-3 sm:top-4 sm:right-4'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
                Sắp ra mắt
              </span>
            </div>

            <div className='p-4 sm:p-5 md:p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Wrench className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-base sm:text-lg text-gray-900 dark:text-white'>Tools</h3>
                  <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>Tiện ích hữu ích</p>
                </div>
              </div>

              <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                Các công cụ nhỏ giúp cải thiện hiệu suất làm việc cho developers. Đang trong quá trình phát triển.
              </p>

              <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4'>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4 flex-shrink-0' />
                  <span>0 tools</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Zap className='w-4 h-4 flex-shrink-0' />
                  <span>0 người dùng</span>
                </div>
              </div>

              <button
                disabled
                className='w-full px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2'
              >
                <Loader className='w-4 h-4 animate-spin' />
                Đang phát triển...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
