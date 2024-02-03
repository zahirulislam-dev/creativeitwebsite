import React from 'react'
import SuperShop from "../../assets/images/SuperShop.png"
import FashionStore from "../../assets/images/FashionStore.png"
import MultiPos from "../../assets/images/MultiPos.jpg"
import TilesShop from "../../assets/images/TilesShop.jpg"
import DealershipR from "../../assets/images/DealershipR.png"
import Resturent from "../../assets/images/Resturent.png"
import LPG from "../../assets/images/LPG.png"
import Poultry from "../../assets/images/Poultry.jpg"
import Training from "../../assets/images/Training.avif"
import Education from "../../assets/images/Education.png"
import Factory from "../../assets/images/Factory.png"
import BrickField from "../../assets/images/BrickField.jpg"
import Accounting from "../../assets/images/Accounting.png"
import Office from "../../assets/images/Office.png"
import HospitalIcon from "../../assets/images/HospitalIcon.jpg"
import Diagonstick from "../../assets/images/Diagonstick.png"
import Stock from "../../assets/images/Stock.png"
import Isp from "../../assets/images/Isp.png"
import Electro from "../../assets/images/Electro.avif"
import PharmacyIcon from "../../assets/images/PharmacyIcon.png"
import shop from "../../assets/images/shop.jpg"
import { FaDownload } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReadyProductsList = () => {
    return (
        <div className='bg-[#F5F7FA] pt-[210px] pb-[30px] md:pt-[170px] xl:pt-[235px] md:pb-[50px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <h5 className='font-pops font-bold text-[20px] md:text-[40px] xl:text-[64px] [#1C1E53]] mb-[20px] text-center'>Readymade Products</h5>
                <h6 className='font-pops font-semibold text-[18px] text-center md:text-[25px] xl:text-[40px] text-[#1C1E53]'>List Of Our Readymade Softwares</h6>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={SuperShop} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px] bg-transparent' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>SuperShop Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any Supershop/ Showroom. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='md:flex md:justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[16px] md:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-08-02</p>
                            <p className='font-pops font-bold text-[16px] md:text-[18px] text-[#1C1E53] pt-[10px] ml-0 md:ml-[20px]'>Version: V-2.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={shop} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>cPOS Shop/Showroom Accounting Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] md:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any shop/ showroom. For an example: Grocery, Deparment, Hardware, Cosmetics, Furniture, Parts, Retail & Whole Sale all shop etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='md:flex md:justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-08-02</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-0 md:ml-[20px]'>Version: V-2.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={FashionStore} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Fashion House, Footwear Store, Brand Shop Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any ready garments shop, boutick house shop, footwear shop. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='md:flex md:justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[16px] md:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-03-01</p>
                            <p className='font-pops font-bold text-[16px] md:text-[18px] text-[#1C1E53] pt-[10px] ml-0 md:ml-[20px]'>Version: V-1.0.0</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={MultiPos} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Fashion House, Footwear Store, Brand Shop Multiple Branch Management erp Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any ready garments shop, boutick house shop, footwear shop. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2023-03-01</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-0 xl:ml-[20px]'>Version: V-1.0.0</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={PharmacyIcon} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Pharmacy Shop Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this software in Pharmacy shop/ showroom, general stores, super shops, department stores. You can sale medicine piece, stripe & box system. This software will go a long way in making your business easier and more dynamic. It has a user-friendly design, in the Bengali / English language.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-04-17</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[8px] xl:ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={TilesShop} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Tiles & Sanitary Shop Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this software in tiles and sanitary shop and dealer points. Many more features include purchase, sale, stock, purchase, seller, staff, user & all-important report. This software will go a long way in making your business easier and more dynamic. It has a user-friendly design, in the Bengali / English language.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-04-17</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[8px] xl:ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={Electro} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Electronics & Electric Shop Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this software in electronics, mobile showrooms, computer sales and servicing shop. Many more features include purchase, sale, stock, purchase, seller, staff, user & all-important reports. This software will go a long way in making your business easier and more dynamic. It has a user-friendly design, in the Bengali / English language.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-08-02</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[8px] xl:ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={DealershipR} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Dealership & Distribution Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>Our distribution and dealership software is a powerful online web application that streamlines the entire process of managing distribution and dealership operations. With our software, you can easily manage inventory, track sales, monitor orders, and handle other critical tasks all from one central location.Our software is designed to meet the specific needs of distribution and dealership businesses, offering a range of features that make managing your operations easier and more efficient. For example, our inventory management tools allow you to track and manage inventory levels in real-time, ensuring that you always have the right products on hand to meet customer demand.Our software also includes robust sales tracking and order management features that enable you to monitor sales performance, process orders, and generate detailed reports on sales trends and performance metrics. With our software, you can identify opportunities for growth, optimize your sales strategies, and make data-driven decisions that drive business success.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2023-01-28</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[8px] xl:ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={Resturent} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Restaurant Billing Management Online POS Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any restaurant, community center, convention hall, cafe, coffee shop etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. the software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-04-17</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[8px] xl:ml-[20px]'>Version: V-2.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='xl:mr-[30px]'>
                                    <img src={LPG} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>LPG Business Dealership, Distribution Accounting Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at LPG Dealership & Distribution business. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2023-10-05</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Poultry} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Agro & Poultry Farm Business Accounting Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at Agro farm, Poultry farm. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2023-10-01</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Training} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Training & Coaching Center Management Online Software With Website</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at Computer training center, Coaching center, Language trainging center, Jim center, Martual training center very easily. Training Center Management Software. Admission Fees Receive Course & Batch Information ID Card and Certificate Attendance Expenditure Instructor Profile Notice, News and Blog Publish SMS Alert Reports</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center xl:border-t-2'>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-04-01</p>
                            <p className='font-pops font-bold text-[16px] xl:text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-2.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Education} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Education Institute Management Online Software</h5>
                                    <p className='font-pops font-medium text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any education institute like school, college, madrasah, kindergarten etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. the software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-2.0.1</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Factory} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Factory, Production Accounting Management Erp Online Software</h5>
                                    <p className='font-pops font-medium text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any manufacturing business solution company, Production Factory, Furniture factory, Food factory, Chemical factory, Electric & Electronics item production factory etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={BrickField} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Brick Field Manufacturing Accounting Management Online Software</h5>
                                    <p className='font-pops font-medium text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at Brick Field. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Accounting} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Accounting Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any business organisations for accounting. Ledger, Cash Book, Statement, Balance Sheet etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. the software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Office} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Office Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any office. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='flex-end'>
                                <Link to='/OfficeManagementSoftDetails'>
                                    <div className='flex items-center bg-[#5F35F5] py-[14px] px-[20px] hover:bg-green-500 transition duration-300 ease-in-out rounded text-center'>
                                        <FaDownload className='text-white text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex items-center bg-[#000020] py-[14px] px-[20px] hover:bg-red-500 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex items-center bg-[#4CAF4F] py-[14px] px-[20px] hover:bg-[#5656f6] transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2021-12-01</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.0.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={HospitalIcon} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Hospital/ Clinic Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>This software is designed to help medical professionals manage their daily tasks, streamline processes, and improve patient care. These software programs can include electronic medical records (EMRs), patient scheduling systems, billing and insurance management tools, and clinical decision support systems. They can also help improve patient outcomes by providing doctors with real-time access to patient data and medical histories, as well as facilitating communication and collaboration between healthcare professionals. Overall, hospital, diagnostic, and clinic software are essential tools for healthcare organizations looking to provide high-quality care and streamline their operations.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-08-13</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Diagonstick} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Diagnostic Center Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>This software is designed to help Diagnostic professionals manage their daily tasks, streamline processes, and improve patient care. These software programs can include electronic medical records (EMRs), patient scheduling systems, billing and insurance management tools, and clinical decision support systems. They can also help improve patient outcomes by providing doctors with real-time access to patient data and medical histories, as well as facilitating communication and collaboration between healthcare professionals. Overall, hospital, diagnostic, and clinic software are essential tools for healthcare organizations looking to provide high-quality care and streamline their operations.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-08-13</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Stock} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Stock Inventory Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at any Products raw material store. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-1.01.01</p>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded mt-[30px]'>
                    <div>
                        <div className='xl:flex xl:justify-between'>
                            <div className='xl:flex'>
                                <div className='mr-0 xl:mr-[30px]'>
                                    <img src={Isp} alt="" className='w-[100px] h-[100px] rounded-full mb-[10px]' />
                                </div>
                                <div>
                                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] mb-[20px]'>Internet and Cable Operator Billing Management Online Software</h5>
                                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:mb-[50px] xl:w-[1032px] leading-9'>You can use this version of the software at internet business & disc line business. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 leading-5'>Language: English & Bangla</p>
                                    <p className='font-pops font-bold text-[16px] xl:text-[18px] text-red-500 mt-[20px] mb-[20px] leading-5'>Network Mode: Online <span className='ml-[8px]'>Responsive</span></p>
                                </div>
                            </div>
                            <div className='xl:flex-end'>
                                <Link to='/supershopDetails'>
                                    <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded'>
                                        <FaDownload className='text-white text-[18px] md:text-[20px] xl:text-[25px] mr-[8px]' />
                                        <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Details</button>
                                    </div>
                                </Link>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <HiPhoto className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>ScreenShots</button>
                                </div>
                                <div className='flex justify-center items-center bg-[#4364F7] py-[14px] px-[20px] w-full xl:w-[250px] hover:bg-green-600 transition duration-300 ease-in-out rounded mt-[20px]'>
                                    <FaVideo className='text-white text-[25px] mr-[8px]' />
                                    <button className='font-pops font-bold text-[18px] md:text-[20px] text-white'>Videos</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-end items-center border-t-2'>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px]'>Last Update: 2022-05-21</p>
                            <p className='font-pops font-bold text-[18px] text-[#1C1E53] pt-[10px] ml-[20px]'>Version: V-3.01.01</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyProductsList