import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon  from '../Components/assets/dropdown_icon.png'
import Items from '../Components/Items'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className=''>
      <img src={props.banner} alt="" className='block my-[30px] mx-auto w-[82%]' />
      <div className="shopcategory-indexSort flex mx-[170px] justify-between items-center ">
        <p>
          <span className='font-[600]'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatgory-sort py-[10px] px-[20px] rounded-[40px] border border-[#888] flex items-center gap-[10px]">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products my-[20px] mx-[40px] grid grid-cols-4  gap-x-8 gap-y-4 ">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Items
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                     />
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className='flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] cursor-pointer'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory