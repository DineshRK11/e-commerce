'use client'
import React, { useEffect, useState } from 'react';
import { Whisper } from 'next/font/google';
// import Data from '@/utils/ProductData';
import ProductCard, { IProduct } from './ProductCard';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import axios from 'axios';


const whisper = Whisper({subsets:['latin'],weight:['400']});
const tabsData = ["All","Skin Care","Lipsticks","Makeup", "Nail & Wax"];

const NewArrival = () => {
    
    const [selected ,setSelected]=useState(0);
    const [data,setData]=useState([]);
    const [initialData,setInitialData]=useState([]);


useEffect(()=>{
    axios.get('http://localhost:8000/Products')
    .then(res =>{
       console.log('res from slice',res);
       setInitialData(res.data)
       setData(shuffleArray(res.data).slice(0,15))
    })
    
},[])

    const shuffleArray=(array:any)=>{
     return array
     .map((value:any)=>({value, sort:Math.random()}))
     .sort((a:any,b:any)=>a.sort-b.sort)
     .map(({value}:any)=>value);
    };


    const handleTab=(ind:number)=>{
        const category = tabsData[ind].toLowerCase()
    setSelected(ind)

    if(category ==='all'){
        setData(shuffleArray(initialData).slice(0,15))
        return 
    }

    const filterData=initialData.filter((item:any)=>item.category?.includes(category));
    setData(shuffleArray(filterData));
    }


  return (
    <div className='container pt-32'>
        <div className='text-center'>
            <h3 className={`${whisper.className} text-[40px] text-gray-500`}>For your beauty</h3>
            <h2 className='font-semibond text-5xl text-[red] py-2'>New Arrival </h2>

            <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center
            uppercase font-medium text-xl'>
                {tabsData.map((text,index)=>
                 <li key={text} 
                 className={` ${selected===index && 'text-[red]'} cursor-pointer hover:text-[red]`}
                 onClick={()=>handleTab(index)}
                 >
                    {text}</li>)}
                
            </ul>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
                {data.map((item:IProduct)=><ProductCard key={item.id} id={item.id} img={item.img} name={item.name} 
                price={item.price} sale={item.sale}/>)}
            </div>
        </div>
    </div>
  )
}

export default NewArrival