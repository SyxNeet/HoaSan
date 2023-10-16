'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import logo from '@/assets/images/logoHeader.png'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import bg from '@/assets/images/bgMobile.png'
function MenuMonile({ handleCloseMenuMb,listNav,dataCate }) {
  const navRef = useRef()
  const [active,setActive] = useState(null)
  const handleOpen = (num) => {
    if(active === num) {
      setActive(null)
    }else{
      setActive(num)
    }
  }
  return (
    <nav className='md:hidden bg-[#006198] relative'>
      <Image src={bg} fill quality={100} className='z-[-1]' />
      <div className='flex justify-between w-full h-[4rem] bg-[#fff]'>
        <div className=' logoMb border-solid border-r-[0.03125rem] border-[#DCE1E9]'>
          <Image src={logo} alt='logo' quality={100} className='object-contain w-[4.25rem] h-[3rem]' />
        </div>
        <div className='fixed top-[1rem] right-[1rem]' onClick={handleCloseMenuMb}>
          <AiOutlineClose />
        </div>
      </div>
      {/* search */}
      <div className='flex h-[3.3rem] px-[0.7rem] items-center pt-[0.7rem] '>
        <div className='pl-[0.7rem] bg-[#fff] h-full flex items-center opacity-40'><AiOutlineSearch /></div>
        <div className='h-full flex-1'>
          <input className='h-full w-full pl-[0.7rem] opacity-40' type='text' placeholder='Search...' />
        </div>
      </div>

      {/* list nav */}

      <div className='flex flex-col px-[0.62rem]'>
        <a className='py-[1.5rem] border-b-[0.0625rem] border-solid border-[#fff] border-opacity-10'>
          <span onClick={()=> handleOpen(1)} className='text-[1.125rem] uppercase leading-[120%] text-[#fff]'>{listNav?.nav1}</span>
        </a>
        <a className='py-[1.5rem] border-b-[0.0625rem] border-solid border-[#fff] border-opacity-10'>
          <span onClick={()=> handleOpen(2)} className='text-[1.125rem] uppercase leading-[120%] text-[#fff]'>{listNav?.nav2}</span>
        </a>
        <a className='py-[1.5rem] border-b-[0.0625rem] border-solid border-[#fff] border-opacity-10'>
          <span onClick={()=> handleOpen(3)} className='text-[1.125rem] uppercase leading-[120%] text-[#fff]'>{listNav?.nav3}</span>
          <div ref={navRef} className={`menu_mobile-item flex flex-col gap-[1.12rem] mt-[0.5rem] pl-[1rem]`}
            style={active === 3 ? {
              height:navRef?.current?.scrollHeight,
              overflow:'visible'
            }
          :{
            height:0,
            overflow:'hidden'
          }}
            
          >
            {dataCate?.map((data,index)=>(
              <a key={index} className='text-[#fff] text-[0.8125rem] leading-[1.2]'>{data?.title}</a>
            ))}
          </div>
        </a>
        <a className='py-[1.5rem] border-b-[0.0625rem] border-solid border-[#fff] border-opacity-10'>
          <span onClick={()=> handleOpen(4)} className='text-[1.125rem] uppercase leading-[120%] text-[#fff]'>{listNav?.nav4}</span>
        </a>
        <a className='py-[1.5rem] border-b-[0.0625rem] border-solid border-[#fff] border-opacity-10'>
          <span onClick={()=> handleOpen(5)} className='text-[1.125rem] uppercase leading-[120%] text-[#fff]'>{listNav?.nav5}</span>
        </a>
      </div>
    </nav>
  )
}

export default MenuMonile
 