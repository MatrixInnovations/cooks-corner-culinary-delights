import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className="container pt-6 ">
            <div className="flex justify-between items-center">
                <Image src="/logo.jpg" width={50} height={50} alt="logo" />
                <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Booking</li>
                    <li>Contact</li>
                    <button className="bg-accent text-white px-6 py-2 rounded-3xl">
                        SignUp
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar