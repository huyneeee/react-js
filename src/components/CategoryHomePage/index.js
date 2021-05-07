import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoryApi from '../../api/categoryApi'

const CategoryHomePage = () => {
    const [listCategories, setListCategories] = useState([]);

    useEffect(() => {
        const fecthListCategories = async () => {
            try {
                const { data: categories } = await categoryApi.getAll();
                setListCategories(categories);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fecthListCategories();
    }, []);
    return (
        <div className="flex   px-32">
            {listCategories.map((cate,index) => {
                const [ one ,two, three ] = cate.name.split(" ");
                if(index===1){
                    return (
                        <div className="flex-1 relative mx-2" key={cate.id}>
                            <div className="w-full ">
                                <img src={cate.image} className="w-full" alt="" />
                            </div>
                            <div className="absolute bottom-5 left-24 text-center">
                                <p className="text-black text-2xl font-semibold">{cate.name}</p>
                                <Link className="text-green-800 underline  font-semibold" to="">Shop Now</Link>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="flex-1 relative mx-2" key={cate.id}>
                        <div className="w-full ">
                            <img src={cate.image} className="w-full" alt="" />
                        </div>
                        <div className="absolute top-5 left-5">
                            
                            <p className="text-black text-2xl font-semibold ">{one}</p>
                            <p className="text-black text-2xl font-semibold mb-3">{two} {three}</p>
                            <Link className="text-green-800 underline  font-semibold" to="">Shop Now</Link>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default CategoryHomePage
