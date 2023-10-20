'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logo from '@/assets/images/logoHeader.png'
import flag from '@/assets/images/logoVN.png'
import MenuCategory from '@/components/Menu/Category'
import MenuMonile from '../Menu/MenuMobile/MenuMonile'
import { AiOutlineMenu } from 'react-icons/ai'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.png'

function Navbar() {
  const refMb = useRef()
  const refBar = useRef()
  const refNav = useRef()
  const handleClickBar = () => {
    refMb?.current?.classList.add('active')
  }
  const handleClose = () => {
    refMb?.current?.classList.remove('active')
  }

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 20) {
        document.getElementById("header").style.top = "-7rem";
      } else {
        document.getElementById("header").style.top = "0";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  
  const listNav = {
    nav1: 'Trang chủ',
    nav2: 'Về Hoa San',
    nav3: 'Sản Phẩm',
    nav4: 'Tin Tức-Sự Kiện',
    nav5: 'Hợp tác và Liên Kết'
  }
  const dataCate = [
    {
      title: 'Ủng Công nghiệp',
      image: img1,
      info: {
        info_title: 'Ủng CN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    },
    {
      title: 'Ủng Nông nghiệp',
      image: img2,
      info: {
        info_title: 'Ủng NN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    },
    {
      title: 'Ủng Thông dụng',
      image: img1,
      info: {
        info_title: 'Ủng NN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    },
    {
      title: 'Ủng Nông nghiệp',
      image: img2,
      info: {
        info_title: 'Ủng NN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    },
    {
      title: 'Ủng Thông dụng',
      image: img1,
      info: {
        info_title: 'Ủng NN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    },
    {
      title: 'Quần áo bảo hộ',
      image: img2,
      info: {
        info_title: 'Ủng NN',
        desc: 'Sử dụng trong môi trường nước, sình lầy hoặc trơn trượt Làm từ nhựa PVC tổng hợp, thích hợp dùng đi mưa, trong nông nghiệp',
        subDesc: 'Xem chi tiết'
      }
    }
  ]
  return (
    <div id='header' ref={refNav} className='nav-container md:h-[6.125rem] h-[4rem]'>
      <nav className='flex md:px-[3.75rem] items-center justify-between '>
        <div className='flex md:pr-[3.75rem] h-full logoMb max-md:border-solid max-md:border-r-[0.03125rem] max-md:border-[#DCE1E9]'>
          <Image
            src={logo}
            alt='logo'
            quality={100}
            className='object-contain  w-[4.25rem] h-[3rem] md:w-[7.75rem] md:h-[5.4375rem]'
          />
        </div>
        <div className='items-center max-md:hidden flex gap-[5.94rem] h-full md:border-r-[0.0625rem] border-solid md:border-l-[0.0625rem] border-[#DCE1E9]'>
          <div className='flex md:gap-[3rem] h-full md:pl-[3.25rem] items-center'>
            <div className='text-textPrimary flex items-center cursor-pointer h-full font-mark md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] '>
              <span className='whitespace-nowrap uppercase'>{listNav?.nav1}</span>
            </div>
            <div className='text-textPrimary flex items-center cursor-pointer h-full font-mark md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] '>
              <span className='whitespace-nowrap uppercase'>{listNav?.nav2}</span>
            </div>
            <div className='text-textPrimary flex items-center cursor-pointer h-full nav-link font-mark md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] '>
              <span className='whitespace-nowrap uppercase'>{listNav?.nav3}</span>
              <div className='menu-item'>
                <MenuCategory dataCate={dataCate} />
              </div>
            </div>
            <div className='text-textPrimary flex items-center cursor-pointer h-full font-mark md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] '>
              <span className='whitespace-nowrap uppercase'>{listNav?.nav4}</span>
            </div>
            <div className='text-textPrimary flex items-center cursor-pointer h-full font-mark md:text-[0.875rem] leading-[1.5] tracking-[0.02625rem] '>
              <span className='whitespace-nowrap uppercase'>{listNav?.nav5}</span>
            </div>
          </div>
          <div className='md:pr-[2.12rem]'>
            <button className='md:rounded-[0.5rem]  bg-bgButton shadow bg-blue-200 md:w-[10.3rem] md:h-[3.06rem] flex flex-shrink-0 gap-[0.56rem] justify-center items-center'>
              <span className='text-[#fff]'>Liên Hệ Ngay</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-[0.8125rem] md:h-[0.9375rem]'
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
        <div className='flex md:gap-[2rem] h-full justify-center items-center md:pl-[1.87rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='md:w-[1.5rem] md:h-[1.5rem] max-md:hidden'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M10.0714 3C13.9769 3 17.1429 6.16599 17.1429 10.0714C17.1429 11.7927 16.5278 13.3704 15.5056 14.5966L20.8117 19.9026C21.0628 20.1536 21.0628 20.5607 20.8117 20.8117C20.5886 21.0349 20.2422 21.0597 19.9916 20.8861L19.9026 20.8117L14.5966 15.5056C13.3704 16.5278 11.7927 17.1429 10.0714 17.1429C6.16599 17.1429 3 13.9769 3 10.0714C3 6.16599 6.16599 3 10.0714 3ZM10.0714 4.28571C6.87607 4.28571 4.28571 6.87607 4.28571 10.0714C4.28571 13.2668 6.87607 15.8571 10.0714 15.8571C13.2668 15.8571 15.8571 13.2668 15.8571 10.0714C15.8571 6.87607 13.2668 4.28571 10.0714 4.28571Z'
              fill='#213D55'
            />
          </svg>
          <div className='flex h-full items-center'>
            <div className='flex items-center gap-[0.56rem] max-md:gap-[0.38rem] h-full max-md:border-solid max-md:px-[0.59rem] max-md:border-r-[0.03125rem] max-md:border-l-[0.03125rem] max-md:border-[#DCE1E9]'>
              <Image
                src={flag}
                alt='flag'
                quality={100}
                className='object-cover md:w-[1.5rem] md:h-[1.1875rem] w-[1.125rem] h-[0.875rem]'
              />
              <span className='text-textPrimary font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.02625rem]'>
                VN
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-[0.5rem] md:h-[0.25rem] w-[0.40975rem] h-[0.20488rem]'
                viewBox='0 0 10 7'
                fill='none'
              >
                <path d='M1 1L5 5L9 1' stroke='#213D55' stroke-width='2' />
              </svg>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className=''
                viewBox='0 0 8 5'
                fill='none'
              >
                <path d='M1 0.361084L4.27778 3.63886L7.55556 0.361084' stroke='#213D55' />
              </svg> */}
            </div>
            <div ref={refBar} className='md:hidden px-[1.25rem]' onClick={handleClickBar}>
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className='fixed inset-0 menu-mobile z-10' ref={refMb}>
        <MenuMonile dataCate={dataCate} listNav={listNav}  handleCloseMenuMb={handleClose} />
      </div>
    </div>
  )
}

export default Navbar
