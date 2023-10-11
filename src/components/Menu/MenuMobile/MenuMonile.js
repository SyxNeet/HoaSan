import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logoHeader.png'
import { AiOutlineClose } from 'react-icons/ai'
function MenuMonile({ handleCloseMenuMb }) {
  return (
    <nav className=' md:hidden justify-between flex'>
      <div className='flex justify-between w-full h-[4rem]'>
        <div className=' logoMb border-solid border-r-[0.03125rem] border-[#DCE1E9]'>
          <Image src={logo} alt='logo' quality={100} className='object-contain w-[4.25rem] h-[3rem]' />
        </div>
        <div className='fixed top-[1rem] right-[1rem]' onClick={handleCloseMenuMb}>
          <AiOutlineClose />
        </div>
      </div>
    </nav>
  )
}

export default MenuMonile
