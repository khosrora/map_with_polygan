'use client';
import React from 'react'
import AddDroneModal from './AddDroneModal';
import { useRouter } from 'next/navigation'

let colors = [
  {
    id: 1,
    text: 'منطقه پرواز ممنوع',
    color: '#EE4266',
    style: 'bg-red-900',
    color_text: 'ممنوع'
  },
  {
    id: 2,
    text: 'منطقه پرواز خطرناک',
    color: '#FBA834',
    style: 'bg-orange-400',
    color_text: 'خطرناک'
  },
  {
    id: 3,
    text: 'منطقه پرواز با احتیاط',
    color: '#FFF67E',
    style: 'bg-yellow-300',
    color_text: 'احتیاط'
  },
  {
    id: 4,
    text: 'منطقه پرواز با اخذ مجوز',
    color: '#1D24CA',
    style: 'bg-blue-600',
    color_text: 'اخذ مجوز'
  },
]

function IndexSideBar() {

  const router = useRouter();

  return (
    <div className='w-full h-full bg-white p-4' dir='rtl'>
      <p>راهنمای اشکال : </p>
      <div className="my-4 space-y-4">
        {
          colors.map(i =>
            <div key={i.id} className="flex justify-start items-center gap-x-4 cursor-pointer bg-slate-100 p-2 rounded-md">
              <div className={`${i.style} p-2 rounded-full`}></div>
              <p>{i.text}</p>
            </div>
          )
        }
        <button className="btn w-full btn-neutral" onClick={() => document.getElementById('my_modal_1').showModal()}>ثبت پهباد</button>
        <button className="btn w-full btn-success text-white" onClick={() => router.push('/map')}>ایجاد نقاط</button>
      </div>
      <AddDroneModal />
    </div>
  )
}

export default IndexSideBar