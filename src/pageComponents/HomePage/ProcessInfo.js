import Image from 'next/image'
import React from 'react'

function ProcessInfo({icon,title,desc,image}) {
  return (
    <div className='flex flex-col md:pl-[1rem] md:pt-[2.25rem] md:pr-[3.56rem] md:pb-[3.56rem] border-t-[0.0625rem] border-solid border-opacity-[0.45] border-[#B9BFCB]'>
        <div className='md:mb-[1.5rem]'>
            <Image src={icon} alt="icon" className='md:w-[4.5rem] md:h-[4.5rem]' quality={100} />
        </div>
        <h2 className='text-[#0572AF] font-averta md:text-[2rem] font-[800] leading-[3rem] tracking-[-0.1rem] md:mb-[1rem] md:w-[30rem]'>
            {title}
        </h2>
        <p className='text-textPrimary font-averta md:text-[1rem] leading-[1.5] md:mb-[1.25rem] md:w-[30rem]'>{desc}</p>
        <Image src={image} alt="image" quality={100} className='w-full md:h-[14.625rem] md:w-[30rem] object-cover' />
    </div>
  )
}

export default ProcessInfo