import Image from "next/image"
import circle from '/assets/images/experties/circle.png'
import ExpertiesAccordion from "./accordion"

const Expertise = () => {

    return (
        <div className="bg-black grid grid-cols-12 text-white ">

            <div className="col-span-12 lg:col-span-6 lg:px-[6.25rem] flex flex-col justify-center px-5">
                <div>
                    <p className="mt-3.5 text-[#959595] font-poppins text-[0.75rem] tracking-[0.125rem] font-normal leading-[1.125rem]">OUR EXPERTISE</p>
                    <p className="mt-3.5 text-2xl font-roboto lg:text-[2.813rem] font-extralight leading-normal">
                        We turn ideas into reality</p>
                    <div className="text-sm mt-3.5 tracking-[1px] font-normal font-poppins lg:text-[0.938rem] leading-[1.375rem] text-[#ABABAB]">
                        Preparing for your success, we provide truly prominent IT solutions.Global Web Designing <br />
                        Company ThatProvides Full-cycle Software Development Services, E-commerce & Mobile <br />
                        App Development Services.</div>
                </div>
                <div>
                    <ExpertiesAccordion />
                </div>
            </div>

            <div className="bg-black col-span-6 lg:flex lg:justify-end hidden ">
                <Image src={circle} className="" />
            </div>

        </div>
    )
}

export default Expertise