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

            <div className='container h-[calc(100vh-129px)] grid items-center'>
                <div className='space-y-4 bg-[#ffffff98] w-fit p-4'>
                    <p className='uppercase font-medium'>Variety Of Options</p>
                    <h2 className='text-4xl sm:text-6xl font-bold'>Meal {" "}
                        <span className='text-accent'>Prep</span> {" "}
                        <span className='text-[blue]'>Menu</span>
                    </h2>
                    <p className='text-gray-700 text-[14px] sm:text-[16px]'>
                        Delicious Food, Aroma and Taste. <br />
                        What are you waiting for?
                    </p>

                    <button className='bg-accent text-white px-6 py-4 rounded-3xl text-[14px] sm:text-[16]'>
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero