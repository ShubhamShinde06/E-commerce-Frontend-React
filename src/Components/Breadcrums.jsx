import React from 'react'
import arrow_icon from './assets/breadcrum_arrow.png'

const Breadcrums = (props) => {

    const {product} = props

  return (
    <div className='flex items-center gap-[8px] text-[16px] font-[600] my-[60px] mx-[170px] uppercase'>
        HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums