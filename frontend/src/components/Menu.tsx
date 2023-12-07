import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

const Menu = () => {
    return (
        <div className='container pt-40'>
            <h2 className='text-6xl font-bold'>Our <span className='text-accent pt-2'>Menu</span></h2>

            <p className='max-w-[550px] pt-10 text-gray-700 font-semibold'>
                Explore a culinary journey with Cooks Corner, featuring signature starters like Roasted or Grilled Chicken, Roasted or Grilled Salmon, mouthwatering main courses such as Seared Ribeye, pasta specialties including lobster ravioli and penne alla vodka, Sides like RiGarlic Parmesan Mash and Vegies like Roasted Assorted Vegetables.
            </p>

            <Dash />

            <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
                <div className='w-fit mx-auto self-end'>
                    <Image
                        className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
                        src="/food1.jpg"
                        width={300}
                        height={600}
                        alt="grid image"
                    />
                    <div className='space-y-4'>
                        <Dash />
                        <h2 className='font-medium text-xl'></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu