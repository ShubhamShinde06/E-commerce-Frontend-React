import React from 'react'
import hand_icon from './assets/hand_icon.png'
import arrow_icon from './assets/arrow.png'
import hero_img from './assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-[#fc31ff4a] to-[#e1ffea22] flex'>
        <div className='flex-1 flex flex-col justify-center gap-[20px] pl-[180px]'>
            <h2 className='text-[#090909] text-[26px] font-[600]'>New ARRIVALS ONLY</h2>
            <div>
                <div className='flex items-center gap-[20px]'>
                    <p className='text-[#171717] font-[700] text-[80px]'>new</p>
                    <img className='w-[105px]' src={hand_icon} alt="" />
                </div>
                <p className='text-[#171717] font-[700] text-[80px]'>collections</p>
                <p className='text-[#171717] font-[700] text-[80px]'>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-[white] text-[22px] font-[500] cursor-pointer'>
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-1 items-center justify-center'>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero