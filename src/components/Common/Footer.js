import React from 'react'

function Footer() {
  return <section className='flex flex-col md:px-[9.36rem] px-[0.62rem] md:pt-[3.5rem] pt-[3rem] bg-gradient-to-r from-blue-500 to-blue-700'>
    <div className='flex'>
      <div className='flex flex-col'>
        <h3 className='text-[#fff] font-averta md:text-[2.5rem] font-[800] leading-[1.3] tracking-[-0.125rem] md:mb-[1rem]'>Liên hệ tư vấn</h3>
        <h4 className='text-[#fff] font-averta md:text-[1.125rem] leading-[1.625rem] tracking-[-0.05625rem] md:mb-[2.94rem]'>Kết nối với chúng tôi nhận tư vấn miễn phí</h4>
        <div className='flex gap-[1.19rem] md:mb-[1.75rem]'>
          <input type='text' placeholder='Họ và tên' />
          <input type='text' placeholder='Số điện thoại / Email' />
        </div>
      </div>
    </div>
    <div></div>
    <div></div>

  </section>
}

export default Footer
