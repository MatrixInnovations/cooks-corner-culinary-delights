"use client"
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class Footer extends Component {
    render() {
        return (
            <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                    <Image src="/logo.jpg" alt="logo" width={40} height={30} />
                </Link>
                <p>© ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default Footer;
