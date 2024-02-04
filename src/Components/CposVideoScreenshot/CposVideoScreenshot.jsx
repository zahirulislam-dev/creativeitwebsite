import React from 'react'
import VideoIcon from '../../assets/images/VideoIcon.png'
import screenshotCpos from '../../assets/images/screenshotCpos.png'

const CposVideoScreenshot = () => {
  return (
    <div className='bg-[#E5E5E5] py-[50px] xl:py-[100px]'>
        <div className='max-w-container mx-auto px-[10px] xl:px-0'>
            <div className='xl:flex xl:justify-between xl:items-center'>
                <div>
                    <p className='font-pops font-bold text-[25px] xl:text-[35px] text-[#000020] mb-[20px]'>Software Video Preview</p>
                    <img src={VideoIcon} alt="" className='xl:w-[1000px] xl:h-[500px] bg-[#fff] p-[5px] xl:p-[10px]'/>
                </div>
                <div className='ml-0 xl:ml-[50px] mt-[20px] xl:mt-0'>
                    <p className='font-pops font-bold text-[25px] xl:text-[35px] text-[#000020] mb-[20px]'>Software ScreenShot</p>
                    <img src={screenshotCpos} alt="" className='xl:w-[1000px] xl:h-[500px] bg-[#fff] p-[5px] xl:p-[10px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CposVideoScreenshot