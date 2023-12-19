import React from 'react';
import { Whisper } from 'next/font/google';
import CategoryCard from './CategoryCard';

const whisper = Whisper({subsets:['latin'],weight:['400']});

const data =[
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/_next/image?url=%2Fcategory__1.jpg&w=256&q=75',
        type:'Makeup',
        quantity:'(4 Items)'
    },
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/_next/image?url=%2Fcategory__2.jpg&w=256&q=75',
        type:'Nail & Wax',
        quantity:'(8 Items)'
    },
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/_next/image?url=%2Fcategory__3.jpg&w=256&q=75',
        type:'Skincare',
        quantity:'(6 Items)'
    },

]

const Category = () => {
  return (
    <div className='bg-[url(https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/cats__bg.jpg)] bg-no-repeat py-16 mt-32'>
        <div className='container text-center text-white'>
            <h3 className={`${whisper.className} text=[40px]`}>Favourite Category</h3>

            <h2 className='text-[40px] font-medium'>Top Category </h2>
            <div className='flex justify-center gap-4 md:gap-16 pt-8'>
             {data.map(item=>(
                <CategoryCard 
                key={item.type}
                img={item.img}
                type={item.type}
                quantity={item.quantity}
                />
             ))}
            </div>
        </div>
    </div>
  )
}

export default Category