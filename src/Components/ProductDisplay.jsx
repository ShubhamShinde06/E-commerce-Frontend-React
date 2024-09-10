import React, { useContext } from 'react'

import star_icon from './assets/star_icon.png'
import star_dull_icon from './assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = ({product}) => {

    const {addToCart} = useContext(ShopContext)

  return (
    <div className='productdisplay flex mx-[170px] mb-[100px]'>
        <div className='left flex gap-[17px]'>
            <div className='img-list flex flex-col gap-[16px]'>
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
                <img className='h-[163px]' src={product.image} alt="" />
            </div>
            <div className="product-img">
                <img className='main-img w-[586px] h-[700px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='right mx-[70px] flex flex-col'>
            <h1 className='text-[#3d3d3d3] text-[40px] font-[700]'>{product.name}</h1>
            <div className='start flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]'>
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="prices flex my-[40px] gap-[30px] text-[24px] font-[700]">
                <div className='text-[#818181] line-through'>
                    ${product.old_price}
                </div>
                <div className='text-[#ff4141]'>
                    ${product.new_price}
                </div>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta a sed recusandae sequi nisi, reprehenderit sit quasi officia dolorem.
            </div>
            <div className='size'>
                <h1 className='mt-[55px] text-[#656565] text-[20px] font-[600]'>Select Size</h1>
                <div className="right-size flex my-[30px] gap-[20px]">
                    <div className='py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
                    <div className='py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
                    <div className='py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
                    <div className='py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
                    <div className='py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}} className='py-[20px] px-[40px] text-[16px] font-[600] text-[white] bg-[#ff4141] mb-[40px] cursor-pointer'>ADD TO CART</button>
            <p className='right-cat mt-[10px] '>
                <span className='font-[600]'>Category : </span>
                Women, T-Shirt, Crop TOP
            </p>
            <p className='right-cat mt-[10px]'>
                <span className='font-[600]'>Tags : </span>
               Modren, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay