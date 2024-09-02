import ProductList from '@/app/component/productList/ProductList'
import Link from 'next/link'
import React from 'react'

const page = ({ params }) => {
    console.log("jdkjcnskjcn")
    return <>
        <div className='my-5 w-full font-extrabold text-3xl text-center'><h1>Title</h1></div>
        <div className='flex w-full my-5'>
            <div className='categories flex-col w-[20%] font-semibold gap-2'>
                <div>
                    <Link href={'/state/'+params.state + '/furniture'}>Furniture</Link>
                </div>
                <div>
                    <Link href={'/state/'+params.state + '/Jewellary'}>Jewellary</Link>
                </div>
                <div>
                    <Link href={'/state/'+params.state + '/Textail'}>Textail</Link>
                </div>
                <div>
                    <Link href={'/state/'+params.state + '/Food'}>Food</Link>
                </div>
            </div>
            <div className='w-[80%]'>
                <ProductList state={params.state} category = {params.category}/>
            </div>
        </div>
    </>
}

export default page