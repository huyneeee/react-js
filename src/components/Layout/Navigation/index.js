import React, { useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import productApi from '../../../api/productApi'
const Navigation = ({ user, logout, handleClickCart }) => {
    const [toggle, setToggle] = useState(false);
    const cart = useSelector(state => state.cart.data);
    const [search, setSearch] = useState({
        status: true,
        data: []
    });

    const typingTimeoutRef = useRef(null);

    const handleSearch = (e) => {
        const textSearch = e.target.value;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(async () => {
            if (textSearch.length !== 0) {
                const { data: products } = await productApi.getProductByTextSearch(textSearch);
                setSearch({
                    status: false,
                    data: products
                })
            }
        }, 1000)
    }
    const listProductSearch = () => {
        return (
            !search.status &&
            <div className="bg-gray-200 rounded-md border-main border-1 py-3 w-60 absolute right-64 top-16 px-3 transition-all duration-1000">
                {search.data.length !== 0
                    ? (
                        <>
                            <span className="text-sm">Search by {search.data.length} product</span>
                            {search.data.slice(0, 5).map(ele => {
                                return (
                                    <div className="flex w-full border-b border-main py-1" key={ele._id}>
                                        <div className="w-1/5 bg-center bg-cover h-10 w-10 rounded-full"
                                            style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${ele._id})` }}
                                        >
                                        </div>
                                        <div>
                                            <Link onClick={() => {
                                                setSearch({
                                                    ...search,
                                                    status: !search.status
                                                })
                                            }} to={`/shop/${ele._id}`} className="text-main text-sm font-semibold ml-3">{ele.name}</Link>
                                            <p className=" text-sm font-semibold ml-3">${ele.price}.00</p>
                                        </div>

                                    </div>
                                )
                            })}
                            <Link to="/shop" onClick={() => {
                                setSearch({
                                    ...search,
                                    status: !search.status
                                })
                            }} className="text-sm text-main">View More</Link>
                        </>
                    )
                    : 'Product not search'}

            </div>
        )
    }
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
            <div className=" flex justify-center items-center relative">
                <input
                    type="text"
                    className={search.status ? "border-b-2 border-main px-3 right-40 py-1 absolute transform -translate-y-16 focus:outline-none transition-all duration-1000 " : "border-b-2 border-main px-3 py-1 right-40 absolute transform -translate-y-0 focus:outline-none transition-all duration-1000 "}
                    onChange={handleSearch}
                />
                <BsSearch className="mr-5 text-2xl" onClick={() => {
                    setSearch({
                        ...search,
                        status: !search.status
                    })
                }} />
                <div className="relative mr-5">
                    <GiShoppingCart className="text-3xl font-semibold" onClick={(e) => handleClickCart(e)} />
                    <div className="absolute -top-1 -right-2 bg-main w-5 h-5  flex items-center justify-center  rounded-full">
                        <p className="text-white text-xs font-semibold">{cart.length}</p>
                    </div>
                </div>

                {user
                    ? (<div className="relative">
                        <div>
                            <button
                                type="button"
                                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                onClick={() => { setToggle(!toggle) }}
                            >
                                <img className="h-8 w-8 rounded-full" src={user.image} alt="" />
                            </button>
                        </div>
                        <div
                            className={toggle ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'}
                        >
                            {user.role === 1 && (<Link to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700">Admin DashBoard</Link>)}
                            <Link to="/user/dashboard" className="block px-4 py-2 text-sm text-gray-700">User DashBoard</Link>
                            <button
                                type="button"
                                className="block px-4 py-2 text-sm text-gray-700 focus:outline-none"
                                onClick={() => logout()}
                            >Sign out</button>
                        </div>
                    </div>)
                    :
                    <Link to="/login">LOGIN</Link>

                }


            </div>
            {listProductSearch()}
        </div>
    )
}

export default Navigation
