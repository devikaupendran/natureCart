import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
   return (
      <div className='mt-14'>
         <Banner />
         <Categories />
         <BestSeller />
         <BottomBanner />
      </div>
   )
}

export default Home
