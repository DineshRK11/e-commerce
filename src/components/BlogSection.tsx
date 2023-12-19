import React from 'react'
import BlogCard from './BlogCard'

const data=[
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/post__1.jpg',
        title:'Lorem ipsum dolor sit amet.',
        date:'Dec 27,2023',
        comment:8
    },
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/post__2.jpg',
        title:'Lorem ipsum dolor sit amet.',
        date:'Dec 25,2023',
        Comment:1
    },
    {
        img:'https://thebravecoders-responsive-cosmetics-website-with-dg110g8i1.vercel.app/post__3.jpg',
        title:'Lorem ipsum dolor sit amet.',
        date:'Dec 30,2023',
        Comment:6
    }
]
const BlogSection = () => {
  return (
    <div className='container pt-32'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500'>
        Present posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map(item=>(
            <BlogCard
            key={item.title}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}

            />))}
        </div>
    </div>
  )
}

export default BlogSection