'use client'
import React, { useEffect, useState } from 'react'
function Button({text,className,hidden,classBg}) {
    const [mobile,setIsMobile] = useState(window.innerWidth)
    useEffect(() => {
    const handleCheck = () => {
        if (window.innerWidth <= 767) {
        setIsMobile(window.innerWidth);
        } else {
        setIsMobile(window.innerWidth);
        }
    };

    window.onresize = handleCheck;
    return () => {
        window.removeEventListener('resize', handleCheck);
  };
}, []);
    return (
            <div className={`md:rounded-[0.5rem] md:bg-bgButton shadow md:bg-blue-200 ${classBg ? '!bg-bgButton' : '!bg-[#fff]'} bg-[#fff] md:px-[1rem] max-md:px-[0.88rem] max-md:py-[0.88rem] rounded-[0.25rem] w-fit md:h-[3.06rem] flex flex-shrink-0 gap-[0.56vw] justify-center items-center ${hidden ? 'hidden' : ''}`}>
              <span className={className}>{text}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-[0.8125rem] md:h-[0.9375rem] w-[0.5625rem] h-[0.625rem]'
                viewBox='0 0 13 15'
                fill='none'
              >
                <path
                  d='M12.4173 7.02935L4.69943 0.795693C4.55467 0.678771 4.48229 0.620309 4.42868 0.594864C4.14188 0.458744 3.80249 0.62089 3.72818 0.929528C3.71429 0.987224 3.71429 1.08027 3.71429 1.26635L3.71429 5.25269C3.71429 5.3151 3.71429 5.3463 3.71093 5.3751C3.69387 5.52173 3.61289 5.65332 3.48969 5.73462C3.46549 5.75059 3.43764 5.76466 3.38193 5.79278L1.06988 6.95991C0.911468 7.03988 0.832261 7.07987 0.787728 7.11732C0.550122 7.31712 0.550122 7.68288 0.787728 7.88268C0.832261 7.92013 0.911468 7.96012 1.06988 8.04009L3.38193 9.20722C3.43764 9.23534 3.46549 9.24941 3.48969 9.26538C3.61289 9.34668 3.69387 9.47827 3.71093 9.6249C3.71429 9.6537 3.71429 9.6849 3.71429 9.74731L3.71429 13.7337C3.71429 13.9197 3.71429 14.0128 3.72818 14.0705C3.80249 14.3791 4.14188 14.5413 4.42868 14.4051C4.48229 14.3797 4.55467 14.3212 4.69943 14.2043L12.4173 7.97065C12.509 7.89654 12.5549 7.85948 12.5853 7.82371C12.7439 7.63703 12.7439 7.36297 12.5853 7.17629C12.5549 7.14052 12.5091 7.10346 12.4173 7.02935L12.4173 7.02935Z'
                  fill={mobile > 767 || null ? 'white' :  '#0774B2' }
                />
              </svg>
            </div>
    )
}

export default Button
