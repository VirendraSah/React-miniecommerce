import { useContext, useEffect, useState } from 'react';
import { IoIosHeart } from 'react-icons/io';
import axios from 'axios'
import { Bluebutton } from './Buttons';
import { pageContext } from '../MainContext';

function Allproducts() {
    let { page, sorting, filter, brandfil, amountfilter, discount, rating, refreshKey } = useContext(pageContext)
    const amount = String(amountfilter).split(',').map(Number);
    let [product, setproduct] = useState([])
    let getProducts = () => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page,
                limit: 15,
                categories: filter.join(','),
                brands: brandfil.join(','),
                price_from: amount[0],
                price_to: amount[1],
                discount_from: discount,
                discount_to: null,
                rating,
                sorting
            }
        })
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                setproduct(finalRes.data)
            })
    }

    useEffect(() => {
        getProducts()
    }, [sorting, page, filter, brandfil, amountfilter, discount, rating, refreshKey ])

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
                    <Bluebutton ButtonName={'ADD'} />
                </div>
            </div>
        </div>
    )
}
export { Allproducts }
