import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cartAction'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API } from '../../config';

const PopularProduct = ({ listProducts }) => {
    const dispatch = useDispatch()
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, image: '' }));
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
    };
    
    return (
        <div className=" px-32  text-center my-10">
            <p className="text-3xl font-semibold  text-center my-5">Popular Products</p>
            <Slider {...settings} >
                    {listProducts.slice(0,6).map((product,index) => {
                            return (
                                <div key={index}>
                                <div className=" h-auto group overflow-hidden relative mx-3" >
                                    <div
                                        className=" w-full h-96 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                                        style={{ backgroundImage: `url(${API}/product/image/${product._id})` }}
                                    >

                                    </div>
                                    <div className="text-center mt-5">
                                        <Link className="text-md font-semibold uppercase text-gray-900 " to={`/shop/${product._id}`} >{product.name}</Link>
                                        <div className="flex mt-3">
                                            <div className="flex-1">
                                                <button
                                                    onClick={() => { handleClick(product) }}
                                                    className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500">ADD TO CARD</button>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500 text-main">$ {product.price}.00</p>
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

export default PopularProduct
