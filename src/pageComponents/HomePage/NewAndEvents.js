'use client'
import React from 'react'
import imgNew from '@/assets/images/imgNew.png'
import Button from '@/components/Common/Button'
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
function NewAndEvents() {
    const data={
        subTitle:'Tin tức & Sự kiện',
        title:'Theo dõi và đồng hành cùng chúng tôi',
        textbtn:'Xem tất cả',
        listNews:[
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            },
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            },
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            },
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            },
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            },
            {
                tile:'sự kiện nội bộ',
                desc:'Lễ ra quân hành động vì môi trường xanh năm 2023',
                day:'28',
                month:'Th4',
                image:imgNew
            }
        ]
    }
    return (
        <section className=' md:py-[8rem]  py-[2.69rem] flex flex-col'>
            <h3 className='md:px-[12.36rem] px-[0.62rem] font-mark text-[#0086C7] md:text-[#213D55] md:text-[0.875rem] max-md:mb-[2rem] text-[0.6875rem] leading-[1.5] tracking-[0.02625rem] uppercase md:mb-[0.69rem]'>{data?.subTitle}</h3>
            <div className=' md:px-[12.36rem] px-[0.62rem] flex justify-between items-end md:mb-[4.06rem] mb-[2rem]'>
                <h2 className='font-averta md:text-[2.625rem] text-[1.75rem] md:text-[#213D55] text-[#0086C7] font-[800] tracking-[-0.13125rem] text-customize'>
                    {data?.title}
                </h2>
                <Button text={data?.textbtn} hidden={true} className={'max-md:hidden font-averta md:text-[0.875rem] text-[0.75rem] font-[700] leading-[1.5] uppercase'} />
            </div>

            <div className='max-md:mb-[2rem]'>
                <Swiper
                    slidesPerView={1.3}
                    breakpoints={{
                        768: {
                            slidesPerView: 3.7,
                            spaceBetween: 0,
                        }
                    }}
                    spaceBetween={0}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper swiper_product"
                >
                    {data?.listNews?.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className='flex flex-col relative justify-between md:h-[30.5rem] h-[19.25rem] bg-[#fff] item-news  md:pb-[1.5rem] md:pt-[2.69rem] md:px-[2rem] px-[1.5rem] py-[1.25rem]'>
                                <Image src={item?.image} fill alt='image' className='object-cover z-[0]' quality={100} />
                                <div className='flex flex-col md:gap-[1rem] relative z-[1]'>
                                    <h4 className='font-mark text-[#fff] text-news md:text-[0.875rem] text-[0.6875rem] leading-[1.5] tracking-[0.02625rem] uppercase md:mb-[0.69rem]'>{item?.tile}</h4>
                                    <p className='overflow-hidden text-news line-clamp-2 text-[#fff] font-averta md:text-[1.75rem] text-[1.125rem] font-[700] leading-[2.25rem] tracking-[-0.0875rem]'>
                                        {item?.desc}
                                    </p>
                                </div>
                                <div className='flex justify-between relative z-[1] items-center'>
                                <span className='text-[#fff] text-news font-mark md:text-[3.625rem] text-[2.25rem] leading-[4rem] tracking-[-0.18125rem] uppercase'>{item?.day}</span>
                                    <span className='text-[#fff] text-news font-mark md:text-[1.125rem] text-[0.75rem] leading-[2.125rem] trackig-[-0.05625rem'>{item?.month}</span>
                                </div>
                            </div>    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
               <div className='pl-[0.62rem] md:hidden'>
                    <Button text={data?.textbtn} classBg={true} className={'font-averta text-[#fff] md:text-[0.875rem] text-[0.75rem] font-[700] leading-[1.5] uppercase'} />
               </div>
        </section>

    )
}

export default NewAndEvents
