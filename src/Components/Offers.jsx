import React from 'react'
import exclusive_image from './assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers w-[65%] h-[60vh] flex gap-[50px] m-auto mb-[150px] px-[140px]  bg-gradient-to-b from-[#fc31ff39] to-[#e1ffea22]'>
      <div className='offers-left flex-1 flex flex-col justify-center'>
        <h1 className='text-[#171717] text-[80px] font-[600]'>Exclusive</h1>
        <h1 className='text-[#171717] text-[50px] font-[600]'>offers For You</h1>
        <p className='text-[#171717] text-[22px] font-[600]'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] text-[white] text-[32px] font-[500] mt-[30px] cursor-pointer'>Check Now</button>
      </div>
      <div className='offers-right flex items-center justify-center'>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers