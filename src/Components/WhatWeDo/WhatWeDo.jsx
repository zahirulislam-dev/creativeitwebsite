import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'

const WhatWeDo = () => {

  const item = [
    {
      name: "Software Development",
      imageurl: 'https://i.ibb.co.com/vQyzpnv/software-Dev.png',
      description: 'We are developing customized software for small to large businesses, Edu...',
      btn: '/webdevelopmentdetails',
    },
    {
      name: "Web Design & Development",
      imageurl: 'https://i.ibb.co.com/M1FXSBJ/Web-Design-Dev.jpg',
      description: 'We developed any kinds of the website along with an interactive, strong ...',
      btn: '/webdesigndevelopmentdetails',
    },
    {
      name: "Web App Development",
      imageurl: 'https://i.ibb.co.com/Sfcbj2V/WebApp.png',
      description: 'We are including web application development services since 2019. The we...',
      btn: '/webappdevelopmentdetails',
    },
    {
      name: "Mobile App Development",
      imageurl: 'https://i.ibb.co.com/nrjBqMk/Mobile-App-Dev.png',
      description: 'We are including web application development services since 2019. The we...',
      btn: '/mobileappdevelopmentdetails',
    },
  ];

  return (
    <div className='bg-[#F5F7FA] py-[50px] xl:py-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53] text-center mb-[30px] xl:mb-[50px]'>OUR SERVICES</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>

          {
            item.map((data) => (
              <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                <div className=''>
                  <img src={data.imageurl} alt="" className='w-[100px] h-[100px] mb-[10px] mx-auto' />
                  <h3 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] text-center mb-[20px]'>{data.name}</h3>
                  <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay text-center mb-[15px] leading-9'>{data.description}</p>
                </div>
                <Link to={data.btn}>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F]'>Read more</button>
                    <GoArrowRight className='text-[#4CAF4F]' />
                  </div>
                </Link>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default WhatWeDo