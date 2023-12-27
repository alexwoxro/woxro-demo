import { CHOOSE_US } from "@/constants"
import Image from "next/image"

const ChoseUs = () => {

const alex=[1,2,3,4,5,6]




    return (
        <div className="bg-black text-white pt-52 px-[100px]">
            <div>
                <p className="font-roboto font-thin text-[2.8rem]">Why Choose Us?</p>
                <p className="font-poppins font-extralight text-[1rem] leading-6 mt-3.5" >From the beginning, We have been setting up the team by individuals who have gone <br />
                    beyond the limits of personal goals and who have the passion to do things from the<br />
                    bottom of their heart.</p>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-12 gap-24">
                    {CHOOSE_US.slice(0, 3).map((data) => (
                        <div key={data.title} className="col-span-4">
                            <Image src={data.image} className='w-fit h-fit' alt={data.title} width={0} height={0} />
                            <p className="font-roboto font-thin text-[1.25rem] mt-6">{data.title}</p>
                            <p className="mt-5 font-poppins font-extralight text-[1rem] ">{data.description}</p>
                        </div>
                    ))}

                </div>

                <div className="grid grid-cols-12 gap-24 mt-12">
                    {CHOOSE_US.slice(3, 6).map((data) => (
                        <div key={data.title} className="col-span-4">
                            <Image src={data.image} className='w-fit h-fit' alt={data.title} width={0} height={0} />
                            <p className="font-roboto font-thin text-[1.25rem] mt-6">{data.title}</p>
                            <p className="mt-5 font-poppins font-extralight text-[1rem] ">{data.description}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default ChoseUs