import React from 'react'

const NewLetter = () => {
  return (
    <div className='w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] bg-gradient-to-b from-[#fc31ff4a] to-[#e1ffea22]'>
        <h1 className='text-[#454545] text-[55px] font-[600]'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545] text-[20px] my-[20px]'>Subscribe to our newletter and stay updated</p>
        <div className='flex item-center justify-between bg-[white] w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]'>
            <input 
                type="" 
                placeholder='Your Email id'
                className='w-[500px] ml-[30px] text-[#616161] text-[16px]'
            />
            <button className='w-[210px] h-[70px] rounded-[80px] bg-[black] text-[white] text-[16px] cursor-pointer'>Subdcribe</button>
        </div>
    </div>
  )
}

export default NewLetter