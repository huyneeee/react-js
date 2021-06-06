import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'
const Navigation = ({ user }) => {
    const [ toggle , setToggle ] = useState(false);
    return (
        <div className="flex justify-around w-full items-center py-2 ">
            <div >
                <img src="https://firebasestorage.googleapis.com/v0/b/shop-ff2b2.appspot.com/o/images%2Flogo.jpg?alt=media&token=99516ca8-4173-4d92-8ba4-ad08175bd36c" alt="" />
            </div>
            <ul className="justify-between flex uppercase text-sm font-semibold">
                <li className="p-3 "><NavLink exact to="/" className="text-gray-800 tracking-widest" activeClassName="active text-main border-b-2 border-main" >Home</NavLink></li>
                <li className="p-3 "><NavLink exact to="/shop" className="text-gray-800 tracking-widest" activeClassName="active text-main border-b-2 border-main">Shop</NavLink></li>
                <li className="p-3 "><NavLink exact to="/blog" className="text-gray-800 tracking-widest" activeClassName="active text-main border-b-2 border-main">Blog</NavLink></li>
                <li className="p-3 "><NavLink exact to="/about" className="text-gray-800 tracking-widest" activeClassName="active text-main border-b-2 border-main">About</NavLink></li>
                <li className="p-3 "><NavLink exact to="/contact" className="text-gray-800 tracking-widest" activeClassName="active text-main border-b-2 border-main">Contact</NavLink></li>

            </ul>
            <div className=" flex justify-center items-center">
                <BsSearch className="mr-5 text-2xl" />
                <GiShoppingCart className=" mr-5  text-2xl" />
                {user
                    ? (<div className="relative">
                    <div>
                        <button 
                            type="button" 
                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            onClick={()=>{setToggle(!toggle)}}
                        >
                            <img className="h-8 w-8 rounded-full" src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" alt="" />
                        </button>
                    </div>
                    <div 
                        className={ toggle ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'}
                        >
                        {user.user.role===1 && (<Link to="/admin/dashboards" className="block px-4 py-2 text-sm text-gray-700">Admin</Link>)}
                        <button type="button" className="block px-4 py-2 text-sm text-gray-700">Sign out</button>
                    </div>
                </div>)
                    :
                    <Link to="/login">LOGIN</Link>

                }
                

            </div>
            

        </div>
    )
}

export default Navigation
