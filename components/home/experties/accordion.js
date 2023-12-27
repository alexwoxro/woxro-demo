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
                        <p className="font-roboto mt-[1.563rem] text-2xl lg:text-[2.188rem] font-extralight leading-[2.563rem] ">{data.name}</p>
                        <div>
                            {openIndex === index ? <Image src={minus} alt="minus" /> : <Image src={plus} alt="plus" />}
                        </div>
                    </div>
                    <div className="text-[#ABABAB] mt-[0.938rem] font-roboto  font-light lg:text-[1.25rem] text-sm leading-[1.75rem]">
                        {data.title}
                    </div>
                    {openIndex === index &&
                        <div className="text-[#ABABAB] mt-12 font-roboto  font-light lg:text-[1.25rem] text-sm leading-[1.75rem]">
                            {data.description}
                        </div>}
                </div>

            ))}
        </>
    )
}

export default ExpertiesAccordion