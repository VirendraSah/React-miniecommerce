import React from 'react'
import { Link } from 'react-router'
function Header() {
    return (
        <header className='bg-[#111827] py-5'>
            <div className='max-w-[1320px] m-auto px-3 flex justify-between items-center'>
                <Link to={'/'} className='flex gap-4'>
                    <img src="../logo.svg" alt="logo" />
                    <h3 className='text-white font-bold text-2xl'>KadriBazar</h3>
                </Link>
                <div>
                    <ul className='list-none text-white flex gap-4'>
                        <li>
                            <Link to={'/product'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/cart'}>Cart</Link>
                        </li>
                        <li>
                            <Link to={'/register'}>Register</Link>
                        </li>
                        <li>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export { Header }
