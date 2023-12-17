"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: "Grilled Salmon",
        desc: "Salmon seasoned with house seasonings and old bay sauce.",
        image: "/slide1.jpg"
    },
    {
        id: 2,
        title: "Parmesan Garlic Mashed",
        desc: "Mashed potatoes infused with aromatic garlic and enriched with Parmesan cheese",
        image: "/slide2.jpg"
    },
    {
        id: 3,
        title: "Roasted or Grilled Chicken",
        desc: "Chicken seasoned with house seasonings and garlic sauce.",
        image: "/slide3.jpg"
    },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1)

    // {/* This function to make the slide change on it's own */ }
    // useEffect(() => {
    //     const interval = setInterval(
    //         () => setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1),
    //         2000)
    //     return () => clearInterval(interval)
    // }, [])
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>

            {/* TEXT CONTAINER */}
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                    {data[currentSlide].title} <br />
                </h1>
                <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className='w-full flex-1 relative lg:h-full'>
                <Image src={data[currentSlide].image} alt="" fill className='object-cover' />
            </div>
        </div>
    )
}

export default Slider