'use client'
import React, { useState } from 'react'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.png'
import Image from 'next/image'
function index() {
  const [active, setActive] = useState(1)
  const handleClick = (index) => {
    setActive(index)
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
    <div className='h-full flex'>
      <div className='col-1 flex flex-col md:w-[21.5rem] md:mr-[5.25rem]'>
        {dataCate?.map((item, index) => (
          <span
            className={`text-[#fff] md:text-[1.75rem] leading-[1.2] ${index === active ? 'font-[700]' : 'font-[400]'}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item?.title}
          </span>
        ))}
      </div>
      <div className='flex gap-[2rem] md:h-[21.75rem]'>
        <div className='col-2'>
          {dataCate?.map((item, index) => (
            <Image
              key={index}
              src={item?.image?.src}
              quality={100}
              width={100}
              height={200}
              className={`md:w-[19rem] object-cover ${active === index ? 'flex' : 'hidden'}`}
            />
          ))}
        </div>
        <div className='col-3 flex flex-col'>
          {dataCate?.map((data, index) => (
            <div key={index} className={`flex-col ${index === active ? 'flex' : 'hidden'}`}>
              <h3 className='md:text-[2.4375rem] font-[700] leading-[1.2] text-[#fff] md:mb-[1.5rem]'>
                {data?.info?.info_title}
              </h3>
              <p className='text-[1.125rem] leading-[1.5] text-[#fff] md:mb-[2.5rem]'>{data?.info?.desc}</p>
              <p className='text-[#fff] md:text-[0.875rem] font-[700] uppercase leading-[1.75rem]'>
                {data?.info?.subDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
