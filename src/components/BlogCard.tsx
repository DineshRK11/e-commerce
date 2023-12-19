import React from 'react'

interface propType{
    img:string;
    title:string;
    date:string;
    comment:number|undefined
}
const BlogCard = ({img,title,date,comment}:propType) => {
  return (
    <div className='space-y-4'>
        <img 
        className='rounded-lg hover:scale-10s transition-transform'
        src={img}
        alt='post'/>
        <div className="text-[red] font-medium">
            <span>{date} / </span>
            <span>{comment} comments</span>
        </div>
        <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

export default BlogCard