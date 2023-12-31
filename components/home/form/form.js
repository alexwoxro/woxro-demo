import Image from 'next/image'
import React from 'react'

const Form = () => {

  return (


    <div className='bg-black text-white lg:px-[6.25rem] px-5'>


      <div className='lg:grid grid-cols-12 lg:gap-0 max-w-[76rem] lg:pt-[12.5rem] pt-[5rem] flex flex-col gap-7'>
        <div className='col-span-6'>
          <p className=' font-roboto font-extralight text-3xl lg:text-[2.8rem] lg:leading-[3.25rem]'>Grab a chance to get <br />a free IT Consultation</p>
          <div>
            <p>What happens next?</p>
            {/* <div className='border-l'>
              <li className='dark'>
                <span>1</span>
                <p>expert</p>
              </li>
            </div> */}
          </div>
          {/* <nav className='navmenu'>
          <ul>
            <li>
              <p>An expert contacts you after having analyzed your requirements;</p>
            </li>

            <li><p>If needed, we sign an NDA to ensure the highest privacy level;</p>
            </li>

            <li>
              <p>We submit a detailed project proposal to develop custom software for you.</p>
            </li>
            <li>
              <p>We submit a detailed project proposal to develop custom software for you.</p>
            </li>
          </ul>
        </nav> */}
        </div>




        <div className='col-span-6 text-white'>


          <div className='border-b w-full bg-black flex justify-between '>

            <div className='flex'>
              <Image src='/icons/input/i-button.svg' width={16} height={16} />
              <p className='px-5 py-[0.6rem] bg-black font-roboto font-normal text-xs lg:text-[1.125rem] leading-[1.625rem]' >Select your industry*</p>
            </div>
            <Image src='/icons/input/down-arrow.svg' width={16} height={16} />
          </div>


          <div className='flex gap-5 mt-[1.563rem]'>
            <div className='border-b w-full bg-black'>
              <input className='py-[0.6rem] bg-black' placeholder='Name*' />
            </div>

            <div className='border-b w-full bg-black'>
              <input className=' py-[0.6rem] bg-black' placeholder='Corporate E-mail*' />
            </div>
          </div>



          <div className='border-b w-full bg-black flex justify-between mt-[1.563rem] '>
            <input className='py-[0.6rem] bg-black ' placeholder='Phone*' />
          </div>


          <div className='mt-[1.563rem]'>
            <p className='font-poppins font-normal text-xs lg:text-[0.938rem] leading-[1.406rem] tracking-[1px]'>We will call you ASAP or you can schedule a call </p>
            <div className='border-b w-full bg-black flex justify-between mt-[0.625rem]'>
              <textarea className='w-full py-[0.6rem] bg-black' placeholder="Please describe your project requirements*" />
            </div>
          </div>



          <div className='flex gap-4 mt-[3.125rem]'>
            <input type="checkbox" />
            <p className='font-roboto font-normal leading-[1.375rem] text-[0.875rem]'>I want to protect my data by signing an NDA.</p>
            <Image src='/icons/input/i-button.svg' width={16} height={16} />
          </div>



          <div className='mt-[2.313rem]'>
            <p className=' text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem] leading-normal'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </p>
            <div className='mt-[1.563rem] border py-[0.75rem] px-[3.313rem] flex w-fit items-center justify-center bg-white text-black'>
              Send request
            </div>
          </div>


        </div>
      </div>

    </div>


  )
}

export default Form





// <div className='container'>
//           <div className='content'>
//             <div className='progressbar'>
//               <div className='circle'>1</div>
//               <div className='circle'>1</div>
//               <div className='circle'>1</div>
//               <div className='circle'>1</div>

//             </div>
//             3
//           </div>
//           4
//         </div>