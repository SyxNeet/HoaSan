'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import banner1 from '@/assets/images/banner1.png'
import banner2 from '@/assets/images/banner2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
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

  

  return (
    <header className='banner '>
      <Swiper className='mySwiper slideBanner'>
        {data?.banner?.map((data, index) => (
          <SwiperSlide key={index} className='relative'>
            <Image src={data?.image} quality={100} className='object-cover w-full md:!h-[62.5vh] !h-[19.5rem] absolute top-0' />
            <h1 className='text-center titleBanner font-sans md:text-[3.75rem] text-[1.375rem] font-[800] tracking-[-0.1875rem] text-[#fff] absolute z-1 top-[13rem]'>
              {data?.title}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </header>
  )
}

export default Banner
