import React from 'react'
import Marquee from 'react-fast-marquee'
import ct1 from '@/assets/images/ct1.png'
import ct2 from '@/assets/images/ct2.png'
import ct3 from '@/assets/images/ct3.png'
import ct4 from '@/assets/images/ct4.png'
import ct5 from '@/assets/images/ct5.png'
import Image from 'next/image'
function SlidePartner({check}) {
    const data = [ct1,ct2,ct3,ct4,ct5]
    return (
        <Marquee 
            speed={50}
            delay={0}
            loop={0}
            direction={ check ? 'down' : 'up'}
            style={{transition:'all 0.3s ease'}}
            className='h-[10rem]'
        >
            {data?.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <Image src={item} alt='image' quality={100} className='object-contain' />
                </div>
            ))}
        </Marquee>
    )
}

export default SlidePartner
