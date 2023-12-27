'use client';

import Image from "next/image";
import { useState } from "react";

import plus from '/assets/icons/experties/plus-icon.svg';
import minus from '/assets/icons/experties/minus-icon.svg';
import { EXPERTIES_ACCORDION } from "@/constants";


const ExpertiesAccordion = ({ data }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (

        <>
            {EXPERTIES_ACCORDION.map((data, index) => (
                <div className="border-b border-[#ABABAB] lg:pb-12 mt-6 pb-6" key={index}>
                    <div className="flex justify-between items-center"
                        onClick={() => toggleSection(index)} >
                        <p className="font-roboto lg:text-4xl font-thin text-2xl ">{data.name}</p>
                        <div>
                            {openIndex === index ? <Image src={minus} alt="minus" /> : <Image src={plus} alt="plus" />}
                        </div>
                    </div>
                    <div className="mt-3.5 font-roboto  font-thin lg:text-[1.2rem] text-sm">
                        {data.title}
                    </div>
                    {openIndex === index &&
                        <div className="font-roboto font-thin lg:text-[1.2rem] mt-12 text-sm">
                            {data.description}
                        </div>}
                </div>

            ))}
        </>
    )
}

export default ExpertiesAccordion