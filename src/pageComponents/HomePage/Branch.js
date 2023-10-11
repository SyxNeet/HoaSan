'use client'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import imgBranch from '@/assets/images/imgBranch.png'
import Image from 'next/image'

function Branch() {
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
    <div className=''>
        <div className='feature_banner flex flex-col md:gap-[0.75rem] md:px-[2.25rem] md:mx-[9.36rem]'>
            <div className='feature_container max-md:flex-col flex md:gap-[5.19rem]'>
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

            <div className='md:flex hidden gap-[2rem]'>
                <span className='whitespace-nowrap text-[#fff] text-[1.25rem] font-700 leading-[1.75rem] tracking-[-0.0625rem]'>{aboutData?.title}</span>
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
        <div className='flex flex-col mt-[1.31rem] justify-center items-center gap-[0.94rem] relative md:top-[0] top-[-35%] md:px-[9.36rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[1.375rem] md:h-[1.375rem] w-[1.125rem] h-[1.125rem]' viewBox="0 0 24 25" fill="none">
            <path d="M1 1L12 12L23 1" stroke="#159FE0" stroke-width="2"/>
            <path d="M1 12L12 23L23 12" stroke="#159FE0" stroke-width="2"/>
            </svg>
            <span className='text-center text-textPrimary md:text-[0.75rem] text-[0.625rem] leading-[1.125rem] uppercase'>Cuộn Xuống</span>       
        </div>
        <div className='flex flex-col gap-[0.56rem] md:pl-[9.36rem]'>
            <h5 className='text-textPrimary text-[0.875rem] leading-[1.5] uppercase tracking-[0.02625rem]'>Về Thương Hiệu Hoa San</h5>
            <div className='md:grid flex grid-cols-3 md:gap-x-[6.94rem] md:gap-y-[2.5rem] grid-rows-2'>
                <div className='col-start-1 row-start-1 row-end-2 flex flex-col md:gap-[2.13rem]'>
                    <h2 className='text-[#0774B2] text-[2.8125rem] font-[800] leading-[3.375rem] tracking-[-0.14063rem]'>Khẳng định thương hiệu Trên thị trường Quốc tế</h2>   
                    <p className='text-textPrimary md:text-[1.125rem] leading-[1.5]'>Lorem ipsum dolor sit amet consectetur. Posuere mauris enim mattis neque ut est vel commodo arcu. Orci euismod quam amet eget commodo amet lectus. </p>
                </div>       
                <div className='col-start-1 row-start-2 row-end-3 grid grid-cols-2 grid-rows-2 md:gap-x-[1.88rem] md:gap-y-[6.19rem]'>
                        <div className='flex flex-col'>
                            <div className='flex md:gap-[0.56rem]'>
                                <span>18</span>
                                <span>Tỷ VND</span>
                            </div>
                            <p>Tổng số vốn điều lệ </p>
                        </div>
                </div>
                <div className='md:w-full md:h-[40.625rem] row-start-1 row-end-3 col-start-1 col-end-4 md:col-start-2 md:col-end-4'>
                    <Image src={imgBranch} quality={100} className='object-cover w-full h-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Branch