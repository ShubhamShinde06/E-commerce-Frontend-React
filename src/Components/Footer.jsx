import React from 'react'
import footer_logo from './assets/logo_big.png'
import inst_icon from './assets/instagram_icon.png' 
//import whatsapp_icon from './assets/whatsapp_icon.ong'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
        <div className="footer-logo flex items-center gap-[20px]">
            <img src={footer_logo} alt="" />
            <p className='text-[#3838383] text-[46px] font-[700]'>SHOPPER</p>
        </div>
        <ul className='footer-links flex gap-[50px] text-[#252525] text-[20px]'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="footer-social-icon flex gap-[20px] ">
            <div className="footer-icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border-[#ebebeb] flex gap-[20px]">
                <img src={inst_icon} alt="" />
                {/* <img src={whatsapp_icon} alt="" /> */}
            </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
            <hr className='w-[80%] rounded-[10px] h-[3px] bg-[#7c7c7c]' />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer