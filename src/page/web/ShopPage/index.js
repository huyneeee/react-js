import React from 'react'
import { Link } from 'react-router-dom'
const ShopPage = ({ listProducts }) => {
    return (
        <div>
            <div className="bg-gray-100 h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / Shop
            </div>
            <div className=" flex px-32  mt-10">
                <div className="w-1/4 px-5">
                    <div>
                        <p className="text-lg font-semibold py-5 border-b border-gray-400">CATEGORY</p>
                        <div className="px-10">
                            <p className="my-1">Category</p>
                            <p className="my-1">Category</p>
                            <p className="my-1">Category</p>

                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold py-5 border-b border-gray-400">FILTER BY PRICE</p>
                        <div className="px-10">

                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold py-5 border-b border-gray-400">SELECT BY COLOR</p>
                        <div className="px-10">
                            <p className="my-1">Black</p>
                            <p className="my-1">White</p>
                            <p className="my-1">Red</p>
                            <p className="my-1">Brown</p>
                            <p className="my-1">Pink</p>
                        </div>
                    </div>

                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {listProducts.map(product => {
                            return (
                                <div className=" h-auto w-auto group overflow-hidden relative" key={product._id}>
                                    <div
                                        className=" w-full h-80 bg-gray-100 flex justify-center items-center "
                                    >
                                        <img src={`http://localhost:4000/api/product/image/${product._id}`} alt="" className="w-40 h-40" />
                                    </div>
                                    <div className="text-center mt-5">
                                        <Link className="text-md font-semibold uppercase text-gray-900 " to={`/shop/${product._id}`} >{product.name}</Link>
                                        <div className="flex mt-3">
                                            <div className="flex-1">
                                                <button className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500">ADD TO CARD</button>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500 text-main">$ {product.price}.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopPage
