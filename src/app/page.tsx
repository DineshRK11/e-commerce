import BlogSection from '@/components/BlogSection'
import Category from '@/components/Category'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import NewArrival from '@/components/NewArrival'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Hero/>
    <Feature/>
    <NewArrival/>
    <Category/>
    <BlogSection/>

   </main>
  )
}
