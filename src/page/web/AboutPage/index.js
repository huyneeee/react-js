import React from 'react'
import { AiOutlineAntDesign, AiOutlineWechat } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import {Link} from 'react-router-dom'
const AboutPage = () => {
    return (
        <div>
            <div className="bg-gray-100 w-screen h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / About
        </div>
            <div className="w-screen h-auto px-40 pt-20">
                <img src="https://demo.hasthemes.com/lukani-preview-v1/lukani/assets/img/about/about1.jpg" alt="" />
                <div className="text-center">
                    <p className="text-2xl font-normal py-5">We Are A Digital Agency Focused On Delivering Content And Utility User-Experiences.</p>
                    <p className="text-md  px-48">Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.</p>
                </div>
                <div className="flex justify-center py-5">
                    <img src="https://demo.hasthemes.com/lukani-preview-v1/lukani/assets/img/about/about-us-signature.png" className="" alt="" />
                </div>
            </div>
            <div className="w-screen h-72 flex px-40 bg-gray-100 my-5">
                <div className="flex-1 px-6 items-center justify-center flex flex-col">
                    <AiOutlineAntDesign className="text-6xl"> </AiOutlineAntDesign>
                    <p className="text-2xl my-3">Creative Design</p>
                    <p className="text-center">Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>

                </div>
                <div className="flex-1 px-6 items-center justify-center flex flex-col">
                    <GiReceiveMoney className="text-6xl"> </GiReceiveMoney>
                    <p className="text-2xl my-3">100% Money Back Guarantee</p>
                    <p className="text-center">Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>

                </div>
                <div className="flex-1 px-6 items-center justify-center flex flex-col">
                    <AiOutlineWechat className="text-6xl"> </AiOutlineWechat>
                    <p className="text-2xl my-3">Online Support 24/7</p>
                    <p className="text-center">Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>

                </div>
            </div>
            <div className="w-screen h-80 px-40 flex flex-col justify-center items-center">
                <p className="text-2xl">What Our Customers Says ?</p>
                <p className="px-60 text-center my-5">When a beautyful design is combined with powerful technology, it truly is an artwork.I love how my website operates and looks with this theme.Thankyou for the awesome product</p>
                <img class=" inline-block h-20  w-20 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
                <p className="font-semibold text-sm">HUYNEEEE/ CEO OF CSC </p>
            </div>
        </div>
    )
}

export default AboutPage
