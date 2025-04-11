import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'

const Home = () => {
   return (
      <div className='mt-14'>
         <Banner />
         <Categories />
         <BestSeller />
      </div>
   )
}

export default Home
