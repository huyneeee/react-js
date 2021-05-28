import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const detailProduct = async () => {
            try {
                const { data: detailProduct } = await productApi.getOne(id);
                const { data: category } = await categoryApi.getOne(detailProduct.category);
                const catename = category.name;
                const product = { ...detailProduct, catename };

                setProduct(product);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailProduct();
    }, []);

    return (
        <div>
            <div className="bg-gray-100 w-screen h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / {product.name}
            </div>
            <div className="flex w-full px-24 mt-20 " style={{ height: '600px' }}>
                <div className="w-2/5 h-auto flex justify-center ">
                    <div className="bg-gray-400 h-2/3 w-3/4 ">
                        <img src={`http://localhost:4000/api/product/image/${product._id}`} className="h-full w-full" alt="" />
                    </div>
                </div>
                <div className="w-3/5  h-auto tracking-widest">
                    <p className="text-lg font-semibold text-gray-900 mb-10">{product.name}</p>
                    <p className="text-sm text-gray-600 mb-5">Category:{product.catename}</p>
                    <p className="text-sm text-gray-600 mb-5 ">Availability:{product.status ? 'Stock' : 'Instock'}</p>
                    <p className="text-sm text-gray-600 mb-5">Quantity:{product.quantity}</p>
                    <p className="text-md text-gray-600 font-bold leading-8 mb-5">${product.price}</p>
                    <div className="border border-gray-200 w-full h-auto p-5 box-border bg-gray-100">
                        <div className=" w-1/3 h-auto  ">
                            <p className="text-lg font-bold text-gray-600 mb-2">Quantity</p>
                            <div className="flex ">
                                <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                    <span>-</span>
                                </div>
                                <div className="w-3/5 ">
                                    <input type="text" className="outline-none p-2 border text-center w-full" defaultValue={1} />
                                </div>
                                <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="flex justify-center py-3 border-b border-gray-500 mb-4">
                                <button className="border-b-2 border-black font-bold  text-sm add-to-cart focus:outline-none" data-id={product.id}>ADD TO CARD</button>
                            </div>
                            <div className="flex justify-center">
                                <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-behance" /></Link>
                                <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-facebook-f" /></Link>
                                <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-google" /></Link>
                                <Link to='' className="text-gray-500 uppercase mr-6 text-sm"><i className="fab fa-twitter" /></Link>
                                <Link to='' className="text-gray-500 uppercase text-sm"><i className="fab fa-instagram" /></Link>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-8 mt-4">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
