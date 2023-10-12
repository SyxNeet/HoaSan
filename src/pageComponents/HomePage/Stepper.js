import React from 'react'

function Stepper() {
    return (
        <div className='md:px-[9.36rem] md:pt-[8.12rem]'>
            <div className='flex flex-col md:gap-[0.31rem] '>
                <span className='text-textSecondary md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.02625rem]'>
                    QUY TRÌNH KINH DOANH
                </span>
                <span className='text-textSecondary font-averta md:mb-[3.75rem] md:text-[3.75rem] font-[800] leading-[5rem] tracking-[-0.1875rem] text-shadow shadow-0-0-30-rgba(0, 0, 0, 0.04)'>Tối ưu nhanh chóng</span>
            </div>

            <div className='flex'>
                <div className='w-[50%]'>
                    <div className='w-[90%] relative md:mt-[6.24rem]'></div>
                </div>
            </div>
        </div>
    )
}

export default Stepper
