import { CHOOSE_US } from "@/constants"
import Image from "next/image"

const ChoseUs = () => {



    return (
        <div className="bg-black text-white pt-16 lg:pt-[12.5rem] lg:px-[6.25rem] px-5">
            <div className="max-w-[96rem]">
                <div>
                    <p className=" font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal">Why Choose Us?</p>
                    <p className="mt-3.5 tracking-[1px] font-medium font-poppins text-sm lg:text-[0.938rem] leading-[1.375rem] text-[#ABABAB]" >From the beginning, We have been setting up the team by individuals who have gone <br />
                        beyond the limits of personal goals and who have the passion to do things from the<br />
                        bottom of their heart.</p>
                </div>


                <div className="lg:mt-[3.125rem] mt-5">


                    <div className="lg:grid grid-cols-12 lg:gap-24 flex flex-col gap-5">
                        {CHOOSE_US.slice(0, 3).map((data) => (
                            <div key={data.title} className="lg:col-span-4 ">
                                <Image src={data.image} className='w-fit h-fit' alt={data.title} width={0} height={0} />
                                <p className="font-roboto font-light text-[1.25rem] mt-[1.5rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]">{data.title}</p>
                                <p className="mt-5 font-poppins font-normal text-[0.938rem] leading-[1.4rem] text-[#ABABAB] ">{data.description}</p>
                            </div>
                        ))}

                    </div>

                    <div className="lg:grid grid-cols-12 gap-24 mt-5 lg:mt-[3.125rem] flex flex-col ">
                        {CHOOSE_US.slice(3, 6).map((data) => (
                            <div key={data.title} className="lg:col-span-4">
                                <Image src={data.image} className='w-fit h-fit' alt={data.title} width={0} height={0} />
                                <p className="font-roboto font-light text-[1.25rem] mt-[1.5rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]">{data.title}</p>
                                <p className="mt-5 font-poppins font-normal text-[0.938rem] leading-[1.4rem] text-[#ABABAB] ">{data.description}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChoseUs