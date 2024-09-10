import React from 'react'
import Items from './Items'
import new_collection from './assets/new_collections'

const NewCollection = () => {
  return (
    <div className='popular flex flex-col items-center gap-[20px]  mb-[100px]'>
        <h1 className='text-[#171717] text-[50px] font-[600]'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className="grid grid-cols-4  mt-[50px] gap-[30px] px-[50px]">
            {
                new_collection.map((item, i) => (
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

export default NewCollection