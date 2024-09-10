import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollection from '../Components/NewCollection'
import NewLetter from '../Components/NewLetter'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection />
        <NewLetter/>

    </div>
  )
}

export default Shop