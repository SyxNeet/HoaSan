'use client'
import React from 'react'
import { useRef, useState } from 'react'
import imgBranch from '@/assets/images/imgBranch.png'
import Image from 'next/image'
import Count from '@/components/Common/Count'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";
function Branch() {
    const scrollRef = useRef()
    const handleClick = (scrollRef) => {
    if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
        });
    }
};
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

      const arrText = new Array(8).fill({title: 'Về Chúng Tôi',
        desc1: 'Công ty TNHH Hoa san',
        desc2: '30 năm một hành trình'})
  return (
    <section className='max-md:px-[0.63rem] relative'>
        
        <div className='feature_banner md:overflow-hidden relative z-[10] flex flex-col md:gap-[0.75rem] md:px-[2.25rem] md:mx-[12.36rem]'>
            <div className='feature_container max-md:flex-col flex md:gap-[5.19rem]'>
            {featureData?.map((data, index) => (
                <div key={index} className='feature_item flex flex-col md:pt-[1.5rem]'>
                    <div className='line md:mb-[0.81rem] h-[0.0625rem] bg-[#fff] opacity-[0.17] md:w-full'></div>
                    <div className='feature_num flex justify-between items-center'>
                        <h3 className='text-[#fff] md:text-[0.875rem] text-[0.75rem] font-mark leading-[1.5] tracking-[0.02625rem] uppercase '>
                        {data?.title}
                        </h3>
                        <span className='text-[#fff] opacity-10 md:text-[3rem] text-[2rem] font-[800] font-averta leading-[150%]'>{data?.number}</span>
                    </div>
                    <p className='text-[#fff] md:text-[1rem] text-[0.875rem] leading-[1.5] font-averta '>{data?.desc}</p>
                    {index===0 ? (<div className='flex gap-[0.75rem] items-center md:hidden mt-[0.81rem]'>
                    <span className='whitespace-nowrap text-[#fff] md:text-[1.25rem] text-[1rem] font-700 leading-[1.75rem] tracking-[-0.0625rem]'>{aboutData?.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.6875rem] h-[0.8125rem]' viewBox="0 0 11 14" fill="none">
                        <path d="M11 7L3.14286 0.5L3.14286 5.375L0 7L3.14286 8.625L3.14286 13.5L11 7Z" fill="white"/>
                    </svg>
               </div>) : ('')}
                </div>
            ))}
            </div>

            <div className='md:flex hidden gap-[2rem] mt-[2.14rem] pb-[0.9rem] items-center'>
               <div className='flex gap-[0.75rem] items-center'>
                    <span className='whitespace-nowrap text-[#fff] md:text-[1.25rem] text-[1rem] font-700 leading-[1.75rem] tracking-[-0.0625rem]'>{aboutData?.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.6875rem] h-[0.8125rem]' viewBox="0 0 11 14" fill="none">
                        <path d="M11 7L3.14286 0.5L3.14286 5.375L0 7L3.14286 8.625L3.14286 13.5L11 7Z" fill="white"/>
                    </svg>
               </div>
                <div>
                    <Marquee 
                        speed={50}
                        delay={0}
                        loop={0}
                    >
                         {arrText?.map((item, index) => (
                            <div key={index} className="!w-fit leading-[1.75rem] tracking-[0.1rem] font-[900] uppercase md:text-[2rem]">
                                <div className='flex gap-[1.37rem] text-[#fff] textSlide font-averta'>
                                    <p>{aboutData?.desc1}</p>
                                    <span>.</span>
                                    <p className='md:mr-[1rem]'>{aboutData?.desc2} </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
        <div
            onClick={()=>handleClick(scrollRef)} 
            className='flex flex-col md:mb-[5rem] mb-[2.63rem] justify-center items-center gap-[0.94rem] relative md:top-[0] top-[-35%] md:px-[12.36rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" className='scrollBanner md:w-[1.375rem] md:h-[1.375rem] w-[1.125rem] h-[1.125rem]' viewBox="0 0 24 25" fill="none">
            <path d="M1 1L12 12L23 1" stroke="#159FE0" stroke-width="2"/>
            <path d="M1 12L12 23L23 12" stroke="#159FE0" stroke-width="2"/>
            </svg>
            <span className='text-center text-textPrimary md:text-[0.75rem] text-[0.625rem] leading-[1.125rem] uppercase'>Cuộn Xuống</span>       
        </div>
        <div className='flex flex-col gap-[0.56rem] md:pl-[12.36rem]'>
            <h5 className='text-textPrimary md:text-[0.875rem] text-[0.6875rem] leading-[1.5] uppercase tracking-[0.02625rem]'>Về Thương Hiệu Hoa San</h5>
            <div className='md:grid flex flex-col grid-cols-5  md:gap-x-[1rem] md:gap-y-[0] grid-rows-2'>
                <div className='col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col md:gap-[2.13rem]'>
                    <div className='flex flex-col text-[#0774B2] text-[1.75rem] md:text-[2.8125rem] font-[800] md:leading-[3.375rem] tracking-[-0.14063rem]'>
                        <h2>Khẳng định thương hiệu </h2>   
                        <h2>Trên thị trường Quốc tế</h2>   
                    </div>
                    <p className='text-textPrimary md:text-[1.125rem] md:w-[32rem] leading-[1.5]'>Lorem ipsum dolor sit amet consectetur. Posuere mauris  enim mattis neque ut est vel commodo arcu. Orci euismod quam amet eget commodo amet lectus. </p>
                </div> 
                <div className='md:w-full md:h-[39.625rem] row-start-1 row-end-3 col-start-3 col-end-5 md:col-start-3 md:col-end-6'>
                    <Image src={imgBranch} quality={100} className='w-full h-full object-cover' />
                </div>      
                <div className='col-start-1 relative md:translate-y-[-20%] col-end-3 row-start-2 row-end-3 grid grid-cols-2 grid-rows-2 md:gap-y-[0] md:gap-x-[2rem]'>
                        <Count num={'18'} text={'Tỷ VND'} desc={'Tổng số vốn điều lệ tính đến 2023'} />
                        <Count num={'18'} text={'Triệu'} desc={'Sản lượng sản phẩm được sản xuất mỗi năm'} />
                        <Count num={'30'} text={'Tỉnh Thành'} desc={'Số lượng cơ sở sản xuất & Đại lý phân phối'} />
                        <Count num={'01'} text={'ha'} desc={'Diện tích kho xưởng của Hoa San'} />
                </div>
                
            </div>
            <div className='md:pr-[2.12rem] max-md:mt-[1.5rem] max-md:mb-[3.75rem] md:translate-y-[-120%]'>
                <button className='md:rounded-[0.5rem] bg-bgButton py-[0.875rem] px-[1.125rem] shadow bg-blue-200 md:w-[10.3rem] md:h-[3.06rem] flex flex-shrink-0 gap-[0.56rem] justify-center items-center'>
                    <span className='text-[#fff] md:text-[0.875rem] text-[0.75rem] font-[700] leading-[1.75] uppercase font-averta'>Về Chúng Tôi</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='md:w-[0.8125rem] w-[0.5625rem] md:h-[0.625rem]'
                        viewBox='0 0 13 15'
                        fill='none'
                    >
                        <path
                        d='M12.4173 7.02935L4.69943 0.795693C4.55467 0.678771 4.48229 0.620309 4.42868 0.594864C4.14188 0.458744 3.80249 0.62089 3.72818 0.929528C3.71429 0.987224 3.71429 1.08027 3.71429 1.26635L3.71429 5.25269C3.71429 5.3151 3.71429 5.3463 3.71093 5.3751C3.69387 5.52173 3.61289 5.65332 3.48969 5.73462C3.46549 5.75059 3.43764 5.76466 3.38193 5.79278L1.06988 6.95991C0.911468 7.03988 0.832261 7.07987 0.787728 7.11732C0.550122 7.31712 0.550122 7.68288 0.787728 7.88268C0.832261 7.92013 0.911468 7.96012 1.06988 8.04009L3.38193 9.20722C3.43764 9.23534 3.46549 9.24941 3.48969 9.26538C3.61289 9.34668 3.69387 9.47827 3.71093 9.6249C3.71429 9.6537 3.71429 9.6849 3.71429 9.74731L3.71429 13.7337C3.71429 13.9197 3.71429 14.0128 3.72818 14.0705C3.80249 14.3791 4.14188 14.5413 4.42868 14.4051C4.48229 14.3797 4.55467 14.3212 4.69943 14.2043L12.4173 7.97065C12.509 7.89654 12.5549 7.85948 12.5853 7.82371C12.7439 7.63703 12.7439 7.36297 12.5853 7.17629C12.5549 7.14052 12.5091 7.10346 12.4173 7.02935L12.4173 7.02935Z'
                        fill='white'
                        />
                    </svg>
                </button>
            </div>
            </div>
        <div ref={scrollRef}></div>
    </section>
  )
}

export default Branch