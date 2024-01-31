import React from 'react'
import ClientLogo1 from '../../assets/images/ClientLogo1.png'
import ClientLogo2 from '../../assets/images/ClientLogo2.png'
import ClientLogo3 from '../../assets/images/ClientLogo3.png'
import ClientLogo4 from '../../assets/images/ClientLogo4.png'
import ClientLogo5 from '../../assets/images/ClientLogo5.png'
import ClientLogo6 from '../../assets/images/ClientLogo6.png'

const ClientsLogo = () => {
    return (
        <div className='bg-[#000020] py-[50px] xl:py-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <h4 className='font-pops font-bold text-[35px] xl:text-[64px] text-[#fff] mb-[50px] xl:text-center'>Our Clients Logo</h4>
                <div className='md:flex md:flex-wrap xl:justify-between'>
                    <img src={ClientLogo1} alt="" />
                    <img src={ClientLogo2} alt="" />
                    <img src={ClientLogo3} alt="" />
                    <img src={ClientLogo4} alt="" />
                    <img src={ClientLogo5} alt="" />
                    <img src={ClientLogo6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClientsLogo