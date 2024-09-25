import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ProductsList = () => {

  const item = [
    {
      name: "SuperShop Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/RDPqZH9/Super-Shop.png',
      language: 'English & Bangla',
      update: '2022-08-02',
      btn: '/supershopdetails',
    },
    {
      name: "Shop, Showroom Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/Y3yjNnS/grocery.jpg',
      language: 'English & Bangla',
      update: '2022-08-02',
      btn: '/cposdetails',
    },
    {
      name: "RMG Shop, Footwear Shop, Brand Shop Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/Tkndfkv/Fashion-Store.png',
      language: 'English & Bangla',
      update: '2022-03-01',
      btn: '/bsposdetails',
    },
    {
      name: "Multiple Branch Management erp Online Software for RMG, Footwear, Brand Shop",
      imageurl: 'https://i.ibb.co.com/qsDdSjK/MultiPos.jpg',
      language: 'English & Bangla',
      update: '2023-03-01',
      btn: '/bsmultibranchposdetails',
    },
    {
      name: "Pharmacy Shop Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/hm7fs5c/Pharmacy-Icon.png',
      language: 'English & Bangla',
      update: '2022-04-17',
      btn: '/pharmaposdetails',
    },
    {
      name: "Tiles & Sanitary Shop Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/hLkY4J1/Tiles-Shop.jpg',
      language: 'English & Bangla',
      update: '2022-04-17',
      btn: '/tilesanitaryposdetails',
    },
    {
      name: "Electronics & Electric Shop Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/gvfxQDd/Electro.jpg',
      language: 'English & Bangla',
      update: '2022-08-02',
      btn: '/electroposdetails',
    },
    {
      name: "Distribution & Dealership Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/qng2SHF/Dealership-R.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/dealerdistributionposdetails',
    },
    {
      name: "Restaurant Billing Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/VTP1c3q/Resturent.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/restaurantposdetails',
    },
    {
      name: "LPG Distribution, Dealership Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/PjDsWnY/LPG.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/lpgposdetails',
    },
    {
      name: "Agro & Poultry Farm Management Online POS Software",
      imageurl: 'https://i.ibb.co.com/3sMwjRL/Poultry.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/agropoultryposdetails',
    },
    {
      name: "Training & Coaching Center Management Online Software With Website",
      imageurl: 'https://i.ibb.co.com/vLczY6K/Training.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/trainingcoachingsoftdetails',
    },
    {
      name: "Education Institute Management Online Software",
      imageurl: 'https://i.ibb.co.com/YpVLPhY/Education.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/educationinstitutesoftdetails',
    },
    {
      name: "Factory Production Management Erp Online Software",
      imageurl: 'https://i.ibb.co.com/g7k35sM/Factory.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/factorysoftdetails',
    },
    {
      name: "Brick Field Manufacturing Management Online Software",
      imageurl: 'https://i.ibb.co.com/XVh8Tb9/brickfield.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/brickfieldsoftdetails',
    },
    {
      name: "Accounting Management Online Software",
      imageurl: 'https://i.ibb.co.com/x5MyRtZ/Accounting.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/accountingsoftdetails',
    },
    {
      name: "Office Management erp Online Software",
      imageurl: 'https://i.ibb.co.com/hBG8mzf/Office.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/officemanagementsoftdetails',
    },
    {
      name: "Hospital & Clinic Management Online Software",
      imageurl: 'https://i.ibb.co.com/VWLd0wy/Hospital-Icon.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/hospitalsoftdetails',
    },
    {
      name: "Diagnostic Center Management Online Software",
      imageurl: 'https://i.ibb.co.com/3N9Ygyx/diagonstic.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/diagnosticsoftdetails',
    },
    {
      name: "Stock Inventory Management Online Software",
      imageurl: 'https://i.ibb.co.com/Fzs2Wtv/Stock.png',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/stockinventorysoftdetails',
    },
    {
      name: "ISP Billing Management Online Software",
      imageurl: 'https://i.ibb.co.com/vXjjF9r/isp.jpg',
      language: 'English & Bangla',
      update: '2024-08-02',
      btn: '/ispbillingsoftdetails',
    },
  ];

  return (
    <div className='bg-sky-50 py-[50px] xl:py-[70px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <h3 className='font-pops font-bold text-[35px] xl:text-[64px] text-[#1C1E53] xl:text-center md:mb-0'>Ready Products List</h3>
        <p className='font-pops font-medium text-[16px] md:text-[20px] xl:text-[25px] text-[#000020] xl:text-center md:mb-0 mt-[20px] xl:w-[928px] xl:ml-[312px]'>We have develped some software as ready product for you. The software is ready to use just order and enjoy with in a day!</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[50px]'>
          {
            item.map((data) => (
              <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                <div className=''>
                  <img src={data.imageurl} alt="" className='w-[100px] h-[100px] mx-auto rounded-full mb-[10px] bg-transparent' />
                  <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>{data.name}</h5>
                  <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: {data.language}</p>
                  <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: {data.update}</p>
                </div>
                <Link to={data.btn}>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
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

export default ProductsList