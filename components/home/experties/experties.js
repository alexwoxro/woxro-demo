import Image from "next/image"
import circle from '/assets/images/experties/circle.png'
import ExpertiesAccordion from "./accordion"

const Expertise = () => {

    return (
        <div className="bg-black grid grid-cols-12 text-white ">

            <div className="col-span-12 lg:col-span-6 lg:px-[100px] flex flex-col justify-center px-10">
                <div>
                    <p className="font-poppins font-normal text-xs mt-3.5 ">OUR EXPERTISE</p>
                    <h3 className="font-roboto  lg:text-[2.8rem] font-thin mt-3.5 text-2xl" >We turn ideas into reality</h3>
                    <div className="font-poppins font-extralight lg:text-[0.9rem] mt-3.5 text-sm">Preparing for your success, we provide truly prominent IT solutions.
                        Global Web Designing <br />
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