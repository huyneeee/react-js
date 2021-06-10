import React from 'react'
import { Link } from 'react-router-dom'

const CategoryHomePage = ({listCategories}) => {

    return (
        <div className="flex   px-32">
            {listCategories.slice(0,3).map((cate,index) => {
                const [ one ,two, three ] = cate.name.split(" ");
                if(index===1){
                    return (
                        <div className="flex-1 relative mx-2" key={cate._id}>
                            <div className="w-full ">
                                <img src={`http://localhost:4000/api/category/image/${cate._id}`}  className="w-full" alt="" />
                            </div>
                            <div className="absolute bottom-5 left-24 text-center">
                                <p className="text-black text-2xl font-semibold">{cate.name}</p>
                                <Link className="text-green-800 underline  font-semibold" to={`/shop/category/${cate._id}`}>Shop Now</Link>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="flex-1 relative mx-2" key={cate._id}>
                        <div className="w-full ">
                            <img src={`http://localhost:4000/api/category/image/${cate._id}`}  className="w-full" alt="" />
                        </div>
                        <div className="absolute top-5 left-5">
                            
                            <p className="text-black text-2xl font-semibold ">{one}</p>
                            <p className="text-black text-2xl font-semibold mb-3">{two} {three}</p>
                            <Link className="text-green-800 underline  font-semibold" to={`/shop/category/${cate._id}`}>Shop Now</Link>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default CategoryHomePage
