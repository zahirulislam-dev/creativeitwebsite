import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const OurTeamMembers = () => {

    const items = [
        {
            name: 'Zahirul Islam',
            imageurl: 'https://i.ibb.co.com/GvS4rpx/HD-12418.jpg',
            designation: 'Founder & MERN Stack Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
        {
            name: 'Abdullah Al Mamun',
            imageurl: '',
            designation: 'Senior Software Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
        {
            name: 'Shohel Rana Baig',
            imageurl: '',
            designation: 'Senior Software Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
        {
            name: 'Jion Mahmudul',
            imageurl: '',
            designation: 'Web Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
        {
            name: 'Ishaq Ahmed',
            imageurl: '',
            designation: 'MERN Stack Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
        {
            name: 'Solaiman Sifat',
            imageurl: '',
            designation: 'MERN Stack Developer',
            btnf: '',
            btnT: '',
            btnli: ''
        },
    ];

    return (
        <div className='bg-[#F5F7FA] py-[50px] xl:py-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <p className='font-pops font-bold text-[25px] xl:text-[45px] text-[#1C1E53] text-center mb-[20px]'>Our Team Members</p>
                <p className='font-pops font-medium text-[20px] text-overlay text-center mb-[30px] xl:mb-[50px]'>Our Team Member are working hard to get positive result.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
                    {
                        items.map((data)=>(
                            <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={data.imageurl} alt="" className='w-[200px] h-[200px] rounded-full mx-auto mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>{data.name}</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>{data.designation}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                                <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                                <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                                <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeamMembers