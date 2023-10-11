import React from 'react'

function CategoryItem(data) {
  return (
    <div className='flex'>
      <div className='col-1'>
        <div className='flex flex-col md:gap-[1.69rem]'>
          <span>{data?.data?.title}</span>
        </div>
      </div>
      <div className='col-2'>
        <div className='flex flex-col md:gap-[1.69rem]'>
          <span>{data?.data?.image}</span>
        </div>
      </div>
      <div className='col-3'>
        <div className='flex flex-col items-center'>
          <h3>{data?.data?.info?.info_title}</h3>
          <p>{data?.data?.info?.desc}</p>
          <p>{data?.data?.info?.subDesc}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
