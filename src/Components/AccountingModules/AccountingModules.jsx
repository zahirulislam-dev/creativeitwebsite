import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const AccountingModules = () => {
    return (
        <div className='bg-sky-50 py-[50px] xl:py-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <div className='xl:flex'>
                    <div className='xl:w-[80%]'>
                        <h6 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#000020] mb-[10px]'>Software Modules</h6>
                        <div className='mr-0 xl:mr-[200px]'>
                            <div className='leading-9'>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Ledger</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Cash Book</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Statement</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Balance Sheet</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Create Invoice</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Create Invoice List</p>
                                </div>
                                <div className='flex items-center'>
                                    <GoDotFill className='text-[20px]' />
                                    <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>All Reports Module Wise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[20%] mt-[20px] xl:mt-0'>
                        <h6 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#000020] mb-[10px]'>Exciting Features</h6>
                        <div className='leading-9'>
                            <div className='flex items-center'>
                                <GoDot className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>SMS integration</p>
                            </div>
                            <div className='flex items-center'>
                                <GoDot className='text-[20px]' />
                                <p className='ml-[8px] font-pops font-regular text-[16px] text-overlay'>Multi User Management</p>
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
        </div>
    )
}


export default AccountingModules