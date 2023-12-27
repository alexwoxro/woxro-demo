import Image from 'next/image'
import btn from '/assets/icons/button/btn-r-arrow.svg'

const Button = ({ children }) => {
    return (
        <div className='border flex w-full max-w-[410px] items-center justify-end py-[1.25rem] gap-[4.4rem] px-[35px] '>
            <p className='text-[0.938rem] font-poppins font-normal leading-[1.5rem]'>{children}</p>
            <Image src={btn} alt="background image" />
        </div>
    )
}

export default Button




{/* <div className='border flex max-w-[410px] items-center justify-end py-[1.25rem] gap-[71px] px-[35px] '>
<div className='text-[0.938rem] font-poppins font-normal leading-[1.5rem]'>{children}</div>
<Image src={btn} alt="background image" />
</div> */}