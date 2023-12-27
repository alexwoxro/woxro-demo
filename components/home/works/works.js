import { WORKS_CARD } from "@/constants"
import WorkCard from "./work-card"


const Work = () => {
    return (
        <div className="text-white bg-black px-[100px]">
            <div>
                <h2 className="font-roboto font-thin text-[2.8rem]">Our Works</h2>
            </div>
            <p className="font-poppins font-extralight text-[1rem] leading-6">
                To achieve and maintain high standards we are committed to investing in the most <br />
                talented IT support specialists in India, with the experience, creativity, and <br />
                qualifications to exceed the highest expectations. We are known for our works and we <br />
                hope you enjoy looking at some of our recent works.
            </p>
            <div className=" grid grid-cols-12 bg-black text-white gap-5  mt-12 ">
                {WORKS_CARD.map((data) => (<WorkCard data={data} />))}
            </div>
        </div>

    )
}

export default Work