'use client'
import { ConfigProvider } from '@/context/IndexContext';
import React from 'react'
import IndexMap from './IndexMap';
import IndexSideBar from './IndexSideBar';



function page() {


    return (
        <div>
            <ConfigProvider>
                <div className="grid grid-cols-8 h-full relative">
                    <div className="col-span-6">
                        <IndexMap />
                    </div>
                    <div className="col-span-2">
                        <IndexSideBar />
                    </div>
                </div>
            </ConfigProvider>
        </div>
    )
}

export default page