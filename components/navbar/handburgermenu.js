'use client';
import Image from "next/image";
import logo from '/assets/icons/nav-bar/woxro-logo.png'
import { FOOTER_ICONS, HANDBURGER_LINKS } from "@/constants";
import Link from "next/link";



const HandBurgerMenu = ({ setIsOpen }) => {

    return (

        <nav className="inset-0 fixed bg-black w-full z-[999] lg:px-28 py-10 flex flex-col justify-between px-5 ">

            <div className="flex lg:justify-between text-white justify-end">
                <Image src={logo} alt="woxro-logo" className="hidden lg:block" />
                <div onClick={() => setIsOpen(false)}>❌</div>
            </div>



            <div className="lg:grid grid-cols-12 border-b pb-12">

                <div className="text-white col-span-6 lg:flex flex-col justify-end  hidden">
                    <p className="font-roboto font-thin text-[1.2rem] ">
                        DROP US A LINE
                    </p>
                    <p className=" font-roboto  font-thin text-4xl mt-3">
                        hello@woxro.com
                    </p>
                    <p className="mt-3 font-roboto font-thin text-[1.2rem]  ">
                        Combining intentional design with an original application of <br />
                        progressive technologies to create sustainable innovation.
                    </p>
                </div>

                <div className="col-span-6 lg:flex lg:justify-end">
                    <ul className="text-white">
                        {HANDBURGER_LINKS.map((nav) => (
                            <li className="mt-3">
                                <Link key={nav.title} href={nav.href}
                                    className="font-roboto text-2xl lg:text-4xl font-thin ">{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="flex lg:justify-between flex-col lg:flex-row gap-7 lg:gap-0  text-white">
                <div className="flex gap-5">
                    {FOOTER_ICONS.slice(0, 8).map((data) => (
                        <Image key={data.name} src={data.src} alt={data.name} width={500} height={500}
                            className="w-fit h-fit" />
                    ))}
                </div>
                <div>
                    © 2019-2023 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved
                </div>
            </div>
        </nav>


    )
}

export default HandBurgerMenu