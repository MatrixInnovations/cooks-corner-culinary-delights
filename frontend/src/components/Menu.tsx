"use client"
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

interface MenuState {
    open: boolean;
    user: boolean; // TEMPORARY
}

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

class Menu extends Component<{}, MenuState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            open: false,
            user: false, // TEMPORARY
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            open: !prevState.open,
        }));
    };

    render() {
        const { open, user } = this.state;

        return (
            <div>
                {/* SHORTCUT */}
                <Image
                    src={open ? "/close.png" : "/open.png"}
                    alt=""
                    width={20}
                    height={20}
                    onClick={this.toggleMenu}
                    className="cursor-pointer"
                />

                {open && (
                    <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={this.toggleMenu}>
                                {item.title}
                            </Link>
                        ))}

                        {/* SHORTCUT */}
                        <Link
                            href={user ? "/orders" : "login"}
                            onClick={this.toggleMenu}
                        >
                            {user ? "Orders" : "Login"}
                        </Link>
                        <Link href="/cart" onClick={this.toggleMenu}>
                            <CartIcon />
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;
