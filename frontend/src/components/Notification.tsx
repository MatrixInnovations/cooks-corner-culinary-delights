import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Notification = () => {
    return (
        <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm
        md:text-base cursor-pointer'>
            Free delivery for all orders over $100. Order your meal now.
        </div>
    )
}

export default Notification