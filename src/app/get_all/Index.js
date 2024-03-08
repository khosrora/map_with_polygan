'use client'
import React from 'react'
import { ConfigProvider } from '@/context/IndexContext';
import IndexMap from './IndexMap';
import IndexSideBar from './IndexSideBar';


function Index() {
    return (
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
    )
}

export default Index