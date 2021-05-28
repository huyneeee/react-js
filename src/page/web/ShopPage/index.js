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
                                <div className=" h-auto w-auto group overflow-hidden relative" key={product.id}>
                                    <div
                                        className=" w-full h-80 bg-gray-100 flex justify-center items-center "
                                    >
                                        <img src={product.image} alt="" className="w-40 h-40" />
                                    </div>
                                    <div className="text-center mt-5">
                                        <Link className="text-md font-normal uppercase text-gray-500 " to={`/shop/${product.id}`} >{product.name}</Link>
                                        <p className="font-extrabold text-md transform" >${product.price}</p>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-red-600 px-2 pt-1 text-white">
                                        <p className="text-sm font-semibold">-20%</p>
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
