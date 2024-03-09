'use client'
import React from 'react'
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


function GuideList() {

    const router = useRouter();
    return (
        <div className="my-4 space-y-4">
            <p>راهنمای اشکال : </p>
            {
                colors.map(i =>
                    <div key={i.id} className="flex justify-start items-center gap-x-4 cursor-pointer bg-slate-100 p-2 rounded-md">
                        <div className={`${i.style} p-2 rounded-full`}></div>
                        <p>{i.text}</p>
                    </div>
                )
            }
            <button className="btn w-full btn-outline btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>ثبت پهپاد</button>
            <button className="btn w-full btn-primary text-white" onClick={() => router.push('/map')}>ایجاد نقاط</button>
        </div>
    )
}

export default GuideList