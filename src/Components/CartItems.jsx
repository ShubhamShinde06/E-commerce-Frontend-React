import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from './assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'

const CartItems = () => {

    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='my-[100px] mx-[170px]'>
        <div className="format-main grid grid-cols-6 items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-[600]">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e3e3e3]' />
        {
            all_product.map((e) => {
                if(cartItems[e.id] > 0)
                {
                    return(
                        <>
                        <div>
                            <div className="cart-format grid grid-cols-6 items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-[600] justify-center">
                                <Link to={`/product/${e.id}`}><img src={e.image} alt="" className='product-icon' /></Link>
                                <p>{e.name}</p>
                                <p className=' w-[15px] mx-[5px]'>${e.new_price}</p>
                                <button className=' w-[15px] mx-[35px]'>{cartItems[e.id]}</button>
                                <p className='w-[15px] mx-[5px]'>${e.new_price*cartItems[e.id]}</p>
                                <img className='cursor-pointer w-[15px] mx-[35px]' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div> 
                        </>
                    )
                }
                return null;
            })
        }
        <div className='flex my-[100px]'>
            <div className='flex-1 flex flex-col mr-[200px] gap-[40px]'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='flex justify-between py-[15px]'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[15px]'>
                        <p>shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[15px]'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button className='w-[262px] h-[58px] bg-[#ff5a5a] text-[#fff] text-[16px] font-[600]'>PROCED TO CHECKOUT</button>
                </div>
            </div>
            <div className='flex flex-1 flex-col text-[16px] font-[500]'>
                <p className='text-[#555]'>if you have a promo code, Enter it here</p>
                <div className='w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex justify-between'>
                    <input className='outline-none bg-transparent text-[16px] w-full h-[50px]' type="text" placeholder='promo code' />
                    <button className='w-[170px] h-[58px] text-[16px] bg-[black] text-[white] cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems