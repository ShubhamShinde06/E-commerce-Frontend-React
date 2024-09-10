import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item w-[350px] hover:scale(1.05) hover:duration-[0.6s]'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='mt-[6px] mb-[6px] mr-[0px] ml-[0px]'>{props.name}</p>
        <div className='item-prices flex gap-[20px]'>
            <div className='item-price-new text-[#374151] text-[18px] font-[600]'>
                ${props.new_price}
            </div>
            <div className='item-price-old text-[#8c8c8c] text-[18px] font-[500] line-through'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items