import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaFacebookF, FaSearchLocation } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


const Contact = () => {

    // FORM VALIDATION STATES
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [fullNameerror, setFullNameerror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [mobilenumbererror, setMobilenumbererror] = useState('');
    const [subjecterror, setSubjecterror] = useState('');
    const [messageerror, setMessageerror] = useState('');

    // Input Handlers
    const handleFullname = (e) => {
        setFullName(e.target.value);
        setFullNameerror('');
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerror('');
    };
    const handleMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setMobilenumbererror('');
    };
    const handleSubject = (e) => {
        setSubject(e.target.value);
        setSubjecterror('');
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
        setMessageerror('');
    };

    // Form submission and validation
    const form = useRef();

    const validateForm = () => {
        let isValid = true;

        if (!fullName) {
            setFullNameerror('Full Name is required !');
            isValid = false;
        }
        if (!email) {
            setEmailerror('Email is required !');
            isValid = false;
        }
        if (!mobileNumber) {
            setMobilenumbererror('Mobile Number is required !');
            isValid = false;
        }
        if (!subject) {
            setSubjecterror('Subject is required !');
            isValid = false;
        }
        if (!message) {
            setMessageerror('Your Message is required !');
            isValid = false;
        }

        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form before sending email
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        emailjs.sendForm('service_7yyv3a3', 'template_1symqr9', form.current, 'OY0jwwmXfBYd54cTI')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <div className='bg-[#F5F7FA] pt-[170px] xl:pt-[220px] pb-[50px] xl:pb-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <p className='font-pops font-bold text-[25px] xl:text-[45px] text-[#1C1E53] text-center mb-[8px]'>QUICK CONTACT NOW</p>
                <p className='font-pops font-medium text-[18px] xl:text-[20px] text-overlay text-center mb-[30px] xl:mb-[50px]'>We serve all over Bangladesh and in different countries of the Middle East..</p>
                <div className='xl:flex xl:justify-between'>
                    <form ref={form} onSubmit={sendEmail} className='xl:w-[60%] bg-white py-[30px] px-[5px] xl:px-[30px]'>
                        <p className='font-pops font-semibold text-[25px] xl:text-[35px] text-overlay mb-[30px]'>Drop Us a Message</p>

                        <div className='flex mb-[20px] gap-[5px] xl:gap-[30px]'>
                            <div className='w-full'>
                                <input name='FullName' value={fullName} onChange={handleFullname} type="text" placeholder='Your Full Name' className='border outline-none p-[15px] rounded mr-[5px] xl:mr-[30px] w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                                {fullNameerror && <p className='font-kanit text-[12px] md:text-[18px] text-[#FFB800] mt-[5px]'>{fullNameerror}</p>}
                            </div>
                            <div className='w-full'>
                                <input name='MobileNumber' value={mobileNumber} onChange={handleMobileNumber} type="text" placeholder='Mobile Number' className='border outline-none p-[15px] rounded w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                                {mobilenumbererror && <p className='font-kanit text-[12px] md:text-[18px] text-[#FFB800] mt-[5px]'>{mobilenumbererror}</p>}
                            </div>
                        </div>
                        <div className='flex mb-[20px] gap-[5px] xl:gap-[30px]'>
                            <div className='w-full'>
                                <input name='Email' type="email" value={email} onChange={handleEmail} placeholder='Email Address' className='border outline-none p-[15px] rounded mr-[5px] xl:mr-[30px] w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                                {emailerror && <p className='font-kanit text-[12px] md:text-[18px] text-[#FFB800] mt-[5px]'>{emailerror}</p>}
                            </div>
                            <div className='w-full'>
                                <input name='Subject' value={subject} onChange={handleSubject} type="text" placeholder='Subject' className='border outline-none p-[15px] rounded w-full placeholder:font-pops placeholder:font-medium placeholder:text-[14px]' />
                                {subjecterror && <p className='font-kanit text-[12px] md:text-[18px] text-[#FFB800] mt-[5px]'>{subjecterror}</p>}
                            </div>
                        </div>
                        <textarea name='Message' value={message} onChange={handleMessage} placeholder='Your Message' cols="30" rows="5" className='font-pops font-medium text-[14px] xl:text-[18px] border w-full outline-none p-[15px] rounded'></textarea>
                        {messageerror && <p className='font-kanit text-[12px] md:text-[18px] text-[#FFB800] mt-[5px]'>{messageerror}</p>}
                        <button type='submit' value='Send' className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] mt-[30px] bg-secondary rounded w-full'>Send Message</button>
                    </form>
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