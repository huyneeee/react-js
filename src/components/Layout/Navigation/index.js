import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { GiShoppingCart } from 'react-icons/gi'
const Navigation = () => {
    return (
        <div className="flex justify-around w-full items-center py-2 ">
            <div >
                <img src="https://firebasestorage.googleapis.com/v0/b/shop-ff2b2.appspot.com/o/images%2Flogo.jpg?alt=media&token=99516ca8-4173-4d92-8ba4-ad08175bd36c" alt=""/>
            </div>
            <ul className="justify-between flex uppercase text-sm font-semibold">
                <li className="p-3 "><Link to="/" className="text-gray-800 tracking-widest">Home</Link></li>
                <li className="p-3 "><Link to="/todolist" className="text-gray-800 tracking-widest">Todo List</Link></li>
                <li className="p-3 "><Link to="/products" className="text-gray-800 tracking-widest">Products</Link></li>
            </ul>
            <div className=" flex text-2xl">
                    <BsSearch className="mr-5" />
                    <FaRegUser className="mr-5" />
                    <GiShoppingCart />
            </div>
        </div> 
    )
}

export default Navigation
