import React from 'react'

interface CategoryProps{
    img:string;
    type:string;
    quantity:string

}
const CategoryCard = ({img,type,quantity}:CategoryProps) => {
  return (
    <div className='space-y-4'>
        <img className='rounded-full border-4 md:border-8 border-white'
        src={img}
        alt={type}
        />
        <div>
            <h2 className='text-[14px] md:text-xl font-medium'>{type}</h2>
            <p className='text-gray-400 text-[12px] md:text-[14px]'>{quantity}</p>
        </div>
    </div>
  )
}

export default CategoryCard