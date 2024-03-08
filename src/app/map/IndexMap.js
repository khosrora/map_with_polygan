"use client"
import React from 'react'
// import MapCm from './MapCm'
import dynamic from 'next/dynamic'


const MapCm = dynamic(() => import('./MapCm'), {
    ssr: false
})

function IndexMap() {
    return (
        <div className="h-[100vh]">
            <MapCm />
        </div>
    )
}

export default IndexMap