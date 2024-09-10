import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-[100%] h-[90vh] bg-[#fce3fe] pt-[100px]'>
      <div className='w-[580px] h-auto bg-[white] m-auto py-[40px] px-[60px]'>
        <h1 className='my-[20px] text-[30px] font-bold text-center'>Sign Up</h1>
        <div className='flex flex-col gap-[30px] mt-[30px]'>
          <input 
            type="text"
            placeholder='Your Name'
            className='h-[72px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'
          />
          <input 
            type="email" 
            placeholder='Email Address'
            className='h-[72px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'
          />
          <input 
            type="password"
            placeholder='Password'
            className='h-[72px] w-[100%] pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'
          />
        </div>
        <button className='w-full h-[72px] text-[white] bg-[#ff4141] mt-[30px] text-[24px] font-[500] cursor-pointer'>Continue</button>
        <p className='mt-[20px] text-[#5c5c5c] text-[18px] font-[500]'>
          Already have an account? <span className='text-[#ff4141]'>Login</span>
        </p>
        <div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] font-[500] text-[18px]'>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup