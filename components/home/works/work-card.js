import Image from 'next/image'
import React from 'react'




const WorkCard = ({ data }) => {
    return (
        <div className="col-span-3">
            <Image src={data.image} className='w-full' alt={data.name} width={500} height={500}  />
            <p className='mt-6 font-roboto text-lg font-thin'>{data.name}</p>
            <p className='mt-3.5 font-roboto text-lg font-extralight'>
                {data.title}
            </p>
        </div>
    )
}

export default WorkCard