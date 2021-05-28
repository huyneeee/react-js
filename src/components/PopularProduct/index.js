import React from 'react'
import { Link } from 'react-router-dom'
const PopularProduct = ({listProducts}) => {
    const popularProduct = listProducts.slice(0,4);
    return (
        <div className=" px-32  text-center my-5 pt-10">
            <p className="text-3xl font-semibold  text-center">Popular Products</p>
            {/* products  */}
            
            <div className="grid grid-cols-4 gap-4 mt-6">
            {popularProduct.map(product=>{
                return (
                    <div className=" h-auto group overflow-hidden relative" key={product._id}>
                    <div
                        className=" w-full h-96 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                        style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${product._id})` }}
                    >

                    </div>
                    <div className="text-center mt-5">
                        <Link className="text-md font-normal uppercase text-gray-500 " to={`/shop/${product._id}`} >{product.name}</Link>
                        <p className="font-extrabold text-md transform" >${product.price}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                    {/* <p className="text-sm font-semibold">20% Off</p> */}
                </div>
                </div>
                )
            })}
                
                
            </div>
            {/* <button className="px-4 py-2 bg-green-800 text-white">View More</button> */}
        </div>
    )
}

export default PopularProduct
