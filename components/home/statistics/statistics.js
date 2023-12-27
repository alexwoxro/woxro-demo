import Image from 'next/image';
import Button from '../button/button'

const Statistics = () => {
    return (
        <>
            <div className='bg-black text-white  flex pt-56 justify-between px-[100px]'>
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

            <div className='bg-black text-white px-[100px] grid grid-cols-12 gap-32 pt-52'>
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

            <div className='bg-black text-white px-[100px]'>
                <div>
                    <p className='font-roboto font-thin text-[2.8rem]'>Stay in the loop !</p>
                    <p className='font-poppins font-normal text-sm mt-3.5'>Remain in the loop and relevant, make sure to read our monthly blogs on technology-<br />
                        related topics. We keep them concise, informative, and to the point.</p>
                </div>

                <div className='grid grid-cols-12 mt-12'>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5 leading-5 text-[#9A9A9A] font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='leading-7 font-roboto text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>
                    <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='mt-5 leading-5 text-[#9A9A9A]  font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='font-roboto leading-7 text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div> <div className='col-span-4'>
                        <Image src='/images/team/loop.png' className='w-fit h-fit' alt='loop-png' width={500} height={500} />
                        <p className='leading-5 text-[#9A9A9A]  font-roboto text-[1.125rem] font-light'>Events | Less Than A Minute Read</p>
                        <p className='font-roboto leading-7 text-[1.25rem] font-light'>Building Brand Loyalty Through Social Media :  Talking about Strapi Units.</p>
                        <p className='leading-5 text-[#959595] font-poppins font-normal text-[0.9rem]'>Remain in the loop and relevant, make sure to read our monthly d relevant, make sure...</p>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Statistics;