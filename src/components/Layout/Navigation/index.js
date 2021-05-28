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
                <li className="p-3 "><Link to="/shop" className="text-gray-800 tracking-widest">Shop</Link></li>
                <li className="p-3 "><Link to="/blog" className="text-gray-800 tracking-widest">Blog</Link></li>
                <li className="p-3 "><Link to="/about" className="text-gray-800 tracking-widest">About</Link></li>
                <li className="p-3 "><Link to="/contact" className="text-gray-800 tracking-widest">Contact</Link></li>
  
            </ul>
            <div className=" flex text-2xl">
                    <BsSearch className="mr-5" />
                    <Link to="/admin/dashboard" className="text-gray-800 tracking-widest mr-5"><FaRegUser  /></Link>
                    
                    <GiShoppingCart />
            </div>
        </div> 
    )
}

export default Navigation
