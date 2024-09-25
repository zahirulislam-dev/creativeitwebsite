import React from 'react'
import { Link } from 'react-router-dom'

const PriceQuote = () => {
  return (
    <div className='bg-[#5F35F5]'>
        <div className='max-w-container mx-auto py-[50px]'>
            <div className='md:flex md:items-center md:justify-between px-[10px] xl:px-0'>
                <h4 className='font-pops font-bold text-[20px] xl:text-[36px] text-[#fff] mb-[20px] md:mb-0'>Just Drop An Email To Us And Get Quote For Free!</h4>
                <div className='text-center md:right'>
                <Link to='/contactdetails'><button className='font-pops font-bold text-[18px] xl:text-[20px] text-[#4364F7] px-[15px] py-[15px] bg-white hover:text-[#4CAF4F] transition duration-300 ease-in-out rounded'>Get Price Quote</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceQuote