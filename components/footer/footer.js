import { FOOTER_ICONS } from '@/constants'
import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <div className='bg-black text-white lg:px-[6.25rem] px-5'>

      <div className='max-w-[48.813rem] pt-[5rem] lg:pt-[12.5rem]'>
        <div>
          <p className=' font-roboto font-extralight text-3xl lg:text-[2.8rem] leading-[3.25rem]'>Explore with our Pages</p>
          <p className='mt-[0.938rem] text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem] leading-normal'>
            We support global brands, startups and enterprises that use innovation and human-<br />
            centered design to create meaningful customer experiences.</p>
        </div>


        <div className='lg:grid grid-cols-12  flex flex-col '>

          <div className='col-span-4 mt-[2.188rem]'>
            <p className='font-poppins text-[1.25rem] leading-[2.375rem] font-medium'>EXPLORE</p>
            <div className='text-[#585858] font-poppins text-[1.188rem] leading-[2.375rem] font-normal mt-[1.3rem] '>
              <p>Our Company</p>
              <p>Founder's Letter</p>
              <p>Accessibility</p>
              <p>Woxapps</p>
              <p>Woxhost</p>
              <p>Woxzine e-magazine</p>
              <p>Get a quote </p>
              <p>IJEA Foundation</p>
            </div>
          </div>

          <div className='col-span-4 mt-[2.188rem]'>
            <p className='font-poppins text-[1.25rem] leading-[2.375rem] font-medium'>SUPPORT</p>
            <div className='text-[#585858] font-poppins text-[1.188rem] leading-[2.375rem] font-normal  mt-[1.3rem]  '>
              <p> COVID-19 Response </p>
              <p>Client Portal</p>
              <p>Support Ticket</p>
              <p>Terms of Service </p>
              <p>Payment Gateway </p>
              <p>Research Division</p>
              <p>FAQ </p>
              <p>Knowledge Base</p>
            </div>
          </div>



          <div className='col-span-4 mt-[2.188rem]'>
            <p className='font-poppins text-[1.25rem] leading-[2.375rem] font-medium'>QUICK LINKS</p>
            <div className='text-[#585858] font-poppins text-[1.188rem] leading-[2.375rem] font-normal  mt-[1.3rem]  '>
              <p>  Home </p>
              <p>About Us </p>
              <p>Our Services </p>
              <p>Technology </p>
              <p>Career Opportunity</p>
              <p>Insights & Activities</p>
              <p>Our Portfolio </p>
              <p>Contact us</p>
            </div>
          </div>
        </div>


        <div className='lg:mt-[12.5rem] mt-[5rem]'>
          <div>
            <p className='font-poppins font-normal text-xs leading-[1.125rem] text-[#5D5D5D] tracking-[2px]'>DROP US A LINE</p>
            <p className='font-roboto font-extralight text-3xl lg:text-[2.8rem] leading-[3.25rem] mt-[0.938rem]'>hello@woxro.com</p>
            <p className='text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem] leading-normal mt-[0.938rem]'>Combining intentional design with an original application of progressive technologies to create sustainable innovation.</p>
          </div>


          <div>
            <p className='font-roboto font-light text-base lg:text-[1.25rem] lg:leading-7 tracking-[1px] mt-[3.125rem]'>Get Connected</p>
            <div className="flex gap-5 mt-[0.938rem]">
              {FOOTER_ICONS.map((data) => (
                <Image key={data.name} src={data.src} alt={data.name} width={50} height={50}
                  className="w-fit h-fit" />
              ))}
            </div>
          </div>

        </div>

      </div>



      <div className='flex lg:flex-row flex-col gap-5 lg:gap-0 lg:justify-between py-[3rem] mt-[3rem]'>
        <div className='font-roboto font-light text-sm lg:text-[1.25rem] lg:leading-7 tracking-[1px]'>
          © 2016-2023 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved
        </div>
        <div className='flex font-roboto font-light text-xs lg:text-[1.25rem] lg:leading-7 tracking-[1px] gap-5 lg:gap-10'>
          <p>Privacy Policy</p>
          <p> Terms of Service  </p>
          <p>Support Ticket</p>
        </div>
      </div>
    </div>
  )
}

export default Footer