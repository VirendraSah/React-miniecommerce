import React, { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { pageContext } from '../../MainContext';
function Brandcategory() {
    let{brandfil, setBrandfilter, filter}=useContext(pageContext)
    let [Brand, setBrand] = useState([])
    let getBrand = () => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((apiData) => apiData.data)
            .then((finalRes) => {
                setBrand(finalRes.data)
            })
    }
    useState(() => {
        getBrand()
    }, [])

    let BrandFilter = (e) => {
        e.target.value
        if (e.target.checked) {
            if (!filter.includes(e.target.value)) {
                setBrandfilter([...brandfil, e.target.value])
            }
        }
        else{
            setBrandfilter(brandfil.filter((item)=> item!=e.target.value))
        }

    }
    return (
        <React.Fragment>
            <div>
                <div className='border-1'>
                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                        <span className='uppercase font-bold text-[15px]'>Brand</span>
                        <div className=''>
                            {Brand.map((items, index) => {
                                const { id, name, slug } = items
                                return (
                                    <React.Fragment key={index}>
                                        <div className="flex items-center mb-4">
                                            <input onChange={BrandFilter} id={id} type='checkbox' name='checkbox' value={slug} className={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
                                            <label className="ms-2 text-sm font-medium">{name}</label>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Brandcategory