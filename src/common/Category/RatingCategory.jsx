import React, { useContext } from 'react'
import { pageContext } from '../../MainContext'

function RatingCategory() {
   const {setRating} =useContext(pageContext)
    let Rating = [
        {
            label: '4★ & above',
            rating: 4
        },
        {
            label: '3★ & above',
            rating: 3
        },
        {
            label: '2★ & above',
            rating: 2
        },
        {
            label: '1★ & above',
            rating: 1
        }
    ]

     let RatingFilter = (e) => {
        if (e.target.checked) {
            setRating(e.target.value)
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className='border-1'>
                    <div className='max-h-52 py-3 px-2 flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#f31db5]'>
                        <span className='uppercase font-bold text-[15px]'>Rating Range</span>
                        <div className=''>
                            {Rating.map((items, index) => {
                                const { label, rating } = items
                                return (
                                    <React.Fragment key={index}>
                                        <div className="flex items-center mb-4">
                                            <input onChange={RatingFilter} type='radio' name='radio' value={rating} className={` border w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ${'rounded-full'} focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 `} />
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

export default RatingCategory