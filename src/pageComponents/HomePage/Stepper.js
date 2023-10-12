import React from 'react'
import StepperItem from './StepperItem'
import ProcessInfo from './ProcessInfo'
import icon from '@/assets/images/iconInfo.svg'
import img from '@/assets/images/imgInfo.png'

function Stepper() {

    const data = new Array(6).fill(0)
    return (
        <div className='md:pr-[9.36rem] md:pt-[8.12rem] bg-[#E5F1FF]'>
            <div className='flex flex-col md:gap-[0.31rem] md:pl-[9.36rem] '>
                <span className='text-textSecondary md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.02625rem]'>
                    QUY TRÌNH KINH DOANH
                </span>
                <span className='text-textSecondary font-averta md:mb-[3.75rem] md:text-[3.75rem] font-[800] leading-[5rem] tracking-[-0.1875rem] text-shadow shadow-0-0-30-rgba(0, 0, 0, 0.04)'>Tối ưu nhanh chóng</span>
            </div>

            <div className='flex md:gap-[7rem]'>
                <div className='w-[50%]'>
                    <div className='sticky top-[12rem]'>
                        <div className='w-[90%] relative md:mt-[6.24rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' width="784" height="446" viewBox="0 0 784 446" fill="none">
                                    <path d="M0 1L782.452 1V209.5L230.5 209.5V445H650.5" stroke="#D2D9E7" stroke-width="1.67375"></path>
                                    {/* <path class="animation" d="M0 1L782.452 1V209.5L230.5 209.5V445H650.5" stroke="#0086C7" stroke-width="1.67375"></path> */}
                                    {/*  style="stroke-dasharray: 2199; stroke-dashoffset: 1952.71;" */}
                            </svg>
                            <StepperItem num={'1'} className={'top-0 translate-y-[-2rem] left-[20%]'} title={'Nhận thông tin đặt hàng sản phẩm'} />
                            <StepperItem num={'2'} className={'top-0 translate-y-[-2rem] right-[0]'} title={'Đề xuất kế hoạch sản xuất'} />
                            <StepperItem num={'3'} className={'top-[48%] translate-y-[-2.1875vw] right-[0]'} title={'Sản xuất sản phẩm'} />
                            <StepperItem num={'4'} className={'top-[48%] translate-y-[-2.1875vw] left-[32%]'} title={'Kiểm tra & Đóng gói'} />
                            <StepperItem num={'5'} className={'top-[100%] translate-y-[-2.1875vw] left-[32%]'} title={'Kiểm tra & Đóng gói'} />
                            <StepperItem num={'6'} className={'top-[100%] translate-y-[-2.1875vw] right-[0]'} title={'Sản xuất sản phẩm'} />
                        </div>
                    </div>
                </div>

                <div className='w-[50%]'>
                    <div className='sticky top-0 pt-[10rem]'>
                    {data?.map((item,index)=> (
                        <ProcessInfo 
                            key={index} 
                            icon={icon} 
                            image={img} 
                            title={'Nhận thông tin đặt hàng sản phẩm'} 
                            desc={'Lorem ipsum dolor sit amet consectetur. Malesuada sit lacus egestas vitae gravida quam imperdiet eget. Risus curabitur iaculis pharetra vestibulum est. '}
                        />
                    ))} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stepper
