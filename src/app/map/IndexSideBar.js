'use client';
import { useConfig } from '@/context/IndexContext';
import React from 'react'
import { toast } from 'sonner';

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

  const { setColor } = useConfig()

  return (
    <div className='w-full h-full bg-white' dir='rtl'>
      <div className="p-4 space-y-4">
        {
          colors.map(i =>
            <div key={i.id} className="flex justify-start items-center gap-x-4 cursor-pointer" onClick={() => {
              setColor(i.color)
              toast.info(` رنگ ${i.color_text} انتخاب شد . `)
            }
            }>
              <div className={`${i.style} p-2 rounded-full`}></div>
              <p>{i.text}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default IndexSideBar