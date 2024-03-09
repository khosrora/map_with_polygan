'use client';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    router.push('/get_all')
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen" dir='rtl'>
      <h1 className='text-xl mb-4'>سامانه مدیریت پهپادهای کشاورزی سیرنگ</h1>
      <p> در حال دریافت اطلاعات ...  </p>
    </div>
  );
}
