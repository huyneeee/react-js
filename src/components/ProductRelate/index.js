import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cartAction'
import productApi from '../../api/productApi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductRelate = ({ id }) => {
    const [ralateProduct, setRalateProduct] = useState([])
    const dispatch = useDispatch()
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, image: '' }));
    }
    console.log(ralateProduct);
    useEffect(() => {
        (async () => {
            try {
                const { data: listProduct } = await productApi.listRelate(id);
                setRalateProduct(listProduct)
            } catch (error) {
                console.log(error.response);
            }
        })()
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: ralateProduct.length > 4 ? 4 : ralateProduct.length,
    };
    return (
        <div className=" px-32  text-center my-10">
            <p className="text-3xl font-semibold  text-left my-5">Relate Products</p>
            <Slider {...settings}  >
                {ralateProduct.map(product => {
                    return (
                        <div>
                            <div className=" h-auto  group overflow-hidden relative mx-3" key={product._id}>
                                <div
                                    className=" w-full h-96 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                                    style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${product._id})` }}
                                >

                                </div>
                                <div className="text-center mt-5">
                                    <Link className="text-md font-semibold uppercase text-gray-900 " to={`/shop/${product._id}`} >{product.name}</Link>
                                    <div className="flex mt-3">
                                        <div className="flex-1">
                                            <button
                                                onClick={() => { handleClick(product) }}
                                                className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-40 group-hover:translate-x-20 transition-all duration-500">ADD TO CARD</button>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-extrabold text-md transform -translate-x-24 group-hover:translate-x-40 transition-all duration-500 text-main">$ {product.price}.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3">
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider>
        </div>
    )
}

export default ProductRelate
