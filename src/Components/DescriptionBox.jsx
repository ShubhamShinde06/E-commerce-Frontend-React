import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px]'>
        <div className="navigator flex ">
            <div className="navbo flex items-center justify-center text-[16px] font-[600] w-[171px] h-[70px] border border-[#d0d0d0]">Description</div>
            <div className="navbox fade flex items-center justify-center text-[16px] font-[600] w-[171px] h-[70px] border border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
        </div>
        <div className="desc flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, eaque. Tenetur recusandae ut, sequi accusamus numquam laborum in repellendus autem porro, nulla iusto officiis nam corporis ipsam suscipit quas incidunt!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et repellat dolor molestiae quas ullam, alias reprehenderit odit. Doloribus debitis cupiditate inventore? Quod molestiae neque, eum tenetur error quas quisquam placeat assumenda, voluptatem vel itaque hic impedit nam atque ipsum.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox