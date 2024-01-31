import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const TrainingCenterModules = () => {
    return (
        <div className='bg-sky-50 py-[100px]'>
            <div className='max-w-container mx-auto'>
                <div className='flex justify-between'>
                    <div className='w-[80%]'>
                        <h6 className='font-pops font-bold text-[28px] text-[#000020] mb-[20px]'>Modules</h6>
                    </div>
                    <div className='w-[20%]'>
                        <h6 className='font-pops font-bold text-[28px] text-[#000020] mb-[20px]'>Exciting Features</h6>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[80%] flex'>
                        <div className='mr-[150px] leading-9'>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Admission</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Fees Receive</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Course & Batch Information</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>ID Card And Certificate</p>
                            </div>
                        </div>
                        <div className='mr-[150px] leading-9'>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Attendance</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Expenditure</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Instructor Profile</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Notice</p>
                            </div>
                        </div>
                        <div className='mr-[150px] leading-9'>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>News And Blog Publish</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>SMS Alert</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDotFill className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Reports</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] leading-9'>
                        <div className='flex items-center'>
                            <GoDot className='text-[20px]' />
                            <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>SMS integration</p>
                        </div>
                        <div className='flex items-center'>
                            <GoDot className='text-[20px]' />
                            <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>User access control</p>
                        </div>
                        <div className='flex items-center'>
                            <GoDot className='text-[20px]' />
                            <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Cloud backup</p>
                        </div>
                        <div className='flex items-center'>
                            <GoDot className='text-[20px]' />
                            <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Responsive Design</p>
                        </div>
                        <div className='flex items-center'>
                            <GoDot className='text-[20px]' />
                            <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Loading Free Web Hosting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TrainingCenterModules