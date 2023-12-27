import Image from 'next/image'
import React from 'react'

import bg from '/assets/images/hero/hero-bg-image.png'
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
          <p className='font-poppins text-xs font-medium leading-3  lg:leading-[18px]
           '>CRAFTED FROM KERALA TO THE WORLD</p>
          <h1 className='font-roboto font-thin text-2xl lg:text-[3.4rem] leading-3 
          lg:leading-[64px] mt-5 lg:mt-3.5'>World-Class Digital Services</h1>
          <div className='text-center font-poppins font-thin lg:font-medium leading-4  lg:leading-6 text-xs
           lg:text-sm mt-5  lg:mt-3.5'>We specialize in crafting unforgettable brands that establish a profound connection <br />
            with your audience, elevating customer relationships through a seamless blend of <br />
            strategic design and cutting-edge technology.</div>
          <div className='mt-8'>
            <Button>Schedule a Meeting</Button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Hero