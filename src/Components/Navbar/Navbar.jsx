import React, { useEffect, useRef, useState } from 'react'
import LogoFour from '../../assets/images/LogoFour.png'
import { FaBars } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Dropdown from '../Layouts/Dropdown'
import Flex from '../Layouts/Flex'
import Container from '../Layouts/Container'

const Navbar = () => {

    const serviceRef = useRef();
    const productRef = useRef();
    const languageRef = useRef();

    const [serviceShow, setServiceShow] = useState(false);
    const [productShow, setProductShow] = useState(false);
    const [languageShow, setLanguageShow] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (serviceRef.current.contains(e.target)) {
                setServiceShow(true);
            } else {
                setServiceShow(false);
            }
            if (productRef.current.contains(e.target)) {
                setProductShow(true);
            } else {
                setProductShow(false);
            }
            if (languageRef.current.contains(e.target)) {
                setLanguageShow(true);
            } else {
                setLanguageShow(false);
            }
        })
    }, []);

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='bg-white py-[15px] fixed top-[58px] sm:top-[41px] w-full shadow z-[9999]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='w-[20%]'>
                        <img src={LogoFour} alt="" />
                    </div>
                    <div className='flex justify-end'>
                        <div onClick={handleClick} className='block md:hidden'>
                            {
                                show == true ? <div className='bg-[#4364F7] p-[8px] rounded'><RxCross2 className="text-white text-2xl" /></div> : <div className='bg-[#4364F7] p-[8px] rounded'><FaBars className="text-white text-2xl" /></div>
                            }
                        </div>
                        <div className='w-[80%]'>
                            <div className={`md:flex justify-end items-center xl:gap-x-[25px] md:gap-x-[8px] md:static w-full absolute top-[-200px] left-0 px-4 md:px-0 z-[999] ${show == true ? 'top-[70px] bg-white w-full py-[20px] md:bg-primary md:py-0' : 'top-[-485px] bg-white py-[20px] md:bg-white md:py-0'}`}>
                                <Link to='/'>
                                    <div className='flex items-center mb-[10px] md:mb-0 cursor-pointer'>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Home</p>
                                    </div>
                                </Link>
                                <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Link to='/AboutCreativeIt'><p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>About</p></Link>
                                </div>
                                <Dropdown dropRef={serviceRef} className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Flex>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Services</p>
                                        <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    </Flex>
                                    {serviceShow && (
                                        <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[300px] sm:w-[350px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                            <Link to='/WebDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Software Development</p></Link>
                                            <Link to='/WebDesignDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Web Design & Development</p></Link>
                                            <Link to='/WebAppDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Web App Development</p></Link>
                                            <Link to='/MobileAppDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Mobile App Development</p></Link>
                                            <Link to='/DomainRegistrationDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Domain Registration</p></Link>
                                            <Link to='/PremiumHostingDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Premium Web Hosting</p></Link>
                                            <Link to='/BulkSmsDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Bulk SMS</p></Link>
                                        </ul>
                                    )}
                                </Dropdown>
                                <Dropdown dropRef={productRef} className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Flex>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Products</p>
                                        <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    </Flex>
                                    {productShow && (
                                        <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[300px] sm:w-[350px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                            <Link to='/ExploreReadyProducts'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Ready POS Software</p></Link>
                                            <Link to='/WebsitePackageDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Website Package</p></Link>
                                        </ul>
                                    )}
                                </Dropdown>
                                <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Link to='/ContactDetails'><p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Contact</p></Link>
                                </div>
                                <Dropdown dropRef={languageRef} className='cursor-pointer'>
                                    <Flex>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Language</p>
                                        <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    </Flex>
                                    {languageShow && (
                                        <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[300px] sm:w-[350px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                            <Link to='/ExploreReadyProducts'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>English</p></Link>
                                            <Link to='/WebsitePackageDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Bangla</p></Link>
                                        </ul>
                                    )}
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar