import React, { useContext } from 'react'
import { pageContext } from '../../MainContext'

function PriceCategory() {
    let {amountfilter, setAmountfilter}=useContext(pageContext)
    let PriceFilter = [
        {
            label: 'Rs. 10 to Rs. 250',
            fromPrice: 10,
            toPrice: 250
        },
        {
            label: 'Rs. 250 to Rs. 500',
            fromPrice: 250,
            toPrice: 500
        },
        {
            label: 'Rs. 500 to Rs. 100',
            fromPrice: 500,
            toPrice: 1000
        },
        {
            label: 'Upto Rs. 1000',
            fromPrice: 1000,
            toPrice: 100000
        }
    ]

    let priceFilter = (e) => {
        if (e.target.checked) {
            if (!amountfilter.includes(e.target.value)) {
                setAmountfilter(e.target.value)
            }
        }
    }
    return (
        <React.Fragment>
            <div>
                <div className='border-1'>
                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                        <span className='uppercase font-bold text-[15px]'>Price Range</span>
                        <div className=''>
                            {PriceFilter.map((items, index) => {
                                const { label, toPrice, fromPrice } = items
                                return (
                                    <React.Fragment key={index}>
                                        <div className="flex items-center mb-4">
                                            <input onChange={priceFilter} type='radio' name='radio' value={[fromPrice,toPrice]} className={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
                                            <label className="ms-2 text-sm font-medium">{label}</label>
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

export default PriceCategory