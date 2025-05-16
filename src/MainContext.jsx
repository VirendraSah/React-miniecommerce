import React, { createContext, useState } from 'react'
let pageContext=createContext()
function MainContext({children}) {
    const[page, setPage]=useState(1) //Global state
    const [sorting, setSorting] = useState(null)//Global State
    const [filter,setFilter]= useState([]) //Global State
    const [brandfil, setBrandfilter]=useState([]) //Global State
    const [amountfilter, setAmountfilter]=useState([]) //Global State
    const [discount, setDiscount]=useState(null) //Global State
    const [rating, setRating]=useState(null) //Global State
    const [refreshKey, setRefreshKey] = useState(0); //Global State
    let obj={
        page, setPage, sorting, setSorting, filter, setFilter, brandfil, setBrandfilter, rating, setRating,
        amountfilter, setAmountfilter, discount, setDiscount, refreshKey, setRefreshKey 
    }
  return (
    <pageContext.Provider value={obj}>
        {children}
    </pageContext.Provider>
  )
}

export {MainContext, pageContext}  //named