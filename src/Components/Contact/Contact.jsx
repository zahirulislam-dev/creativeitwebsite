import React from 'react'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaFacebookF, FaSearchLocation } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


const Contact = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_7yyv3a3', 'template_1symqr9', form.current, 'OY0jwwmXfBYd54cTI')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <div className='bg-[#F5F7FA] pt-[170px] xl:pt-[220px] pb-[50px] xl:pb-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <p className='font-pops font-bold text-[25px] xl:text-[45px] text-[#1C1E53] text-center mb-[8px]'>QUICK CONTACT NOW</p>
                <p className='font-pops font-medium text-[18px] xl:text-[20px] text-overlay text-center mb-[30px] xl:mb-[50px]'>We serve all over Bangladesh and in different countries of the Middle East..</p>
                <div className='xl:flex xl:justify-between'>
                    <div className='xl:w-[60%] bg-white py-[30px] px-[5px] xl:px-[30px]'>
                        <p className='font-pops font-semibold text-[25px] xl:text-[35px] text-overlay mb-[30px]'>Drop Us a Message</p>

                        {/* EMAILJS CODE */}

                        {/* <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form> */}

                        <div className='flex mb-[20px]'>
                            <input type="text" placeholder='Your Full Name' className='border outline-none p-[15px] rounded mr-[5px] xl:mr-[30px] w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                            <input type="text" placeholder='Mobile Number' className='border outline-none p-[15px] rounded w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                        </div>
                        <div className='flex mb-[20px]'>
                            <input type="email" placeholder='Email Address' className='border outline-none p-[15px] rounded mr-[5px] xl:mr-[30px] w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                            <input type="text" placeholder='Subject' className='border outline-none p-[15px] rounded w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                        </div>
                        <textarea placeholder='Your Comments' cols="30" rows="5" className='font-pops font-medium text-[14px] xl:text-[18px] border w-full outline-none p-[15px] rounded'></textarea>
                        <button className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] mt-[30px] bg-secondary rounded w-full'>Send</button>
                    </div>
                    <div className='xl:w-[40%] bg-white py-[30px] px-[5px] xl:px-[30px] ml-0 xl:ml-[50px] mt-[20px] xl:mt-0'>
                        <p className='font-pops font-semibold text-[25px] xl:text-[35px] text-overlay mb-[30px]'>Contact Information</p>
                        <div className='flex items-center mb-[20px]'>
                            <FaMobileAlt className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px] mr-[3px] xl:mr-[10px]'>Sales: +88 01999 878 862</p>
                            <IoLogoWhatsapp className='xl:text-[25px] text-secondary' />
                        </div>
                        <div className='flex items-center mb-[20px]'>
                            <FaMobileAlt className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px] mr-[3px] xl:mr-[10px]'>Support: +88 01999 878 862</p>
                            <IoLogoWhatsapp className='xl:text-[25px] text-secondary' />
                        </div>
                        <div className='flex items-center mb-[20px]'>
                            <MdOutlineMarkEmailRead className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px]'>Email: info@creativeit.com</p>
                        </div>
                        <div className='flex items-center mb-[20px]'>
                            <MdOutlineMarkEmailRead className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px]'>Email: 1stcreativeitbdt@gmail.com</p>
                        </div>
                        <div className='flex items-center mb-[20px]'>
                            <FaGlobe className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px]'>Website: creativeit.com.bd</p>
                        </div>
                        <div className='flex align-baseline'>
                            <FaSearchLocation className='xl:text-[20px] text-secondary' />
                            <p className='font-pops font-medium text-[14px] xl:text-[20px] text-overlay ml-[3px] xl:ml-[10px] w-[313px] xl:w-[485px]'>Contact Address: Kassaf Shopping Center (5th Floor), Chittagong Road, Narayanganj, Dhaka, Bangladesh.</p>
                        </div>
                        <div className='flex items-center mt-[30px] xl:mt-[65px]'>
                            <div className='mr-[5px] xl:mr-[30px]'>
                                <p className='font-pops font-medium text-[16px] xl:text-[25px] text-overlay'>Follow Us on</p>
                            </div>
                            <div className='flex justify-between items-center gap-x-[10px] sm:gap-x-[15px] md:gap-x-[20px] xl:gap-x-[40px]'>
                                <div className='bg-secondary rounded-full p-[8px]'>
                                    {/* FACEBOOK ICON */}
                                    <a href="https://www.facebook.com/creativeitbdpos"><FaFacebookF className='text-[16px] xl:text-[20px] text-white' /></a>
                                </div>
                                <div className='bg-secondary rounded-full p-[8px]'>
                                    {/* FACEBOOK ICON */}
                                    <a href=""><BsTwitter className='text-[16px] xl:text-[20px] text-white' /></a>
                                </div>
                                <div className='bg-secondary rounded-full p-[8px]'>
                                    {/* FACEBOOK ICON */}
                                    <a href=""><FaLinkedinIn className='text-[16px] xl:text-[20px] text-white' /></a>
                                </div>
                                <div className='bg-secondary rounded-full p-[8px]'>
                                    {/* YOUTUBE ICON */}
                                    <a href="https://www.youtube.com/@creativeitbdpos"><IoLogoYoutube className='text-[16px] xl:text-[20px] text-white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact