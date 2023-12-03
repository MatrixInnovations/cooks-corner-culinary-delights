import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <Image
                className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
                src="/hero2.png"
                width={1000}
                height={600}
                alt="hero_bg"
            />
            <Navbar />
        </div>
    )
}

export default Hero