import React from 'react'
import Button from '@/components/Common/Button'
import Image from 'next/image'
import ct1 from '@/assets/images/ct1.png'
import ct2 from '@/assets/images/ct2.png'
import ct3 from '@/assets/images/ct3.png'
import ct4 from '@/assets/images/ct4.png'
import ct5 from '@/assets/images/ct5.png'
import bg from '@/assets/images/bg_partner.png'
function Partner() {
    const arr = [ct1,ct2,ct3,ct4,ct5]
    const data= {
        sub_title:'Đối tác của hoa san',
        title:'Chúng tôi đã có hàng trăm đối tác trên toàn thế giới và tiếp tục phát triển',
        text_btn:'Trở thành dối tác',
    }
   
    return (
        <div className='flex relative max-md:flex-col md:px-[9.36rem] px-[0.62rem] md:py-[7rem] py-[2.56rem] partner h-[90vh] overflow-hidden'>
            <div className='absolute inset-0 bg-[#006198] z-0 opacity-[0.93]'></div>
            <Image src={bg} fill alt='banner' quality={100} className='object-cover z-[-1]'/>
            <div className='flex flex-col relative z-10 md:w-[50%]'>
                <h4 className='font-mark text-[#fff] md:text-[0.875rem] text-[0.6875rem] leading-[1.5] tracking-[0.02625rem] uppercase mb-[0.56rem]'>{data?.sub_title}</h4>
                <h2 className='text-[#fff] font-averta md:text-[3rem] text-[1.75rem] font-[800] leading-[3.5rem] tracking-[-0.15rem] md:w-[32.75rem] md:mb-[2.81rem] mb-[1.5rem]'>{data?.title}</h2>
                <Button text={data?.text_btn}  className={'uppercase md:text-[#fff] text-[#0774B2] font-averta md:text-[0.875rem] text-[0.75rem] whitespace-nowrap'} />
            </div>

            <div className='flex gap-[2rem] overflow-hidden md:w-[50%] max-md:mt-[2rem]'>
                <div className='flex flex-col relative z-10 maquee'>
                        <div className='flex flex-col gap-[1rem] items-center justify-center maquee-animate'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                        <div className='flex flex-col gap-[0.5rem] items-center maquee-animate'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                </div>
                <div className='flex flex-col relative z-10 maquee'>
                        <div className='flex flex-col gap-[1rem] items-center justify-center maquee-animate2'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                        <div className='flex flex-col gap-[0.5rem] items-center maquee-animate2'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                </div>
                <div className='flex flex-col relative z-10 maquee'>
                        <div className='flex flex-col gap-[1rem] items-center justify-center maquee-animate'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                        <div className='flex flex-col gap-[0.5rem] items-center maquee-animate'>
                                {arr?.map((item,index)=>(
                                <Image key={index} src={item} />
                                ))} 
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Partner

