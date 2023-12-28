import { WORKS_CARD } from "@/constants"
import WorkCard from "./work-card"


const Work = () => {
    return (
        <div className=" text-white bg-black lg:px-[6.25rem] px-5 pt-[5rem] lg:pt-[12.5rem]">
            <div className="max-w-[103rem]">
                <div>
                    <h2 className=" font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal">Our Works</h2>
                </div>
                <p className="mt-3.5 tracking-[1px] font-normal font-poppins text-sm lg:text-[0.938rem] leading-[1.375rem] text-[#ABABAB]">
                    To achieve and maintain high standards we are committed to investing in the most <br />
                    talented IT support specialists in India, with the experience, creativity, and <br />
                    qualifications to exceed the highest expectations. We are known for our works and we <br />
                    hope you enjoy looking at some of our recent works.
                </p>
                <div className="flex flex-col lg:grid grid-cols-12 bg-black text-white gap-3 lg:gap-5 mt-5 lg:mt-12 ">
                    {WORKS_CARD.map((data) => (<WorkCard data={data} />))}
                </div>
            </div>
        </div>

    )
}

export default Work