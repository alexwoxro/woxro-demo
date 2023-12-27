import Image from 'next/image';
import Button from '../button/button'

const Statistics = () => {
    return (
        <div className='bg-black text-white px-[100px]'>

            <div className=' flex pt-56 justify-between'>
                <div>
                    <p className='font-roboto font-thin text-[2.8rem]'>Statistics</p>
                    <p className='mt-3.5 font-poppins font-extralight text-[1rem] leading-6'>We actively collaborate with clients at multiple stages of their transformative journeys,<br />
                        encompassing a broad spectrum of industries on a global scale. By doing so, we tailor<br />
                        our approach to meet the unique needs and challenges specific to each client's<br />
                        industry, ensuring a comprehensive and effective partnership throughout their<br />
                        evolution.</p>
                    <div className='mt-6'>
                        <Button>Schedule a Meeting</Button>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='font-poppins font-extralight text-[5rem]'>124+</p>
                        <p className='font-poppins font-extralight text-[1.25rem] leading-7'>Completed Projects</p>
                    </div>
                    <div>
                        <p className='font-poppins font-extralight text-[5rem]'>900+</p>
                        <p className='font-poppins font-extralight text-[1.25rem] leading-7'>Sales Revenue</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='font-poppins font-extralight text-[5rem]'>25M</p>
                        <p className='font-poppins font-extralight text-[1.25rem] leading-7'>Ad Spends</p>
                    </div>
                    <div>
                        <p className='font-poppins font-extralight text-[5rem]'>5X+</p>
                        <p className='font-poppins font-e3xtralight text-[1.25rem] leading-7'>Global Outreach </p>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-12 gap-32 pt-52'>
                <div className='col-span-6 flex flex-col  justify-center'>
                    <p className='font-roboto font-thin text-[2.8rem]'>Want to join the team?</p>
                    <p className='mt-3.5 font-poppins font-extralight text-[1rem] leading-6'>We take pride in assembling a team of like-minded experts who are dedicated to propelling innovation and providing top-notch solutions for our clients. If you are passionate about shaping the future of the digital industry, consider applying for the positions listed below, or reach out to us to explore how you can contribute to our journey.</p>
                    <div className='mt-5'>
                        <Button>Apply Now</Button>
                    </div>

                </div>

                <div className='col-span-6'>
                    <Image src='/images/team/team.png' alt='team-pic'
                        className='w-fit h-fit' width={500} height={500} />
                </div>
            </div>

            <div className=''>
                <div>
                    <p className='font-roboto font-thin text-[2.8rem]'>Stay in the loop !</p>
                    <p className='font-poppins font-normal text-sm mt-3.5'>Remain in the loop and relevant, make sure to read our monthly blogs on technology-<br />
                        related topics. We keep them concise, informative, and to the point.</p>
                </div>

                <div className='grid grid-cols-12 mt-12'>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5 leading-5 text-[#9A9A9A] font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 leading-7 font-roboto text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5 leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5 leading-5 text-[#9A9A9A]  font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 font-roboto leading-7 text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5 leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div> <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5 leading-5 text-[#9A9A9A]  font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='mt-9 font-roboto leading-7 text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='mt-3.5 leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>

                    </div>
                </div>
            </div>





            <div className='pt-52 '>
                <div className='max-w-3xl'>
                    <p className='font-poppins text-[0.75rem] tracking-[0.125rem] font-normal leading-4'>WE ARE PROCESS NERDS</p>
                    <p className='font-roboto text-[2.8rem] font-extralight '>We Work with all industries</p>
                    <p className='text-[#959595] tracking-[1px] font-normal font-poppins text-[0.9rem]'>We support global brands, startups and enterprises that use innovation and human-centered design to create meaningful customer experiences.</p>
                </div>


                <div className='grid grid-cols-12 mt-12 gap-12'>


                    <div className='col-span-4'>
                        <p className='font-roboto font-light  text-[1.25rem]'>Financial Services</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.9rem] leaddig-5 font-normal '>
                            Our customers range from startups to the largest financial institutions across the globe. Staying true to our mission,
                            we’ve helped maximize their ROI.</p>
                    </div>


                    <div className='col-span-4'>
                        <p className='font-roboto font-light  text-[1.25rem]'>Healthcare</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.9rem] leaddig-5 font-normal '>
                            In the Healthcare industry, we can relate to a common theme; quality care. We do our part to deliver the highest-quality
                            work with attention to detail for our clients.
                        </p>
                    </div>



                    <div className='col-span-4'>
                        <p className='font-roboto font-light  text-[1.25rem]'>Ad Marketing / Technology</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.9rem] leaddig-5 font-normal '>Our customers range from startups to the largest financial institutions across the globe. Staying true to our mission, we’ve helped maximize their ROI.</p>
                    </div>



                    <div className='col-span-4'>
                        <p className='font-roboto font-light  text-[1.25rem]'>High Tech & Software Startups</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.9rem] leaddig-5 font-normal '>
                            Technology is fast-paced and ever-changing; we strive to move even faster. We work with business leaders to bring together people, new ideas,
                            and technology to create unique and viable platforms for their customers.
                        </p>
                    </div>


                    <div className='col-span-4'>
                        <p className='font-roboto font-light  text-[1.25rem]'>High Tech & Software Startups</p>
                        <p className='mt-3.5 text-[#ABABAB] font-poppins text-[0.9rem] leaddig-5 font-normal '>
                            Technology is fast-paced and ever-changing; we strive to move even faster. We work with business leaders to bring together people, new ideas,
                            and technology to create unique and viable platforms for their customers.
                        </p>
                    </div>

                </div>




                <div className='mt-52 max-w-[845px] '>
                    <h2 className='font-poppins font-normal text-xs leadig-[1.125rem]'>Digital Solutions ForYour Business</h2>
                    <p className='mt-3.5 font-roboto font-extralight text-[2.8rem] leading-[3.25rem] '>Let's build or improve <br /> your digital product</p>

                    <div className='flex gap-6 mt-12'>
                        <Button>Ring us on Skype</Button>
                        <Button>Contact Us</Button>
                    </div>

                </div>


            </div>





            <div className='max-w-[1503px] mt-48 font-roboto font-extralight text-[3.43rem]'>

                To achieve and maintain high standards we are<br />
                committed to investing in the most talented IT support<br />
                specialists in India, with the <span> experience, creativity</span>, and<br />
                qualifications to exceed the highest expectations. We are<br />
                known for our works and we hope you enjoy looking at<br />
                some of our recent works
            </div>





        </div>

    )
}

export default Statistics;