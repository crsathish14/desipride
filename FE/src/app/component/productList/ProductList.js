'use client'
import { getProducts } from '@/apiUtil/API';
import React, { useEffect } from 'react'
import ProductCard from '../productCard/ProductCard';

const ProductList = ({state, category}) => {

  async function getProductsfomApi() {
    const productList = await getProducts();
    console.log(productList);
  };

  useEffect(()=>{
    getProductsfomApi();
  },[]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductList