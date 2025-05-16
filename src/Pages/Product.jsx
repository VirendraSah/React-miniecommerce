import { Header } from "../common/Header";
import { FaAngleDown } from "react-icons/fa";
import { Allproducts } from "../common/Allproducts";
// import { DropdownItem } from "../common/AllCategory";
import { DropdownItem } from "../common/Category/AllCategory";
// import { AllCategory } from "../common/AllCategory";
import { AllCategory } from "../common/Category/AllCategory";
import { DefaultButton } from "../common/Buttons";
import { pageContext } from "../MainContext";
import { useContext} from "react";
import { RedButton } from "../common/Buttons";
function Product() {
    let { page, setPage, setSorting, setFilter ,setRefreshKey, refreshKey } = useContext(pageContext)
    let Itemname = [
        ['Name : A to Z'],
        ['Name : Z to A'],
        ['Price : Low to High'],
        ['Price : High to Low'],
        ['Discounted Price : Low to High'],
        ['Discounted Price : High to Low'],
        ['Rating : Low to High'],
        ['Rating : High to Low']
    ]
    let filterRefresh=()=>{
        setFilter([])
        setPage(1)
        setRefreshKey(refreshKey+1)
    }
    return (
        <>
            <Header />
            <div className='max-w-full m-auto py-5'>
                <div className='w-full'>
                    <div className='w-44 flex items-center gap-4 justify-around mb-4'>
                        <span className='font-bold text-[14px]'>FILTERS</span>
                        <span className='font-bold text-[14px] text-red-500 cursor-pointer' onClick={filterRefresh}>CLEAR ALL</span>
                    </div>
                </div>
                <div className='w-full gap-3 grid grid-cols-[15%_auto]'>
                    <div>
                        <AllCategory />
                    </div>
                    <div className='relative bg-[#fafafa] flex flex-col items-center gap-7'>
                        <div className='absolute group right-52 top-[-50px]'>
                            <div className='flex items-end flex-col'>
                                <button className="text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center border-1 gap-2" type="button">
                                    Sort by: Recommended <FaAngleDown />
                                </button>
                                {/* Dropdown menu */}
                                <div className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-max">
                                    <ul className="py-2 text-sm">
                                        {Itemname.map((item, index) => {
                                            return (
                                                <DropdownItem itemName={item} key={index} onClick={() => setSorting(index + 1)} />
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-3'>
                            <Allproducts/>
                        </div>
                        <div className="px-5 flex items-center justify-between w-100">
                            <RedButton ButtonName={'Prev'} Onclick={() => {
                                if(page > 1) {
                                    setPage(page - 1)
                                }
                            }} />
                            <DefaultButton ButtonName={'Next'} Onclick={() => {
                                if(page<15){
                                    setPage(page + 1)
                                }
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product