import React, { useContext, useState } from 'react'

import logo from './assets/logo.png'
import cart_icon from './assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'


const Navbar = () => {

  const {getTotalCartItem} = useContext(ShopContext)

  const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar flex justify-around p-[16px] shadow-md'>
        <div className='nav-logo flex gap-[10px] items-center'>
          <img src={logo} alt="logo" />
          <p className='text-[38px font-[600]'>SHOPPER</p>
        </div>
        <ul className='nav-menu flex items-center gap-[50px] text-[#626262] text-[20px font-[500]'>
          <li onClick={() => {setMenu('shop')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to='/'>Shop </Link>{menu === "shop" ? <hr className='w-[80%] h-[3px] rounded-[10px] bg-[#ff4343]'/> : ''}</li>
          <li onClick={() => {setMenu('mens')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to='/mens'>Men</Link> {menu === "mens" ? <hr className='w-[80%] h-[3px] rounded-[10px] bg-[#ff4343]'/> : ''}</li>
          <li onClick={() => {setMenu('womans')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to='/womens'>Women</Link> {menu === "womans" ? <hr className='w-[80%] h-[3px] rounded-[10px] bg-[#ff4343]'/> : ''}</li>
          <li onClick={() => {setMenu('kids')}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'><Link to='/kids'>Kids</Link> {menu === "kids" ? <hr className='w-[80%] h-[3px] rounded-[10px] bg-[#ff4343]'/> : ''}</li>
        </ul>
        <div className='flex items-center gap-[45px]'>
          <Link to='/login'><button className='w-[150px] h-[58px] border border-[#7a7a7a] text-[20px] font-[500] bg-[white] cursor-pointer rounded-[75px] active:bg-[#f3f3f3]'>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-[red] text-[white]'>{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar