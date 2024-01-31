import React from 'react'
import VideoIcon from '../../assets/images/VideoIcon.png'
import screenshotBsPos from '../../assets/images/screenshotBsPos.png'

const TilesSanitaryVideoScreenshot = () => {
  return (
    <div className='bg-[#E5E5E5] py-[100px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-pops font-bold text-[35px] text-[#000020] mb-[20px]'>Software Video Preview</p>
                    <img src={VideoIcon} alt="" className='w-[1000px] h-[500px] bg-[#fff] p-[10px]'/>
                </div>
                <div className='ml-[50px]'>
                    <p className='font-pops font-bold text-[35px] text-[#000020] mb-[20px]'>Software ScreenShot</p>
                    <img src={screenshotBsPos} alt="" className='w-[1000px] h-[500px] bg-[#fff] p-[10px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TilesSanitaryVideoScreenshot