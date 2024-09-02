import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-48 bg-white shadow-2xl p-2 rounded-md'>
        <div className='mb-2 mx-auto'>
            <Image src={"/States/AP.jpg"} width={191} height={40} alt="pd img" />
        </div>
        <div className='font-semibold gap-1 flex flex-col justify-center items-center'>
            <div className=''>name</div>
            <div className=''>$300</div>
            <button className='w-full bg-black text-white rounded-3xl p-1 font-medium'>add to cart</button>
            <button className='w-full bg-black text-white rounded-3xl p-1 font-medium'>wishlist</button>
        </div>
    </div>
  )
}

export default ProductCard