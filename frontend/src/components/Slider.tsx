
import React, { Component } from 'react';
import Image from 'next/image';

interface SliderProps { }

interface SliderState {
    currentSlide: number;
}

const data = [
    {
        id: 1,
        title: "Grilled Salmon",
        desc: "Salmon seasoned with house seasonings and old bay sauce.",
        image: "/slide1.jpg",
    },
    {
        id: 2,
        title: "Parmesan Garlic Mashed",
        desc: "Mashed potatoes infused with aromatic garlic and enriched with Parmesan cheese",
        image: "/slide2.jpg",
    },
    {
        id: 3,
        title: "Roasted or Grilled Chicken",
        desc: "Chicken seasoned with house seasonings and garlic sauce.",
        image: "/slide3.jpg",
    },
];

class Slider extends Component<SliderProps, SliderState> {
    private interval: NodeJS.Timeout | null = null;

    constructor(props: SliderProps) {
        super(props);

        this.state = {
            currentSlide: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                currentSlide: prevState.currentSlide === data.length - 1 ? 0 : prevState.currentSlide + 1,
            }));
        }, 4000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { currentSlide } = this.state;

        return (
            <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
                {/* TEXT CONTAINER */}
                <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                    <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                        {data[currentSlide].title}
                    </h1>
                    <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
                </div>
                {/* IMAGE CONTAINER */}
                <div className="w-full flex-1 relative">
                    <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
                </div>
            </div>
        );
    }
}

export default Slider;
