'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import img from '@/assets/images/imgFooter.png'
import logo from '@/assets/images/logoFooter.png'

function Footer() {
  const aboutRef = useRef()
  const aboutRef3 = useRef()
  const aboutRef4 = useRef()
  const titleRef = useRef()
  const [check,setCheck] = useState(null)
  const handleSelect = (num) => {
    if(check === num) {
      setCheck(null)
    }else {
      setCheck(num)
    }
  }
  
  const data={
      info:[
        {
          name:'địa chỉ',
          infomation:'26 Hàng Vải-Phường Hàng Bồ - Quận Hoàn Kiếm - Hà Nội'
        },
        {
          name:'Email',
          infomation:'sales@hoasan.com.vn'
        },
        {
          name:'điện thoại',
          infomation:'+840247686868'
        }
      ],
      contact:{
        name:'Liên kết nhanh',
        listContact:[
          {
            name:'Trang chủ'
          },
          {
            name:'Về Hoa San'
          },
          {
            name:'Sản phẩm Hoa San'
          },{
            name:'Tin Tức & Sự kiện'
          },{
            name:'OEM sản xuất'
          },{
            name:'Liên hệ với chúng tôi'
          }
        ]
      },
      policy:{
        name:'Chính sách',
        listPolicy:[
          {
            name:'Chính sách vận chuyển'
          },
          {
            name:'Chính sách bảo hành'
          },
          {
            name:'Chính sách bảo mật'
          },
        ]
      }
      
  }
  return <section className='flex flex-col bg-gradient-to-r from-blue-500 to-blue-700 footer'>
    <div className='flex justify-between'>
      {/* content left */}
      <div className='md:flex hidden flex-col w-[50%] md:pt-[3.5rem] pt-[3rem] md:px-[9.36rem]  px-[0.62rem] border-b-[0.1rem] border-solid border-[#FFFFFF1A] '>
        <h3 className='text-[#fff] font-averta md:text-[2.5rem] font-[800] leading-[1.3] tracking-[-0.125rem] md:mb-[1rem]'>Liên hệ tư vấn</h3>
        <h4 className='text-[#fff] font-averta md:text-[1.125rem] leading-[1.625rem] tracking-[-0.05625rem] md:mb-[2.94rem]'>Kết nối với chúng tôi nhận tư vấn miễn phí</h4>
        <div className='flex gap-[1.19rem] md:mb-[1.75rem]'>
          <input type='text' placeholder='Họ và tên' className='input' />
          <input type='text' placeholder='Số điện thoại / Email' className='input' />
        </div>
        <div className='md:w-[11.56rem] md:h-[3.05rem] md:rounded-[0.5rem] bg-[white] md:px-[1.5rem] md:py-[0.65rem] flex md:gap-[1rem] items-center'>
          <span className='text-[#0086C7] font-averta md:text-[0.875rem] font-blod uppercase leading-[1.75rem]'>Gửi thông tin</span>
          <svg xmlns="http://www.w3.org/2000/svg"className='md:w-[0.8125rem] md:h-[0.9375rem]' viewBox="0 0 13 14" fill="none">
            <path d="M12.4173 6.52935L4.69943 0.295693C4.55467 0.178771 4.48229 0.120309 4.42868 0.0948638C4.14188 -0.0412559 3.80249 0.12089 3.72818 0.429528C3.71429 0.487224 3.71429 0.580265 3.71429 0.766348L3.71429 4.75269C3.71429 4.8151 3.71429 4.8463 3.71093 4.8751C3.69387 5.02173 3.61289 5.15332 3.48969 5.23462C3.46549 5.25059 3.43764 5.26466 3.38193 5.29278L1.06988 6.45991C0.911468 6.53988 0.832261 6.57987 0.787728 6.61732C0.550122 6.81712 0.550122 7.18288 0.787728 7.38268C0.832261 7.42013 0.911468 7.46012 1.06988 7.54009L3.38193 8.70722C3.43764 8.73534 3.46549 8.74941 3.48969 8.76538C3.61289 8.84668 3.69387 8.97827 3.71093 9.1249C3.71429 9.1537 3.71429 9.1849 3.71429 9.24731L3.71429 13.2337C3.71429 13.4197 3.71429 13.5128 3.72818 13.5705C3.80249 13.8791 4.14188 14.0413 4.42868 13.9051C4.48229 13.8797 4.55467 13.8212 4.69943 13.7043L12.4173 7.47065C12.509 7.39654 12.5549 7.35948 12.5853 7.32371C12.7439 7.13703 12.7439 6.86297 12.5853 6.67629C12.5549 6.64052 12.5091 6.60346 12.4173 6.52935L12.4173 6.52935Z" fill="#0086C7"/>
          </svg>
        </div>
      </div>

      {/* content right */}
      <div className='flex md:gap-[3.94rem] gap-[1.75rem] md:pl-[3.75rem] justify-between bg-[#0086C7] md:pt-[3.5rem] pt-[3rem] md:px-[9.36rem] px-[0.62rem] max-md:pb-[3.5rem]'>
        <div className='flex flex-col md:gap-[2.25rem]'>
          <h3 className='text-[#fff] font-averta md:text-[2.5rem] text-[1.75rem] font-extrabold tracking-[-0.125rem] md:w-[18rem] max-md:mb-[0.5rem] '>Giải thưởng Chứng nhận</h3>
          <h4 className='text-[#fff] font-averta md:text-[1.125rem] text-[0.9375rem] leading-[1.625rem] md:tracking-[-0.05625rem] max-md:mb-[1.88rem]'>Hoa San một hành trình 30 năm nỗ lực và phát triển không ngừng.</h4>
          <div className='md:w-fit md:h-[3.05rem] md:rounded-[0.5rem] rounded-[0.25rem] bg-[white] md:px-[1.5rem] px-[1.12rem] md:py-[0.65rem] py-[0.88rem] flex md:gap-[1rem] gap-[0.75rem] items-center'>
            <span className='text-[#0086C7] font-averta md:text-[0.875rem] text-[0.75rem] font-blod uppercase leading-[1.75rem]'>Hồ sơ năng lực</span>
            <svg xmlns="http://www.w3.org/2000/svg"className='md:w-[0.8125rem] md:h-[0.9375rem] w-[0.5625rem] h-[0.625rem]' viewBox="0 0 13 14" fill="none">
              <path d="M12.4173 6.52935L4.69943 0.295693C4.55467 0.178771 4.48229 0.120309 4.42868 0.0948638C4.14188 -0.0412559 3.80249 0.12089 3.72818 0.429528C3.71429 0.487224 3.71429 0.580265 3.71429 0.766348L3.71429 4.75269C3.71429 4.8151 3.71429 4.8463 3.71093 4.8751C3.69387 5.02173 3.61289 5.15332 3.48969 5.23462C3.46549 5.25059 3.43764 5.26466 3.38193 5.29278L1.06988 6.45991C0.911468 6.53988 0.832261 6.57987 0.787728 6.61732C0.550122 6.81712 0.550122 7.18288 0.787728 7.38268C0.832261 7.42013 0.911468 7.46012 1.06988 7.54009L3.38193 8.70722C3.43764 8.73534 3.46549 8.74941 3.48969 8.76538C3.61289 8.84668 3.69387 8.97827 3.71093 9.1249C3.71429 9.1537 3.71429 9.1849 3.71429 9.24731L3.71429 13.2337C3.71429 13.4197 3.71429 13.5128 3.72818 13.5705C3.80249 13.8791 4.14188 14.0413 4.42868 13.9051C4.48229 13.8797 4.55467 13.8212 4.69943 13.7043L12.4173 7.47065C12.509 7.39654 12.5549 7.35948 12.5853 7.32371C12.7439 7.13703 12.7439 6.86297 12.5853 6.67629C12.5549 6.64052 12.5091 6.60346 12.4173 6.52935L12.4173 6.52935Z" fill="#0086C7"/>
            </svg>
          </div>
        </div>
        <Image src={img} alt='img' quality={100} className='object-cover md:w-[13.5rem] md:h-[19.25rem] w-[8.5rem] h-[12.12038rem]' />
      </div>
    </div>

    <div className='flex md:gap-[6.5rem] gap-[2.5rem] md:px-[9.36rem] px-[0.62rem] md:py-[4rem] justify-between max-md:pt-[3rem] max-md:flex-col'>

      {/* col1 */}
      <div className='flex flex-col md:gap-[2.5rem] gap-[1.12rem] md:w-[18.5rem]'>
        <Image src={logo} alt='logo' quality={100} priority className='md:w-[12.4375rem] md:h-[8.75rem]' />
        <p className='text-[#fff] md:text-[1.125rem] font-[400] leading-[1.625rem] font-averta'>
        <span className='font-blod'>HOA SAN</span> đơn vị chuyên sản xuất giày, dép, mũ, ủng bảo hộ lao động uy tin chất lượng.
        </p>
      </div>
      <div className='md:hidden flex-col  md:px-[9.36rem] '>
        <h3 className='text-[#fff] font-averta md:text-[2.5rem] text-[1.75rem] font-[800] leading-[1.3] tracking-[-0.125rem] md:mb-[1rem]'>Liên hệ tư vấn</h3>
        <h4 className='text-[#fff] font-averta md:text-[1.125rem] text-[0.875rem] leading-[1.625rem] md:tracking-[-0.05625rem] md:mb-[2.94rem]'>Kết nối với chúng tôi nhận tư vấn miễn phí</h4>
        <div className='flex gap-[1.19rem] md:mb-[1.75rem] max-md:flex-col max-md:mt-[1.5rem]'>
          <input type='text' placeholder='Họ và tên' className='input max-md:!w-full' />
          <input type='text' placeholder='Số điện thoại / Email' className='input max-md:!w-full' />
        </div>
        <div className='md:w-[11.56rem] w-fit md:h-[3.05rem] md:rounded-[0.5rem] max-md:mt-[1.5rem] rounded-[0.25rem] bg-[white] px-[1.12rem] py-[0.88rem] md:px-[1.5rem] md:py-[0.65rem] flex md:gap-[1rem] gap-[0.75rem] items-center'>
          <span className='md:text-[#0086C7] text-[#0774B2] font-averta md:text-[0.875rem] text-[0.75rem] font-blod uppercase leading-[1.75rem]'>Gửi thông tin</span>
          <svg xmlns="http://www.w3.org/2000/svg"className='md:w-[0.8125rem] md:h-[0.9375rem] w-[0.5625rem] h-[0.625rem]' viewBox="0 0 13 14" fill="none">
              <path d="M12.4173 6.52935L4.69943 0.295693C4.55467 0.178771 4.48229 0.120309 4.42868 0.0948638C4.14188 -0.0412559 3.80249 0.12089 3.72818 0.429528C3.71429 0.487224 3.71429 0.580265 3.71429 0.766348L3.71429 4.75269C3.71429 4.8151 3.71429 4.8463 3.71093 4.8751C3.69387 5.02173 3.61289 5.15332 3.48969 5.23462C3.46549 5.25059 3.43764 5.26466 3.38193 5.29278L1.06988 6.45991C0.911468 6.53988 0.832261 6.57987 0.787728 6.61732C0.550122 6.81712 0.550122 7.18288 0.787728 7.38268C0.832261 7.42013 0.911468 7.46012 1.06988 7.54009L3.38193 8.70722C3.43764 8.73534 3.46549 8.74941 3.48969 8.76538C3.61289 8.84668 3.69387 8.97827 3.71093 9.1249C3.71429 9.1537 3.71429 9.1849 3.71429 9.24731L3.71429 13.2337C3.71429 13.4197 3.71429 13.5128 3.72818 13.5705C3.80249 13.8791 4.14188 14.0413 4.42868 13.9051C4.48229 13.8797 4.55467 13.8212 4.69943 13.7043L12.4173 7.47065C12.509 7.39654 12.5549 7.35948 12.5853 7.32371C12.7439 7.13703 12.7439 6.86297 12.5853 6.67629C12.5549 6.64052 12.5091 6.60346 12.4173 6.52935L12.4173 6.52935Z" fill="#0086C7"/>
            </svg>
        </div>
      </div>

      {/* col2 */}
      <div className='md:hidden flex flex-col gap-[1.56rem]'>
        {data?.info?.map((item,index)=>(
          <div key={index} onClick={()=>handleSelect(2)}  className={`flex-col relative flex md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem] ${index === 1 || index === 2 ? 'max-md:hidden' : 'flex'}`}>
            <div className='flex justify-between items-center'>
            <h4 ref={titleRef} className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem] '>
              {item?.name}
            </h4>
            <svg xmlns="http://www.w3.org/2000/svg" className='md:hidden w-[0.75rem] h-[0.5rem]' viewBox="0 0 13 8" fill="none">
              <path d="M11.9999 1.63477L7.65327 5.98143C7.13994 6.49477 6.29994 6.49477 5.78661 5.98143L1.43994 1.63477" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <p 
              ref={aboutRef} 
              className={`text-[#fff] font-averta md:text-[1.125rem] leading-[1.5] md:w-[16.6875rem] menu_footer_mb`}
              style={check === 2 ? 
                {
                  height:'20px',
                  overflow:'visible'
                } 
                : 
                {
                  height:0,
                  overflow:'hidden'
                }
            }
            >
                {item?.infomation}
            </p>
          </div>
        ))}
      </div>
      <div className='max-md:hidden flex flex-col gap-[1.56rem]'>
        {data?.info?.map((item,index)=>(
          <div key={index} className={`flex-col relative flex md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem] ${index === 1 || index === 2 ? 'max-md:hidden' : 'flex'}`}>
            <h4 ref={titleRef} className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem] '>
              {item?.name}
            </h4>
            <p 
              className={`text-[#fff] font-averta md:text-[1.125rem] leading-[1.5] md:w-[16.6875rem]`}
            >
                {item?.infomation}
            </p>
          </div>
        ))}
      </div>

      {/* col3 */}

      <div onClick={()=>handleSelect(3)} className='md:hidden flex flex-col md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem]'>
          <div className='flex justify-between items-center'>
            <h4  className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem]'>
              {data?.contact?.name}
            </h4>
            <svg xmlns="http://www.w3.org/2000/svg" className='md:hidden w-[0.75rem] h-[0.5rem]' viewBox="0 0 13 8" fill="none">
              <path d="M11.9999 1.63477L7.65327 5.98143C7.13994 6.49477 6.29994 6.49477 5.78661 5.98143L1.43994 1.63477" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        {data?.contact?.listContact?.map((item,index)=>(
          <h5 
          ref={aboutRef3} 
          key={index} 
          className='text-[#fff] md:text-[1.125rem] leading-[1.625rem] font-averta md:mb-[0.5rem] menu_footer_mb'
          style={check === 3 ? 
            {
              height:aboutRef3?.current?.scrollHeight,
              overflow:'visible'
            } 
            : 
            {
              height:0,
              overflow:'hidden'
            }
        }
          >
            {item?.name}
          </h5>
        ))}
      </div>
      <div className='max-md:hidden flex flex-col md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem]'>
            <h4 className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem]'>
              {data?.contact?.name}
            </h4>
            {data?.contact?.listContact?.map((item,index)=>(
              <h5 
              key={index} 
              className='text-[#fff] md:text-[1.125rem] leading-[1.625rem] font-averta md:mb-[0.5rem]'
              >
                {item?.name}
              </h5>
            ))}
      </div>

      {/* col4 */}
      <div className='md:hidden flex flex-col md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem]'>
        <div onClick={()=>handleSelect(4)} className='flex justify-between items-center'>
            <h4  className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem]'>
              {data?.policy?.name}
            </h4>
            <svg xmlns="http://www.w3.org/2000/svg" className='md:hidden w-[0.75rem] h-[0.5rem]' viewBox="0 0 13 8" fill="none">
              <path d="M11.9999 1.63477L7.65327 5.98143C7.13994 6.49477 6.29994 6.49477 5.78661 5.98143L1.43994 1.63477" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        {data?.policy?.listPolicy?.map((item,index)=>(
          <h5 
          key={index}
          ref={aboutRef4} 
          className='text-[#fff] md:text-[1.125rem] leading-[1.625rem] font-averta md:mb-[0.5rem] menu_footer_mb'
          style={check === 4 ? 
            {
              height:aboutRef4?.current?.scrollHeight,
              overflow:'visible'
            } 
            : 
            {
              height:0,
              overflow:'hidden'
            }
        }
          >
            {item?.name}
          </h5>
        ))}
      </div>
      <div className='max-md:hidden flex flex-col md:gap-[0.75rem] max-md:border-b-[0.1rem] border-solid border-[#fff] border-opacity-50 max-md:pb-[1rem]'>
            <h4  className='text-[#fff] text-opacity-[73] font-mark md:text-[0.875rem] leading-[1.5] uppercase tracking-[0.20625rem]'>
              {data?.policy?.name}
            </h4>
            {data?.policy?.listPolicy?.map((item,index)=>(
            <h5 
            key={index}
            className='text-[#fff] md:text-[1.125rem] leading-[1.625rem] font-averta md:mb-[0.5rem] '
            >
              {item?.name}
            </h5>
            ))}
      </div>
    </div>
    <div className='bg-[#217BC8] flex justify-center  items-center md:py-[0.62rem] max-md:mt-[3rem]'>
      <h4 className='text-center text-[#fff] font-averta md:text-[0.875rem] text-[0.75rem] leading-[150%]'>
      Copyright © 2023 HOA SAN. Designed by OkHub Viet Nam
      </h4>
    </div>

  </section>
}

export default Footer
