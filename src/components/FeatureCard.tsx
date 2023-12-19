import Image from 'next/image';
import React from 'react';

interface propsType{
    img:any;
    title:string;
    desc:string;
}

const FeatureCard = ({img,title,desc}:propsType) => {
  return (
    <div className='flex gap-8'>
        <Image 
        className='h-[45px] w-auto'
         src={img}
          height={50}
          width={60}
          alt={title}/>

    <div className='space-y-2'>
        <h2 className='font-medium text-xl uppercase'>{title}</h2>
        <p className='text-gray-600 text-[14px]'>{desc}</p>
        </div>      
    </div>
  )
}

export default FeatureCard