import React from 'react'

function StepperItem({className,num,title}) {
  return (
    <div className={`${className} num-item absolute flex flex-col justify-center items-center`}>
        <div className='relative'>
            <div className='text-textSecondary num text-justify font-averta md:text-[2rem] flex items-center justify-center font-[700] leading-[2.875rem] trackingh-[-0.1rem] md:w-[4.5rem] md:h-[4.5rem] rounded-[50%] bg-[#fff]'>{num}</div>
        </div>
        <p className='text-center line-clamp-2 md:text-[1.5rem] text-textPrimary font-[800] leading-[125%] tracking-[-0.075rem] md:w-[12rem]'>
            {title}
        </p>
    </div>
  )
}

export default StepperItem