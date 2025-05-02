import React, { useState, useEffect } from 'react';
import { IoIosHeart } from 'react-icons/io';
import axios from 'axios'

function Allproducts() {
    let [product, setproduct]=useState([])
    let getProducts = () => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php')
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                setproduct(finalRes.data)
            })
    }
    useState(() => {
        getProducts()
    }, [])

    return (
        <>
            {product.map((product, index) => {
                return (
                    <ProductItem data={product} key={index} />
                )
            })
            }
        </>
    )
}
export {Allproducts}
function ProductItem({ data: { image, name, price, category_name } }) {
    return (
        <div className='p-2 border border-amber-300'>
            <figure className='w-full relative'>
                <img src={image} alt={name} className='w-full' />
                <div className='absolute top-[10px] end-[10px]'>
                    <IoIosHeart className='text-[red] text-[25px]' />
                </div>
            </figure>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[14px] line-clamp-2'>{name}</p>
                    <span className='font-bold text-[14px] text-[#b45309]'>Rs {price}</span>
                    <span className='text-[12px]'>{category_name}</span>
                </div>
                <div>
                    <button className='text-[#fff] text-[14px] bg-[#2563eb] py-1 px-4 rounded-sm cursor-pointer'>ADD</button>
                </div>
            </div>
        </div>
    )
}
