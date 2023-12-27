
import React from 'react'
import bg from '/assets/images/hero/hero-bg-image.png'

import Image from 'next/image'
import btn from '/assets/icons/button/btn-r-arrow.svg'
import Button from '../button/button'

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen ">

        <div className="absolute  inset-0">
          <Image src={bg} alt="background image" className='object-cover' fill />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full
         text-white px-10 ">
          <p className='font-poppins text-xs font-normal leading-[1.125rem] tracking-[2px]'>
            CRAFTED FROM KERALA TO THE WORLD</p>
          <h1 className='font-roboto font-thin text-2xl lg:text-[3.438rem] leading-3 lg:leading-[4rem] mt-5 lg:mt-3.5'>
            World-Class Digital Services</h1>

          <div className='text-center font-poppins font-thin lg:font-normal leading-4  lg:leading-[1.563rem] text-xs
           lg:text-[0.938rem] mt-5  lg:mt-3.5'>We specialize in crafting unforgettable brands that establish a profound connection <br />
            with your audience, elevating customer relationships through a seamless blend of <br />
            strategic design and cutting-edge technology.</div>



          


          <Button>Schedule a Meeting</Button>


        </div>

      </div >
    </>
  )
}

export default Hero