import React from 'react'
import data_prodcut from './assets/data'
import Items from './Items'

const RelatedProduct = () => {


  return (
    <div className='flex flex-col item-center gap-[10px] h-[90vh] px-[20px] w-[80%] mx-auto'>
        <div className='text-center flex flex-col items-center'>
        <h1 className='text-[#171717] text-[50px] font-[600] text-center'>Related Products</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        </div>
        <div className="item mt-[50px] flex gap-[30px]">
        {
          data_prodcut.map((item , i) => (
            <>
              <Items 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </>
          ))
        }
        </div>
    </div>
  )
}

export default RelatedProduct