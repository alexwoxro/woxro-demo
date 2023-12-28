import Image from 'next/image'
import React from 'react'

const Form = () => {

  return (

    <div className='bg-black text-white px-[6.25rem]'>
      <div className='grid grid-cols-12  max-w-[76rem] pt-[12.5rem]'>
        <div className='col-span-6'>
          <p className=' font-roboto font-extralight text-[2.8rem] leading-[3.25rem]'>Grab a chance to get <br />a free IT Consultation</p>
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
              <p className='px-5 py-[0.6rem] bg-black' >Select your industry*</p>
            </div>
            <Image src='/icons/input/down-arrow.svg' width={16} height={16} />
          </div>


          <div className='flex gap-5 mt-[1.563rem]'>
            <div className='border-b w-full bg-black'>
              <input className=' py-[0.6rem] bg-black' placeholder='Name*' />
            </div>

            <div className='border-b w-full bg-black'>
              <input className=' py-[0.6rem] bg-black' placeholder='Corporate E-mail*' />
            </div>
          </div>



          <div className='border-b w-full bg-black flex justify-between mt-[1.563rem] '>
            <input className='py-[0.6rem] bg-black' placeholder='Phone*' />
          </div>


          <div className='mt-[1.563rem]'>
            <p>We will call you ASAP or you can schedule a call </p>
            <div className='border-b w-full bg-black flex justify-between mt-[0.625rem]'>
              <textarea className='w-full py-[0.6rem] bg-black' placeholder="Please describe your project requirements*" />
            </div>
          </div>



          <div className='flex gap-4 mt-[3.125rem]'>
            <input type="checkbox" />
            <p>I want to protect my data by signing an NDA.</p>
            <Image src='/icons/input/i-button.svg' width={16} height={16} />
          </div>



          <div className='mt-[2.313rem]'>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </p>
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