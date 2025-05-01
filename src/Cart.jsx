import React from 'react'
import { Header } from './common/Header'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function Cart() {
    return (
        <div>
            <Header />
            <section className='w-full mt-7'>
                <div className='max-w-[1120px] py-7 px-3 m-auto grid grid-cols-4 gap-9'>
                    <div className='lg:col-span-3 col-span-4 flex flex-col'>
                        <div className='border-b-1 border-[#0000003d] flex justify-between items-center py-5'>
                            <h2 className='font-semibold text-2xl'>Shopping Cart</h2>
                            <p className='font-semibold text-2xl'>1 Items</p>
                        </div>
                        <div className='grid grid-cols-6 py-7'>
                            <div className='col-span-3'>
                                <p>Product Details</p>
                            </div>
                            <div>
                                <p>Quantity</p>
                            </div>
                            <div>
                                <p className='text-center lg:text-start'>Price</p>
                            </div>
                            <div>
                                <p className='text-center lg:text-start'>Total</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 hover:bg-[#0000001d] p-3'>
                            <div className='col-span-3 flex-col gap-3 lg:flex-row' >
                                <figure className='w-[20%]'>
                                    <img src="allproducts/thumbnail.jpeg" alt="" className='w-full' />
                                </figure>
                                <div className='flex flex-col gap-3'>
                                    <p className='font-bold text-[14px]'>Eyeshadow Palette with Mirror</p>
                                    <span className='text-[12px] text-[#f2736c]'>Glamour Beauty</span>
                                    <button className='font-semibold text-[12px] text-[#717784] hover:text-[red] cursor-pointer'>Remove</button>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <FaMinus />
                                    <div className='px-2 py-1 bg-[white] border-1 border-[#0000006d]'>
                                        <span>1</span>
                                    </div>
                                    <FaPlus />
                                </div>
                            </div>
                            <div>
                                <p className='text-center lg:text-start'>Rs. 19.99</p>
                            </div>
                            <div>
                                <p className='text-center lg:text-start'>Rs. 19.99</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 lg:col-span-1'>
                        <div className='border-b-1 border-[#0000003d] flex items-center py-5'>
                            <h2 className='font-semibold text-2xl'>Order Summary</h2>
                        </div>
                        <div className='flex justify-between py-7'>
                            <p className='font-semibold'>Items 1</p>
                            <p className='font-semibold'>Rs. 19.99</p>
                        </div>
                        <div>
                            <p className='font-semibold'>SHIPPING</p>
                            <form class="max-w-sm mx-auto mt-3">
                                <select id="extracharges" class="bg-gray-50 border border-gray-300 text-[black] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="spipping charges">Standard shipping - Rs. 100</option>
                                </select>
                            </form>
                        </div>
                        <div className='border-b-1 border-[#00000028] pb-3'>
                            <form class="max-w-sm mx-auto mt-3 flex flex-col gap-3 justify-start items-start">
                                <label for="large-input" class="block mb-2 text-sm font-medium text-[black]">Promo Code</label>
                                <input type="text" class="block w-full p-2 text-[black] border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-[black] dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">APPLY</button>
                            </form>
                        </div>
                        <div className='flex flex-col gap-5 pt-5'>
                            <div className='flex justify-between items-center'>
                                <p>Total cost</p>
                                <p>Rs. 119.99</p>
                            </div>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Cart }

