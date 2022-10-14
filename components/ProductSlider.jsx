
import { Divider } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const ProductSlide = ({data}) => {


//   const [product, setProduct] = useState([]);

//   useEffect(() => {
    
// const getProducts=async()=>{
//   const res = await publicRequest.get("/products/getallproducts");
//   setProduct(res.data);

// }
// getProducts()

//   }, [])


  return (
    <div>
    
        <div className="div">

        <div className="product_deal w-[100vw] flex justify-around align-middle">
        <h3 className='font-bold text-xl my-4 right-0'>DEAL OF THE DAY</h3>
        
    {/* <Link href="/shop"> <button className=" text-white  bg-black border-0 h-[40px] px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">View All</button></Link> */}
    <Link href="/about">
      <button className='className=" text-white text-center bg-black border-0 h-[40px] px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"'>All Products</button>
    </Link>
        </div>
    <Divider className='w-[100vw]'/>
        </div>


        <Carousel responsive={responsive}
     
         infinite={true}
         draggable={false}
         swipeable={true}
         centerMode={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         showDots={false}
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container"
        >
              {data.map((item,index)=>{
                return(
                    <div className='single_product_container my-5'  key={index._id} >
                     <div className=" mb-4 w-[260px]  p-2  flex  flex-col cursor-pointer shadow-md" >
                <div className=" h-48 flex align-middle justify-center rounded overflow-hidden">
                  <img alt="ecommerce" className="w-40 flex align-middle justify-center md:justify-center object-contain z-[-1]" src={item.image} />
                </div>
                <div className="mt-4 ">
                  <h2 className="text-gray-900 text-center title-font text-lg font-medium">{item.title.slice(0,19)}  </h2>
                  <p className="mt-1 text-center">${item.price}</p>
                  {/* <button  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Add to cart</button> */}

                </div>
              </div>

                    </div>
                )
                })} 
        </Carousel> 
    </div>
  )
}

export default ProductSlide