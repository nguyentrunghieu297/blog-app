import FuzzyText from '@/components/FuzzyText';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center px-4'>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        <h1 className='text-5xl font-bold text-gray-800'>404</h1>
        <p className='text-xl mt-4 text-gray-600'>Trang bạn đang tìm không tồn tại.</p>
      </FuzzyText>
      <Link
        href='/'
        className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
