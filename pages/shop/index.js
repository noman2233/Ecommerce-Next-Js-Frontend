import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/Products'

const index = ({data}) => {
  console.log(data)
  return (<>
    <h3 className='font-bold text-xl  text-center my-auto'>All Products</h3>     
  <div className='flex align-middle justify-center flex-wrap'>
       {data.map((item,index)=>{
            return(
                <div className=' single_product_container my-5' key={index.id}>
                 <div className="  flex-wrap mb-4 w-[260px] mx-5  p-2  flex  flex-col cursor-pointer shadow-md">
            <div  className=" h-48 flex align-middle justify-center rounded overflow-hidden" >
              <Image width={200} height={200} objectFit="contain"  alt="ecommerce" className="w-40 flex align-middle justify-center md:justify-center object-contain z-[-1]" src={item.image} />
            </div>
            <div className="mt-4 ">
             
              <h2 className="text-gray-900 text-center title-font text-lg font-medium">{item.title.slice(0,19)} </h2>
              <p className="mt-1 text-center">${item.price}</p>
           
              <button  className="flex mx-auto my-3 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Add to cart</button>

            </div>
          </div>

                </div>
              
              )
            })} 
    
</div>
  
        </>
)
}

export default index

export async function getServerSideProps(context) {
  const { data } =await axios.get("https://fakestoreapi.com/products");

  
  return {
    props: {
      data: data,
    },
  };
}
