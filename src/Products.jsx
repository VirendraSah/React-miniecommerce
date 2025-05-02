import React, { useState } from 'react'
import { Header } from './common/Header'
import { FaAngleDown } from "react-icons/fa";
import { Allproducts } from './common/Allproducts';
import axios from 'axios';
function Products() {
    let [category ,setCategory]=useState([])
    let getCategory=()=>{
            axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((apiData)=>apiData.data)
            .then((finalRes)=>{
                setCategory(finalRes.data)
            })
    }
    useState(()=>{
        getCategory()
    },[])
    
    let [Brand,setBrand]=useState([])
    let getBrand=()=>{
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
        .then((apiData)=>apiData.data)
        .then((finalRes)=>{
            setBrand(finalRes.data)
        })
    }
    useState(()=>{
        getBrand()
    },[])

    return (
        <>
            <Header />
            <section className='w-full'>
                <div className='max-w-full m-auto py-5'>
                    <div className=''>
                        <div className='w-full'>
                            <div className='w-44 flex items-center gap-4 justify-around mb-4'>
                                <span className='font-bold text-[14px]'>FILTERS</span>
                                <span className='font-bold text-[14px] text-red-500 cursor-pointer'>CLEAR ALL</span>
                            </div>
                        </div>
                        <div className='w-full gap-3 grid grid-cols-[15%_auto]'>
                            <div className=''>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>categories</span>
                                        <div className=''>
                                            {category.map((data,index)=>{
                                                return(
                                                    <Filtercat filterName={data.name} key={index} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1
                                            [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>BRAND</span>
                                        <div className=''>
                                            {Brand.map((data,index)=>{
                                                return(
                                                    <Filtercat filterName={data.name} key={index}/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>PRICE</span>
                                        <div className=''>
                                            <Filtercat filterName={'Rs. 10 to Rs. 250'} />
                                            <Filtercat filterName={'Rs. 250 to Rs. 500'} />
                                            <Filtercat filterName={'Rs. 500 to Rs. 1000'} />
                                            <Filtercat filterName={'Rs. 1000 to Above'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>BRAND</span>
                                        <div className=''>
                                            <Filtercat filterName={'Rs. 10 to Rs. 250'} />
                                            <Filtercat filterName={'Rs. 250 to Rs. 500'} />
                                            <Filtercat filterName={'Rs. 500 to Rs. 1000'} />
                                            <Filtercat filterName={'Rs. 1000 to Above'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>discount range</span>
                                        <div className=''>
                                            <Filtercat filterName={'5% and above'} />
                                            <Filtercat filterName={'10% and above'} />
                                            <Filtercat filterName={'15% and above'} />
                                            <Filtercat filterName={'20% and above'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>Rating</span>
                                        <div className=''>
                                            <Filtercat filterName={'4★ & above'} />
                                            <Filtercat filterName={'3★ & above'} />
                                            <Filtercat filterName={'2★ & above'} />
                                            <Filtercat filterName={'1★ & above'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative bg-[#fafafa]'>
                                <div className='absolute group right-52 top-[-50px]'>
                                    <div className='flex items-end flex-col'>
                                        <button className="text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center border-1 gap-2" type="button">
                                            Sort by: Recommended <FaAngleDown />
                                        </button>
                                        {/* Dropdown menu */}
                                        <div className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-max">
                                            <ul className="py-2 text-sm">
                                                <DropdownItem itemName={'Name : A to Z'} />
                                                <DropdownItem itemName={'Name : Z to A'} />
                                                <DropdownItem itemName={'Price : Low to High'} />
                                                <DropdownItem itemName={'Price : High to Low'} />
                                                <DropdownItem itemName={'Discounted Price : Low to High'} />
                                                <DropdownItem itemName={'Discounted Price : High to Low'} />
                                                <DropdownItem itemName={'Rating : Low to High'} />
                                                <DropdownItem itemName={'Rating : High to Low'} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-3'>
                                    <Allproducts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { Products }

function Filtercat({ filterName }) {
    return (
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
            <label className="ms-2 text-sm font-medium">{filterName}</label>
        </div>
    )
}

function DropdownItem({ itemName }) {
    return (
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 ">{itemName}</a>
        </li>
    )
}