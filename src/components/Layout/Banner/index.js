import React from 'react'

const Banner = () => {
    return (
        <div className="flex justify-center items-center bg-center bg-cover" style={{ height: 600, backgroundImage: `url(https://demo.hasthemes.com/lukani-preview-v1/lukani/assets/img/slider/slider11.jpg)` }}>

            <div className="text-center">
                <p className="mb-8 font-semibold">AMAZING FROM Huyneeee</p>
                <div className="mb-4">
                    <span className="text-6xl font-thin tracking-wide ">GREEN</span>
                    <span className="text-6xl font-normal tracking-wide  "> LEAF PLANTS</span>
                </div>
                <p className="text-lg font-normal">Discount 20% Off For Huyneeee Members</p>
                <button className="px-10 py-4 bg-black text-white rounded-full mt-8 font-semibold">
                    DISCOVER NOW
                </button>
            </div>
        </div>
    )
}

export default Banner
