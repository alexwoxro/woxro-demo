import Image from 'next/image'
import React from 'react'




const WorkCard = ({ data }) => {
    return (
        <div className="lg:col-span-3">
            <Image src={data.image} className='w-full' alt={data.name} width={500} height={500} />
            <p className='mt-[1.5rem] font-roboto font-light text-lg lg:text-[1.125rem] leading-[1.318rem] text-[#ABABAB] '>{data.name}</p>
            <p className='mt-[0.938rem] font-roboto text-sm lg:text-[1.25rem] font-light leading-5 lg:leading-[1.75rem] tracking-[1px] '>
                {data.title}
            </p>
        </div>
    )
}

export default WorkCard