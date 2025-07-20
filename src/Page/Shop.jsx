import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import NewCollections from '../Component/NewCollections/NewCollections.jsx'
import NewsLetter from '../Component/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop
