'use client';
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import menu from '/assets/icons/nav-bar/hamburger-menu.png';
import logo from '/assets/icons/nav-bar/woxro-logo.png'
import { useState } from "react";
import HandBurgerMenu from "./handburgermenu";


const NavBar = () => {

    //handburger menu click
    const [isOpen, setIsOpen] = useState(false)


    //change nav color on scroll
    const [color, setColor] = useState(false);

    const colorChangeHandler = () => {
        if (window.scrollY > 0) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', colorChangeHandler);


    return (
        <>
            <nav className={`flex lg:justify-between lg:px-[100px] justify-between py-6 px-10 items-center fixed lg:py-[36px]
         w-full z-20 font-medium font-poppins text-white ${color ? `bg-black` : ''}`}>
                <Image src={logo} className="w-16 h-4  lg:w-[165px] lg:h-[32px]"
                    alt="logo" />
                <div className="flex gap-[179px] justify-center items-center">
                    <ul className="lg:flex gap-9 hidden">
                        {NAV_LINKS.map((nav) => (
                            <li key={nav.title} >
                                <Link href={nav.href}
                                    className="">{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Image src={menu} className="w-7 h-4  lg:w-[38px] lg:h-[24px]" onClick={() => setIsOpen(true)} />
                </div>
            </nav>
            {isOpen && <HandBurgerMenu setIsOpen={setIsOpen} />}
        </>
    )
}

export default NavBar