import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const AccountingModules = () => {
    return (
        <div className='bg-sky-50 py-[100px]'>
            <div className='max-w-container mx-auto'>
                <div className='flex'>
                    <div className='flex'>
                        <div className='leading-9 mr-[200px]'>
                            <h6 className='font-pops font-bold text-[28px] text-[#000020] mb-[20px]'>Modules</h6>
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
                    <div className='leading-9'>
                        <h6 className='font-pops font-bold text-[28px] text-[#000020] mb-[20px]'>Exciting Features</h6>
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
    )
}


export default AccountingModules