'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import banner1 from '@/assets/images/banner1.png'
import banner2 from '@/assets/images/banner2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function Banner() {
  const data = {
    banner: [
      {
        image: banner1,
        title: 'Công TY TNHH'
      },
      {
        image: banner2,
        title: 'Công TY TNHH Hoa San'
      }
    ]
  }

  const featureData = [
    {
      title: 'Tầm Nhìn',
      desc: 'Trở thành nhà sản xuất hàng đầu trong lĩnh vực giày, mũ, ủng bảo hộ lao động',
      number: '01'
    },
    {
      title: 'Sứ Mệnh',
      desc: 'Đem lại các sản phẩm với giá thành hợp lý và không ảnh hưởng tới môi trường',
      number: '02'
    },
    {
      title: 'Giá Trị Cốt Lõi',
      desc: 'Trở thành nhà sản xuất hàng đầu trong lĩnh vực giày, mũ, ủng bảo hộ lao động',
      number: '03'
    }
  ]

  const aboutData = {
    title: 'Về Chúng Tôi',
    desc1: 'Công ty TNHH Hoa san',
    desc2: '30 năm một hành trình'
  }

  return (
    <header className='banner '>
      <Swiper className='mySwiper slideBanner'>
        {data?.banner?.map((data, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image src={data?.image} quality={100} className='object-cover w-full md:!h-[34.5rem] absolute' />
            <h2 className='text-center titleBanner font-sans md:text-[3.75rem] font-[800] tracking-[-0.1875rem] text-[#fff] absolute z-1'>
              {data?.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='feature_banner flex flex-col md:gap-[0.75rem] md:px-[2.25rem]'>
        <div className='feature_container flex md:gap-[5.19rem]'>
          {featureData?.map((data, index) => (
            <div key={index} className='feature_item flex flex-col md:pt-[1.5rem]'>
              <div className='line md:mb-[0.81rem] md:h-[0.0625rem] bg-[#fff] opacity-[0.17] md:w-full'></div>
              <div className='feature_num flex justify-between items-center'>
                <h3 className='text-[#fff] md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] uppercase '>
                  {data?.title}
                </h3>
                <span className='text-[#fff] opacity-10 md:text-[3rem] font-[800] leading-[150%]'>{data?.number}</span>
              </div>
              <p className='text-[#fff] md:text-[1rem] leading-[1.5] font-sans '>{data?.desc}</p>
            </div>
          ))}
        </div>

        <div className='md:flex hidden'>
          <span className='whitespace-nowrap'>{aboutData?.title}</span>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false
              }}
              modules={[Autoplay]}
              className='mySwiper'
            >
              <SwiperSlide className='w-[70vw]'>
                <div className='flex gap-[1.37vw]'>
                  <p>{aboutData?.desc1}</p>
                  <span>.</span>
                  <p>{aboutData?.desc2}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-[70vw]'>
                <div className='flex gap-[1.37vw]'>
                  <p>{aboutData?.desc1}</p>
                  <span>.</span>
                  <p>{aboutData?.desc2}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Banner
