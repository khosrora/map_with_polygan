'use client'
import React from 'react'
import { Toaster } from 'sonner';

function ProviderContext({ children }) {
    return (
        <>
            <Toaster richColors closeButton dir='rtl' position='bottom-center' style={{
                fontFamily: 'var(--font-estedad)'
            }}

            />
            {children}
        </>
    )
}

export default ProviderContext