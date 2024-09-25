import React from 'react'
import bulkSms from '../../assets/images/bulkSms.png'

const BulkSms = () => {
  return (
    <div className='bg-white pt-[110px] sm:pt-[130px] pb-[30px] md:pt-[140px] md:pb-[50px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='xl:flex xl:justify-between mt-[30px] xl:mt-[50px]'>
          <div>
            <p className='font-pops font-bold text-[35px] xl:text-[64px] text-third'>Service</p>
            <p className='font-pops font-semibold text-[25px] xl:text-[45px] text-third'>Bulk SMS</p>
            <div className='xl:flex xl:justify-between mt-[30px] xl:mt-[50px]'>
              <div className=''>
                <div className='flex items-center bg-secondary'>
                  <div className='w-[300px] font-pops font-semibold text-[18px] xl:text-[20px] text-center text-white py-[25px] border'>PACKAGE</div>
                  <div className='w-[300px] font-pops font-semibold text-[18px] xl:text-[20px] text-center text-white py-[25px] border'>PRICE</div>
                  <div className='w-[300px] font-pops font-semibold text-[18px] xl:text-[20px] text-center text-white py-[25px] border'>DURATION</div>
                </div>
                <div className='flex items-center bg-white mt-[1px]'>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>Non Masking</div>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>.50 Poisa/SMS</div>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>6 Month</div>
                </div>
                <div className='flex items-center bg-white'>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>Fixed Number</div>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>1.50 Poisa/SMS</div>
                  <div className='w-[300px] font-pops font-semibold text-[14px] xl:text-[18px] text-center text-overlay py-[25px] border'>6 Month</div>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-0 xl:ml-[30px] mt-[20px] xl:mt-0'>
            <img src={bulkSms} alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkSms