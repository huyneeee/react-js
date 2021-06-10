import { useHistory, useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart} from '../../../actions/cartAction'
import productApi from '../../../api/productApi'
const ProductByCategory = ({listCategories}) => {
    const { cateId} = useParams();
    const history = useHistory();
    const [listProducts, setListProducts] = useState([]);
    useEffect(()=>{
        const fecthListProduct = async () => {
            try {
              const { data: products } = await productApi.productByCategory(cateId);
              setListProducts(products);
            } catch (error) {
              console.log("Failed to get data", error);
            }
          }
          fecthListProduct();
    },[cateId])
    const onHandleCate = (id)=>{
        history.push(`/shop/category/${id}`);
     }
     const dispatch = useDispatch()
     const handleClick = (product)=>{
         dispatch(addToCart({...product,image:''}));
     }
    return (
        <div>
            <div className="bg-gray-100 h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / Shop
            </div>
            <div className=" flex px-32  mt-10">
                <div className="w-1/4 px-5">
                    <div>
                        <p className="text-lg font-semibold py-5 border-b border-gray-400">CATEGORY</p>
                        <div className="pl-2">
                            {listCategories.map(cate=>{
                                return (
                                    <div className="flex my-2 items-center" key={cate._id}>
                                        <input type="radio" checked={cateId===cate._id} name="cate" className="mr-2" onClick={()=>{onHandleCate(cate._id)}} />
                                        <label>{cate.name}</label>
                                    </div>
                                )
                            })}
                            
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
                                                <button 
                                                    onClick={()=>{handleClick(product)}} 
                                                    className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500">ADD TO CARD</button>
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

export default ProductByCategory
