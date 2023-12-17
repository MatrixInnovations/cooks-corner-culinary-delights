"use client"

import React, { Component, ReactNode } from 'react';

interface Option {
    title: string;
    additionalPrice: number;
}

interface PriceProps {
    price: number;
    id: number;
    options?: Option[];
}

interface PriceState {
    total: number;
    quantity: number;
    selected: number;
}

class Price extends Component<PriceProps, PriceState> {
    constructor(props: PriceProps) {
        super(props);

        this.state = {
            total: props.price,
            quantity: 1,
            selected: 0,
        };
    }

    componentDidUpdate(prevProps: PriceProps, prevState: PriceState): void {
        const { quantity, selected } = this.state;
        const { options, price } = this.props;

        if (
            quantity !== prevState.quantity ||
            selected !== prevState.selected ||
            options !== prevProps.options ||
            price !== prevProps.price
        ) {
            this.calculateTotal();
        }
    }

    calculateTotal(): void {
        const { quantity, selected } = this.state;
        const { options, price } = this.props;

        this.setState({
            total: quantity * (options ? price + options[selected].additionalPrice : price),
        });
    }

    handleQuantityChange(amount: number): void {
        this.setState((prevState) => ({
            quantity: Math.min(9, Math.max(1, prevState.quantity + amount)),
        }));
    }

    handleOptionSelect(index: number): void {
        this.setState({ selected: index });
    }

    render(): ReactNode {
        const { total, quantity, selected } = this.state;
        const { options } = this.props;

        return (
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
                {/* OPTIONS CONTAINER */}
                <div className="flex gap-4">
                    {options?.map((option, index) => (
                        <button
                            key={option.title}
                            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                            style={{
                                background: selected === index ? "rgba(245 113 113)" : "white",
                                color: selected === index ? "white" : "red",
                            }}
                            onClick={() => this.handleOptionSelect(index)}
                        >
                            {option.title}
                        </button>
                    ))}
                </div>
                {/* QUANTITY AND ADD BUTTON CONTAINER */}
                <div className="flex justify-between items-center">
                    {/* QUANTITY */}
                    <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                        <span>Quantity</span>
                        <div className="flex gap-4 items-center">
                            <button onClick={() => this.handleQuantityChange(-1)}>{"<"}</button>
                            <span>{quantity}</span>
                            <button onClick={() => this.handleQuantityChange(1)}>{" >"}</button>
                        </div>
                    </div>
                    {/* CART BUTTON */}
                    <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

export default Price;
