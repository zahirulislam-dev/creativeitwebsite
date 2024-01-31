import React from 'react'
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

const TechnologyLogo = () => {
  return (
    <div className='bg-blue-100'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='items-center py-[20px] lg:py-[50px]'>
          <h6 className='font-pops text-[25px] lg:text-[35px] font-semibold text-[#000020] xl:text-center mb-[30px]'>Technology we use</h6>
          <div className='flex items-center justify-between'>
            <FaHtml5 className='md:text-[50px] lg:text-[70px]' />
            <SiTailwindcss className='lg:text-[70px]' />
            <FaCss3Alt className='md:text-[50px] lg:text-[70px]' />
            <RiJavascriptFill className='md:text-[50px] lg:text-[70px]' />
            <SiPhp className='md:text-[50px] lg:text-[70px]' />
            <FaReact className='md:text-[50px] lg:text-[70px]' />
            <SiExpress className='md:text-[50px] lg:text-[70px]'/>
            <FaNode className='md:text-[50px] lg:text-[70px]' />
            <BsAndroid2 className='md:text-[50px] lg:text-[70px]' />
            <DiMongodb className='md:text-[50px] lg:text-[70px]' />
            <TbBrandMysql className='md:text-[50px] lg:text-[70px]' />
            <FaSquareGithub className='md:text-[50px] lg:text-[70px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyLogo