import React from 'react'
import { Header } from './common/Header'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { ProductData } from './Data/ProductData';

function Home() {
    return (
        <div className=''>
            <Header />
            <section className='w-full bg-[#111827] py-5'>
                <div className='max-w-[1320px] px-3'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-center justify-center'>
                        <div className='flex gap-6 flex-col'>
                            <h2 className='text-white text-[55px]/15 font-bold lin'>The experience makes all the difference.</h2>
                            <p className='text-1xl text-[#9b9b9c]'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                            <div className='flex gap-6'>
                                <button className="bg-[#ef4444] hover:bg-[#ef5555] text-white font-bold py-2 px-4 rounded flex gap-3 justify-center items-center">
                                    Button
                                    <FaArrowRightLong />
                                </button>
                                <button className="bg-transparent text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    OFFERS
                                </button>
                            </div>
                        </div>
                        <div className=''>
                            <img src="../phone-mockup-bg.png" alt="" className='max-w-full' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full'>
                <div className='px-5 py-5 max-w-[1320px]'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
                        <div className="relative group flex justify-center items-center h-full w-full">
                            <img className="object-center object-cover h-full w-full" src="../public/girlimg.jpeg" alt="girl-image" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>

                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                        <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                            <div className="relative group flex justify-center items-center h-full w-full">

                                <img className="object-center object-cover h-full w-full" src="../public/girl shoes.jpeg" alt="shoe-image" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="../public/watch.jpeg" alt="watch-image" />
                                <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                            </div>
                        </div>
                        <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                            <img className="object-center object-cover h-full w-full" src="../public/necklace 2.jpeg" alt="girl-image" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                        <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                            <img className="object-center object-cover h-full w-full hidden md:block" src="../public/necklace.jpeg" alt="girl-image" />
                            <img className="object-center object-cover h-full w-full md:hidden" src="../public/necklace 1.jpeg" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Accessories</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full py-5'>
                <div className='max-w-[1320px] m-auto py-5 px-3'>
                    <div className='w-full grid lg:grid-cols-5 gap-4'>
                        {ProductData.map((product,index)=>{
                            return(
                                <ProductItem data={product} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Home }

function ProductItem({data:{path,title}}) {
    return (
        <div className='p-2 border border-amber-300'>
            <figure className='w-full relative'>
                <img src={path} alt={title} className='w-full' />
                <div className='absolute top-[10px] end-[10px]'>
                    <IoIosHeart className='text-[red] text-[25px]' />
                </div>
            </figure>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <p className='font-bold text-[14px]'>{title}</p>
                    <span className='font-bold text-[14px] text-[#b45309]'>Rs 9.99</span>
                    <span className='text-[12px]'>Essence</span>
                </div>
                <div>
                    <button className='text-[#fff] text-[14px] bg-[#2563eb] py-1 px-4 rounded-sm'>ADD</button>
                </div>
            </div>
        </div>
    )
}

export {ProductItem}