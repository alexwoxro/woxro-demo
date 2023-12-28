import Image from 'next/image';
import Button from '../button/button'
import btn_black from '/assets/icons/button/btn-r-arrow-black.svg'


const Statistics = () => {

    return (
        <div className='bg-black text-white lg:px-[6.25rem] px-5'>



            <div className=' flex lg:flex-row flex-col pt-[5rem] lg:pt-[12.5rem] justify-between max-w-[91rem]'>

                <div>
                    <p className='mt-3.5 font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal'>Client Statistics</p>
                    <p className='mt-3.5 tracking-[1px] font-normal font-poppins text-sm lg:text-[0.938rem] leading-[1.37rem] text-[#ABABAB]'>We actively collaborate with clients at multiple stages of their transformative journeys,<br />
                        encompassing a broad spectrum of industries on a global scale. By doing so, we tailor<br />
                        our approach to meet the unique needs and challenges specific to each client's<br />
                        industry, ensuring a comprehensive and effective partnership throughout their<br />
                        evolution.</p>
                    <div className='mt-5 lg:mt-[1.56rem]'>
                        <Button>Schedule a Meeting</Button>
                    </div>
                </div>

                <div className='mt-5 lg:mt-0'>
                    <div>
                        <p className='font-poppins font-thin text-6xl lg:text-[5rem] leading-[7.5rem]'>124+</p>
                        <p className='font-roboto font-light text-[1.25rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]'>Completed Projects</p>
                    </div>
                    <div>
                        <p className='font-poppins font-thin text-6xl lg:text-[5rem] leading-[7.5rem]'>900+</p>
                        <p className='font-roboto font-light text-[1.25rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]'>Sales Revenue</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='font-poppins font-thin text-6xl lg:text-[5rem] leading-[7.5rem]'>25M</p>
                        <p className='font-roboto font-light text-[1.25rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]'>Ad Spends</p>
                    </div>
                    <div>
                        <p className='font-poppins font-thin text-6xl lg:text-[5rem] leading-[7.5rem]'>5X+</p>
                        <p className='font-roboto font-light text-[1.25rem] leading-[1.75rem] tracking-[1px] text-[#ABABAB]'>Global Outreach </p>
                    </div>
                </div>

            </div>






            <div className='lg:grid flex flex-col gap-12 items-center grid-cols-12 lg:gap-32 mt-[5rem] lg:mt-[12.5rem] max-w-[95rem]'>
                <div className='col-span-6 flex flex-col  justify-center'>
                    <p className='mt-3.5 font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal '>Want to join the team?</p>
                    <p className='mt-3.5 tracking-[1px] font-normal font-poppins text-sm lg:text-[0.938rem] leading-[1.37rem] text-[#ABABAB]'>
                        We take pride in assembling a team of like-minded experts who are dedicated to propelling innovation
                        and providing top-notch solutions for our clients. If you are passionate about shaping the future of the
                        digital industry, consider applying for the positions listed below, or reach out to us to explore how you can
                        contribute to our journey.</p>

                    <div className='lg:mt-5 mt-12 max-w-[410px] px-6 flex  items-center justify-between border py-3 lg:py-5 bg-white  text-black'>
                        <p>Apply Now</p>
                        <Image src={btn_black} alt="background image" />
                    </div>

                </div>
                <div className='col-span-6'>
                    <Image src='/images/team/team.png' alt='team-pic'
                        className='w-fit h-fit' width={500} height={500} />
                </div>
            </div>







            <div className='mt-[5rem] lg:mt-[12.5rem] max-w-[101rem]'>
                <div>
                    <p className='text-[#959595] font-poppins text-[0.75rem] tracking-[0.125rem] font-normal leading-[1.125rem]'>INSIGHTS</p>
                    <p className='mt-3.5 font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal '>Stay in the loop !</p>
                    <p className='mt-3.5 tracking-[1px] font-normal font-poppins text-sm lg:text-[0.938rem] leading-[1.37rem]'
                    >Remain in the loop and relevant, make sure to read our monthly blogs on technology-<br />
                        related topics. We keep them concise, informative, and to the point.</p>
                </div>
                <div className='lg:grid grid-cols-12 mt-7 lg:mt-12 gap-5 flex flex-col'>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-full h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5  text-[#9A9A9A]  font-roboto text-[1.125rem] font-light leading-normal tracking-[0.18px]'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 font-roboto leading-7 text-sm lg:text-[1.25rem] font-light tracking-[1px]'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5  tracking-[1px] text-[#959595] font-poppins font-normal leading-normal text-[0.938rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-full h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5  text-[#9A9A9A]  font-roboto text-[1.125rem] font-light leading-normal tracking-[0.18px]'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 font-roboto leading-7 text-sm lg:text-[1.25rem] font-light tracking-[1px]'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5  tracking-[1px] text-[#959595] font-poppins font-normal leading-normal text-[0.938rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-full h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5  text-[#9A9A9A]  font-roboto text-[1.125rem] font-light leading-normal tracking-[0.18px]'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 font-roboto leading-7 text-sm lg:text-[1.25rem] font-light tracking-[1px]'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5  tracking-[1px] text-[#959595] font-poppins font-normal leading-normal text-[0.938rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>

                </div>
            </div>






            <div className='mt-[5rem] lg:mt-[12.5rem] max-w-[104rem] '>
                <div className='max-w-3xl'>
                    <p className='text-[#959595] font-poppins text-[0.75rem] tracking-[0.125rem] font-normal leading-[1.125rem]'>WE ARE PROCESS NERDS</p>
                    <p className='font-roboto text-3xl lg:text-[2.813rem] font-extralight leading-normal '>We Work with all industries</p>
                    <p className='text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem] leading-normal'>We support global brands, startups and enterprises that use innovation and human-centered design to create meaningful customer experiences.</p>
                </div>

                <div className='lg:grid  grid-cols-12 mt-12 lg:gap-12 flex flex-col gap-7'>

                    <div className='col-span-4'>
                        <p className='font-roboto font-light text-base  lg:text-[1.25rem] leading-7 tracking-[1px]'>Financial Services</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.938rem] leading-normal font-normal '>
                            Our customers range from startups to the largest financial institutions across the globe. Staying true to our mission,
                            we’ve helped maximize their ROI.</p>
                    </div>


                    <div className='col-span-4'>
                        <p className='font-roboto font-light text-base lg:text-[1.25rem] leading-7 tracking-[1px]'>Healthcare</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.938rem] leading-normal font-normal'>
                            In the Healthcare industry, we can relate to a common theme; quality care. We do our part to deliver the highest-quality
                            work with attention to detail for our clients.
                        </p>
                    </div>



                    <div className='col-span-4'>
                        <p className='font-roboto font-light text-base lg:text-[1.25rem] leading-7 tracking-[1px]'>Ad Marketing / Technology</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.938rem] leading-normal font-normal'>Our customers range from startups to the largest financial institutions across the globe. Staying true to our mission, we’ve helped maximize their ROI.</p>
                    </div>



                    <div className='col-span-4'>
                        <p className='font-roboto font-light text-base  lg:text-[1.25rem] leading-7 tracking-[1px]'>High Tech & Software Startups</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.938rem] leading-normal font-normal '>
                            Technology is fast-paced and ever-changing; we strive to move even faster. We work with business leaders to bring together people, new ideas,
                            and technology to create unique and viable platforms for their customers.
                        </p>
                    </div>


                    <div className='col-span-4'>
                        <p className='font-roboto font-light text-base lg:text-[1.25rem] leading-7 tracking-[1px]'>High Tech & Software Startups</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.938rem] leading-normal font-normal'>
                            Technology is fast-paced and ever-changing; we strive to move even faster. We work with business leaders to bring together people, new ideas,
                            and technology to create unique and viable platforms for their customers.
                        </p>
                    </div>

                </div>








                <div className='lg:mt-[12.5rem] max-w-[53rem] mt-[5rem] '>
                    <h2 className='font-poppins font-normal text-xs leading-[1.125rem] text-[#5D5D5D] tracking-[2px]'>DIGITAL SOLUTIOND FOR YOUR BUSINESS</h2>
                    <p className='mt-3.5 font-roboto font-extralight text-3xl lg:text-[2.8rem] lg:leading-[3.25rem] '>Let's build or improve <br /> your digital product</p>

                    <div className='flex gap-6 mt-12 font-poppins text-[0.9rem] font-normal'>

                        <div className='border py-3 lg:py-5 flex w-full items-center justify-center'>
                            Ring us on Skype
                        </div>

                        <div className='border py-3 lg:py-5 flex w-full items-center justify-center bg-white text-black'>
                            Contact Us
                        </div>

                    </div>

                </div>
            </div>




            <div className='max-w-[94rem] mt-[5rem] lg:mt-[12.5rem] font-roboto font-extralight leading-none 
           text-2xl lg:text-[3.43rem] text-[#5D5D5D] h-fit'>
                To achieve and maintain high standards we are<br />
                committed to investing in the most talented IT support<br />
                specialists in India, with the <span className='text-white'> experience, creativity</span>, and<br />
                qualifications to exceed the highest expectations. We are<br />
                known for our works and we hope you enjoy looking at<br />
                some of <span className='text-white'> our recent works</span>
            </div>



        </div>

    )
}

export default Statistics;