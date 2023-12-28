import { FOOTER_ICONS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div className='max-w-[48.813rem] mt-[12.5rem]'>
      <div>
        <p className=' font-roboto font-extralight text-[2.8rem] leading-[3.25rem]'>Explore with our Pages</p>
        <p className='text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem] leading-normal'>
          We support global brands, startups and enterprises that use innovation and human-<br />
          centered design to create meaningful customer experiences.</p>
      </div>


      <div className='grid grid-cols-12'>

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


      <div>
        <div>
          <p>Drop us a line</p>
          <p>hello@woxro.com</p>
          <p>Combining intentional design with an original application of progressive technologies to create sustainable innovation.</p>
        </div>

        <div>
          <p>Get Connected</p>
          <div className="flex gap-5">
            {FOOTER_ICONS.map((data) => (
              <Image key={data.name} src={data.src} alt={data.name} width={500} height={500}
                className="w-fit h-fit" />
            ))}
          </div>
        </div>

        <div>
          © 2016-2023 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved
        </div>

      </div>
    </div>
  )
}

export default Explore