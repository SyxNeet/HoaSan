'use client'
import React, { useRef, useState } from 'react';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import img1 from '@/assets/images/img1.jpg'
import imgPr1 from '@/assets/images/imgPr1.png'
import imgPr2 from '@/assets/images/imgPr2.png'
import bg from '@/assets/images/bgMegaMenu.png'
import Image from 'next/image'

function Product() {
    const dataProDuct = {
        subTitle:'Sản Phẩm Của Hoa San',
        title:'Nghiên cứu sản xuất Tập trung vào chất lượng',
        buttonText:'Danh sách sản phẩm',
        listProduct:[
            {
                image:img1,
                type:'Hàng Sản Xuất',
                name:'Ủng công nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:imgPr1,
                type:'Hàng Nhập Khẩu',
                name:'Ủng nông nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:imgPr2,
                type:'Hàng Sản Xuất',
                name:'Ủng công nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:img1,
                type:'Hàng Nhập Khẩu',
                name:'Ủng thông dụng',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:imgPr2,
                type:'Hàng Sản Xuất',
                name:'Ủng nông nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:imgPr2,
                type:'Hàng Sản Xuất',
                name:'Ủng nông nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            },
            {
                image:imgPr2,
                type:'Hàng Sản Xuất',
                name:'Ủng nông nghiệp',
                infomation:'Là dòng sản phẩm chất lượng cao và được phân phối độc quyền tại Đông Nam Á...'
            }
        ]
    }
    return (
        <section className='md:pt-[7.17rem] md:pb-[9.7rem] flex flex-col relative md:mt-[3.56rem]'>
            <Image src={bg} alt='bg' fill quality={100} className='object-cover z-[-1]' />
            <h5 className='font-mark md:pl-[12.36rem] pl-[0.62rem] text-[#fff] md:text-[0.875rem] text-[0.6875rem] max-md:mt-[4rem] uppercase tracking-[0.02625rem] mb-[0.5rem] md:mb-[0.56rem]'>
                {dataProDuct?.subTitle}
            </h5>
            <div className='flex md:pl-[12.36rem] pl-[0.62rem] max-md:pr-[4.5rem] justify-between items-center md:pr-[12.36rem] mb-[2.5rem] md:mb-[4.4rem]'>
                <h2 className='font-averta md:w-[32.75rem] md:text-[3rem] text-[1.75rem] font-extrabold leading-[1.2] md:leading-[3.5rem] text-[#fff] tracking-[-0.15rem]'>
                    {dataProDuct?.title}
                </h2>
                <button className='md:rounded-[0.5rem] max-md:hidden rounded-[0.25rem] bg-[#fff] py-[0.875rem] px-[1.125rem] shadow-md bg-blue-200  md:h-[3.06rem] flex flex-shrink-0 gap-[0.56rem] justify-center items-center'>
                    <span className='text-textButtonColor whitespace-nowrap md:text-[0.875rem] text-[0.75rem] font-[700] leading-[1.75] uppercase font-averta'>{dataProDuct?.buttonText}</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='md:w-[0.8125rem] w-[0.5625rem] md:h-[0.625rem]'
                        viewBox='0 0 13 15'
                        fill='none'
                    >
                        <path
                        d='M12.4173 7.02935L4.69943 0.795693C4.55467 0.678771 4.48229 0.620309 4.42868 0.594864C4.14188 0.458744 3.80249 0.62089 3.72818 0.929528C3.71429 0.987224 3.71429 1.08027 3.71429 1.26635L3.71429 5.25269C3.71429 5.3151 3.71429 5.3463 3.71093 5.3751C3.69387 5.52173 3.61289 5.65332 3.48969 5.73462C3.46549 5.75059 3.43764 5.76466 3.38193 5.79278L1.06988 6.95991C0.911468 7.03988 0.832261 7.07987 0.787728 7.11732C0.550122 7.31712 0.550122 7.68288 0.787728 7.88268C0.832261 7.92013 0.911468 7.96012 1.06988 8.04009L3.38193 9.20722C3.43764 9.23534 3.46549 9.24941 3.48969 9.26538C3.61289 9.34668 3.69387 9.47827 3.71093 9.6249C3.71429 9.6537 3.71429 9.6849 3.71429 9.74731L3.71429 13.7337C3.71429 13.9197 3.71429 14.0128 3.72818 14.0705C3.80249 14.3791 4.14188 14.5413 4.42868 14.4051C4.48229 14.3797 4.55467 14.3212 4.69943 14.2043L12.4173 7.97065C12.509 7.89654 12.5549 7.85948 12.5853 7.82371C12.7439 7.63703 12.7439 7.36297 12.5853 7.17629C12.5549 7.14052 12.5091 7.10346 12.4173 7.02935L12.4173 7.02935Z'
                        fill='#0086C7'
                        />
                    </svg>
                </button>
            </div>
            <div>
                <Swiper
                    slidesPerView={1.3}
                    breakpoints={{
                        768: {
                            slidesPerView: 4.3,
                            spaceBetween: 0,
                        }
                    }}
                    spaceBetween={0}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper swiper_product"
                >
                    {dataProDuct?.listProduct?.map((item,index)=> (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col relative bg-[#fff] item-swiper overflow-hidden'>
                                <Image src={item?.image} alt='image' className='object-cover md:h-[17.36188rem] h-[13.875rem]' quality={100} />
                                <div className='flex flex-col relative z-[1] md:py-[1.49rem] md:px-[1.33rem] px-[0.87rem] max-md:pt-[0.88rem] max-md:pb-[2.69rem]'>
                                    <h5 className='font-mark md:text-[0.875rem] text-[0.6875rem] leading-[1.5] md:mb-[0.39rem] uppercase tracking-[0.02625rem] text-customColor'>
                                        {item?.type}
                                    </h5>

                                    <h3 className='text-textPrimary whitespace-nowrap md:mb-[0.36rem] text-[0.9375rem] font-averta md:text-[1.375rem] font-[700] leading-[1.5rem] tracking-[-0.06875rem]'>
                                        {item?.name}
                                    </h3>
                                    <p className='text-textPrimary font-averta md:text-[1rem] text-[0.6875rem] max-md:text-ellipsis md:line-clamp-3 max-md:line-clamp-2 leading-[1.5rem]'>{item?.infomation}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className=' z-[1] md:w-[4.52706rem]  md:h-[3.46794rem] w-[3.125rem] h-[2.43756rem] absolute right-[-1px] bottom-[-1px]' viewBox="0 0 74 56" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73.138 0.768539V55.5892H0.705078C4.73757 24.2873 31.4881 0.101807 63.8874 0.101807C67.0293 0.101807 70.118 0.329239 73.138 0.768539Z" fill="url(#paint0_linear_1160_3810)"/>
                                    <path d="M50.9803 33.0082L39.4158 24.0609V30.7714L34.79 33.0082L39.4158 35.245V41.9554L50.9803 33.0082Z" fill="white"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_1160_3810" x1="36.9216" y1="0.101807" x2="36.9216" y2="55.5892" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0572AF"/>
                                        <stop offset="1" stop-color="#128ACE"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className='md:rounded-[0.5rem] md:hidden max-md:mt-[2.5rem] max-md:ml-[0.62rem] w-fit rounded-[0.25rem] bg-[#fff] py-[0.875rem] px-[1.125rem] shadow-md bg-blue-200  md:h-[3.06rem] flex flex-shrink-0 gap-[0.56rem] justify-center items-center'>
                    <span className='text-textButtonColor whitespace-nowrap md:text-[0.875rem] text-[0.75rem] font-[700] leading-[1.75] uppercase font-averta'>{dataProDuct?.buttonText}</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='md:w-[0.8125rem] w-[0.5625rem] md:h-[0.625rem]'
                        viewBox='0 0 13 15'
                        fill='none'
                    >
                        <path
                        d='M12.4173 7.02935L4.69943 0.795693C4.55467 0.678771 4.48229 0.620309 4.42868 0.594864C4.14188 0.458744 3.80249 0.62089 3.72818 0.929528C3.71429 0.987224 3.71429 1.08027 3.71429 1.26635L3.71429 5.25269C3.71429 5.3151 3.71429 5.3463 3.71093 5.3751C3.69387 5.52173 3.61289 5.65332 3.48969 5.73462C3.46549 5.75059 3.43764 5.76466 3.38193 5.79278L1.06988 6.95991C0.911468 7.03988 0.832261 7.07987 0.787728 7.11732C0.550122 7.31712 0.550122 7.68288 0.787728 7.88268C0.832261 7.92013 0.911468 7.96012 1.06988 8.04009L3.38193 9.20722C3.43764 9.23534 3.46549 9.24941 3.48969 9.26538C3.61289 9.34668 3.69387 9.47827 3.71093 9.6249C3.71429 9.6537 3.71429 9.6849 3.71429 9.74731L3.71429 13.7337C3.71429 13.9197 3.71429 14.0128 3.72818 14.0705C3.80249 14.3791 4.14188 14.5413 4.42868 14.4051C4.48229 14.3797 4.55467 14.3212 4.69943 14.2043L12.4173 7.97065C12.509 7.89654 12.5549 7.85948 12.5853 7.82371C12.7439 7.63703 12.7439 7.36297 12.5853 7.17629C12.5549 7.14052 12.5091 7.10346 12.4173 7.02935L12.4173 7.02935Z'
                        fill='#0086C7'
                        />
                    </svg>
            </button>
        </section>
    )
}

export default Product
