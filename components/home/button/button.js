import Image from 'next/image'
import btn from '/assets/icons/button/btn-r-arrow.svg'

const Button = ({ children }) => {
    return (
        <div className='border flex w-full lg:w-[410px] items-center justify-end
         py-[20px] gap-[71px] px-[35px] '>
            <div className='text-sm font-poppins font-normal'>{children}</div>
            <Image src={btn} alt="background image" />
        </div>
    )
}

export default Button