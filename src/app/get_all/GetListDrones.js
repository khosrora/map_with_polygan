"use client"
import React, { useState } from 'react'
import ZoneTabs from '@/components/ZoneTabs'
import { useConfig } from '@/context/IndexContext'


function GetListDrones() {

    const { listDrones } = useConfig()
    const [typeZone, setTypeZone] = useState(1)
    console.log(listDrones);

    return (
        <div>
            <ZoneTabs
                typeZone={typeZone}
                setTypeZone={setTypeZone}
            />
        </div>
    )
}

export default GetListDrones