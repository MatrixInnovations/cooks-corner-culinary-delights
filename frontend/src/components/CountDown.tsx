// WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date("2023-07-25")

// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }

// export default CountDown


// WITHOUT A LIBRARY


import React, { Component } from "react";

interface CountDownProps { }

interface CountDownState {
    timeRemaining: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}

class CountDown extends Component<CountDownProps, CountDownState> {
    private intervalId: NodeJS.Timeout | null = null;

    constructor(props: CountDownProps) {
        super(props);

        this.state = {
            timeRemaining: this.calculateTimeRemaining(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.updateTimeRemaining();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    calculateTimeRemaining() {
        const targetDate = new Date("12/25/2023");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)) as number,
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24) as number,
            minutes: Math.floor((difference / (1000 * 60)) % 60) as number,
            seconds: Math.floor((difference / 1000) % 60) as number,
        };
    }

    updateTimeRemaining() {
        const updatedTimeRemaining = this.calculateTimeRemaining();

        if (updatedTimeRemaining.days <= 0 && updatedTimeRemaining.hours <= 0 && updatedTimeRemaining.minutes <= 0 && updatedTimeRemaining.seconds <= 0) {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        } else {
            this.setState({
                timeRemaining: updatedTimeRemaining,
            });
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state.timeRemaining;

        return (
            <span className="font-bold text-5xl text-yellow-300">
                {days}:{hours}:{minutes}:{seconds}
            </span>
        );
    }
}

export default CountDown;
