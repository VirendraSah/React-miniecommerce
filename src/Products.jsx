import React from 'react'
import { Header } from './common/Header'
import { FaAngleDown } from "react-icons/fa";
import { ProductData } from './Data/ProductData';
import { ProductItem } from './Home';
function Products() {
    return (
        <>
            <Header />
            <section className='w-full'>
                <div className='max-w-[1320px] m-auto py-5'>
                    <div className=''>
                        <div className='w-full'>
                            <div className='w-44 flex items-center gap-4 justify-around mb-4'>
                                <span className='font-bold text-[14px]'>FILTERS</span>
                                <span className='font-bold text-[14px] text-red-500 cursor-pointer'>CLEAR ALL</span>
                            </div>
                        </div>
                        <div className='w-full flex gap-3'>
                            <div className='w-44'>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>categories</span>
                                        <div className=''>
                                            <Filtercat filterName={'Beauty'} />
                                            <Filtercat filterName={'Fragrances'} />
                                            <Filtercat filterName={'Furniture'} />
                                            <Filtercat filterName={'Groceries'} />
                                            <Filtercat filterName={'Home Decoration'} />
                                            <Filtercat filterName={'Kitchen Accessories'} />
                                            <Filtercat filterName={'Mens Shirts'} />
                                            <Filtercat filterName={'Mens Shoes'} />
                                            <Filtercat filterName={'Mens Watches'} />
                                            <Filtercat filterName={'Mobile Accessories'} />
                                            <Filtercat filterName={'Motorcycle'} />
                                            <Filtercat filterName={'Skin Care'} />
                                            <Filtercat filterName={'Smartphones'} />
                                            <Filtercat filterName={'Sports Accessories'} />
                                            <Filtercat filterName={'Sunglasses'} />
                                            <Filtercat filterName={'Tablets'} />
                                            <Filtercat filterName={'Tops'} />
                                            <Filtercat filterName={'Vehicle'} />
                                            <Filtercat filterName={'Womens Bags'} />
                                            <Filtercat filterName={'Womens Dresses'} />
                                            <Filtercat filterName={'Womens Jewellery'} />
                                            <Filtercat filterName={'Womens Shoes'} />
                                            <Filtercat filterName={'Womens Watches'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='border-1'>
                                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1
                                            [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                                        <span className='uppercase font-bold text-[15px]'>BRAND</span>
                                        <div className=''>
                                            <Filtercat filterName={'Essence'} />
                                            <Filtercat filterName={'Glamour Beauty'} />
                                            <Filtercat filterName={'Velvet Touch'} />
                                            <Filtercat filterName={'Chic Cosmetics'} />
                                            <Filtercat filterName={'Nail Couture'} />
                                            <Filtercat filterName={'Calvin Klein'} />
                                            <Filtercat filterName={'Chanel'} />
                                            <Filtercat filterName={'Gucci'} />
                                            <Filtercat filterName={'Annibale Colombo'} />
                                            <Filtercat filterName={'Furniture Co.'} />
                                            <Filtercat filterName={'Knoll'} />
                                            <Filtercat filterName={'Bath Trends'} />
                                            <Filtercat filterName={'Apple'} />
                                            <Filtercat filterName={'Asus'} />
                                            <Filtercat filterName={'Huawei'} />
                                            <Filtercat filterName={'Lenovo'} />
                                            <Filtercat filterName={'Dell'} />
                                            <Filtercat filterName={'Fashion Trends'} />
                                            <Filtercat filterName={'Gigabyte'} />
                                            <Filtercat filterName={'Classic Wear'} />
                                            <Filtercat filterName={'Casual Comfort'} />
                                            <Filtercat filterName={'Urban Chic'} />
                                            <Filtercat filterName={'Nike'} />
                                            <Filtercat filterName={'Puma'} />
                                            <Filtercat filterName={'Off White'} />
                                            <Filtercat filterName={'Fashion Timepieces'} />
                                            <Filtercat filterName={'Longines'} />
                                            <Filtercat filterName={'Rolex'} />
                                            <Filtercat filterName={'Amazon'} />
                                            <Filtercat filterName={'Beats'} />
                                            <Filtercat filterName={'Techgear'} />
                                            <Filtercat filterName={'Gadgetmaster'} />
                                            <Filtercat filterName={'Snaptech'} />
                                            <Filtercat filterName={'Provision'} />
                                            <Filtercat filterName={'Generic Motors'} />
                                            <Filtercat filterName={'Kawasaki'} />
                                            <Filtercat filterName={'Motogp'} />
                                            <Filtercat filterName={'Scootmaster'} />
                                            <Filtercat filterName={'Speedmaster'} />
                                            <Filtercat filterName={'Attitude'} />
                                            <Filtercat filterName={'Olay'} />
                                            <Filtercat filterName={'Vaseline'} />
                                            <Filtercat filterName={'Oppo'} />
                                            <Filtercat filterName={'Realme'} />
                                            <Filtercat filterName={'Samsung'} />
                                            <Filtercat filterName={'Vivo'} />
                                            <Filtercat filterName={'Fashion Shades'} />
                                            <Filtercat filterName={'Fashion Fun'} />
                                            <Filtercat filterName={'Chrysler'} />
                                            <Filtercat filterName={'Dodge'} />
                                            <Filtercat filterName={'Fashionista'} />
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
                            <div className='grow relative bg-[#fafafa] '>
                                <div className='absolute group right-52 top-[-50px]'>
                                    <div className='flex items-end flex-col'>
                                        <button class="text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center border-1 gap-2" type="button">
                                            Sort by: Recommended <FaAngleDown />
                                        </button>
                                        {/* Dropdown menu */}
                                        <div class="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-max">
                                            <ul class="py-2 text-sm">
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
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                                    {ProductData.map((product, index) => {
                                        return (
                                            <ProductItem data={product} key={index} />
                                        )
                                    })}
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
        <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
            <label for="default-checkbox" class="ms-2 text-sm font-medium">{filterName}</label>
        </div>
    )
}

function DropdownItem({ itemName }) {
    return (
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 ">{itemName}</a>
        </li>
    )
}