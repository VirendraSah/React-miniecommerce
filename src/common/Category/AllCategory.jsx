import React, { useContext, useState } from 'react';
import Productcategory from './productCategory';
import Brandcategory from './Brandcategory';
import PriceCategory from './PriceCategory';
import Discountcategory from './Discountcategory';
import RatingCategory from './RatingCategory';
import { pageContext } from '../../MainContext';
function AllCategory() {
    let {refreshKey}=useContext(pageContext)
    return (
        <React.Fragment key={refreshKey}>
            <Productcategory />
            <Brandcategory />
            <PriceCategory />
            <Discountcategory />
            <RatingCategory />
        </React.Fragment>
    )
}

function DropdownItem({ itemName, onClick }) {
    return (
        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 cursor-pointer" onClick={onClick}>{itemName}</li>
    )
}


export { DropdownItem, AllCategory }