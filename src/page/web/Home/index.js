import React from 'react';
import CategoryHomePage from '../../../components/CategoryHomePage';
import LastesBlog from '../../../components/LatestBlog';
import Banner from '../../../components/Layout/Banner';
import PopularProduct from '../../../components/PopularProduct';
import ServiceItem from '../../../components/ServiceItem';
const HomePage = ({listProducts,listCategories,listBlog}) => {
    return (
        <div>
            <Banner />
            <ServiceItem />

            <CategoryHomePage listCategories={listCategories} />
            <PopularProduct listProducts={listProducts} />
            {/* banner  */}
            <div className="flex h-96 ">
                <div className="bg-fixed h-full w-full flex flex-col justify-center items-center" style={{ backgroundImage: `url(https://demo.codezeel.com/opencart/OPC05/OPC050120/image/catalog/testimonial_parallax.jpg)` }}>

                <p className="flex text-3xl font-semibold  text-center mb-10">What Client Say ?</p>

                    <div className=" flex justify-center items-center">
                        <div className="flex  w-3/6 py-2">
                            <p className="text-center text-md font-normal leading-6 text-gray-400">There are many variations of passages of Lorem Ipsum availale, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>

                    </div>

                </div>

            </div>
            <LastesBlog listBlog={listBlog} />
        </div>
    )
}

export default HomePage
