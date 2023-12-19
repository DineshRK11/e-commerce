import React from 'react';
import FeatureCard from './FeatureCard';
import cosmetics from '../../public/icons/icon__cosmetics.png';
import ship from '../../public/icons/icon__ship.png';
import payment from '../../public/icons/icon__money _1.png';

 const data=[
    {
        img:cosmetics,
        title:'Natirally Derived',
        desc:'Natural and Organic beauty Product',
    },
    {
        img:ship,
        title:'Free Shipping',
        desc:'Free shipping on all orders over $99',
    },
    {
        img:payment,
        title:'Secure Payment',
        desc:'Fully protected when paying online',
    }
 ]

const Feature = () => {
  return (
    <div className='container pt-16'>
        <div className="grid md:grid-cols-3 gap-y-8 lg:gap-y-4 lg:grid:cols-3 gap-4">
            {data.map(item=><FeatureCard key={item.title} img={item.img} title={item.title} desc={item.desc}/>)}
        </div>
    </div>
  )
}

export default Feature