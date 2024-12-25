import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[800px] w-full mx-auto'>
            <div className='flex flex-col gap-2'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Swole<span className='text-blue-400'>normous</span></h1>
            </div>
            <p className='text-small md:text-small font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
