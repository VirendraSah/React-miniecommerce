import React, { useContext } from 'react'
import { pageContext } from '../../MainContext'

function Discountcategory() {
    const {setDiscount}=useContext(pageContext)
    let DiscountRange = [
        {
            label: '5% and above',
            discountFrom: 5
        },
        {
            label: '10% and above',
            discountFrom: 10
        },
        {
            label: '15% and above',
            discountFrom: 15
        },
        {
            label: '20% and above',
            discountFrom: 20
        }
    ]

    let discountFilter = (e) => {
        if (e.target.checked) {
            setDiscount(e.target.value)
        }
    }
    return (
        <React.Fragment>
            <div>
                <div className='border-1'>
                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                        <span className='uppercase font-bold text-[15px]'>Discount Range</span>
                        <div className=''>
                            {DiscountRange.map((items, index) => {
                                const { label, discountFrom } = items
                                return (
                                    <React.Fragment key={index}>
                                        <div className="flex items-center mb-4">
                                            <input onChange={discountFilter} type='radio' name='radio' value={discountFrom} className={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
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

export default Discountcategory