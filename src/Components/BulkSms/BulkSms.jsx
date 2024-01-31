import React from 'react'
import bulkSms from '../../assets/images/bulkSms.png'

const BulkSms = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <div>
          <p className='font-pops font-bold text-[64px] text-third'>Service</p>
          <p className='font-pops font-semibold text-[45px] text-third'>Bulk SMS</p>
          <div className='flex justify-between mt-[50px]'>
            <div className=''>
              <div className='flex items-center bg-secondary'>
                <div className='w-[300px] font-pops font-semibold text-[20px] text-center text-white py-[25px] border'>PACKAGE</div>
                <div className='w-[300px] font-pops font-semibold text-[20px] text-center text-white py-[25px] border'>PRICE</div>
                <div className='w-[300px] font-pops font-semibold text-[20px] text-center text-white py-[25px] border'>DURATION</div>
              </div>
              <div className='flex items-center bg-white mt-[1px]'>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>Non Masking</div>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>.50 Poisha/SMS</div>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>6 Month</div>
              </div>
              <div className='flex items-center bg-white'>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>Fixed Number</div>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>.65 Poisha/SMS</div>
                <div className='w-[300px] font-pops font-semibold text-[18px] text-center text-overlay py-[25px] border'>6 Month</div>
              </div>
            </div>
            <div className='ml-[30px]'>
              <img src={bulkSms} alt="" className='w-full'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkSms