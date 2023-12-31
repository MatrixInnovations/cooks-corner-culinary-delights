
import React, { Component } from "react";
import Image from "next/image";
import CountDown from "./CountDown";

class Offer extends Component {
    render() {
        return (
            <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
                {/* TEXT CONTAINER */}
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
                    <h1 className="text-white text-5xl font-bold xl:text-6xl">
                        Grilled & Roasted Chicken
                    </h1>
                    <p className="text-white xl:text-xl">
                        A delicious dish featuring tender and succulent chicken, expertly
                        grilled to perfection, and served with a medley of vibrant seasonal
                        vegetables.
                    </p>
                    <CountDown />
                    <button className="bg-red-500 text-white rounded-md py-3 px-6">
                        Order Now
                    </button>
                </div>
                {/* IMAGE CONTAINER */}
                <div className="flex-1 w-full relative md:h-full">
                    <Image src="/offerProduct.jpg" alt="" fill className="object-contain" />
                </div>
            </div>
        );
    }
}

export default Offer;
