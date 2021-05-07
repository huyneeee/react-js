import React from 'react'
import { Link } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { AiOutlineMail, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'
const Footer = () => {
    return (
        <div>
            <div className="bg-green-700 h-32 mt-10 px-32 py-10 flex ">
                {/* <div className="bg-red-200 w-full h-full items-center flex"> */}
                    <div className="flex-1 flex items-center">
                    <RiMailSendLine className="text-5xl text-white" />
                    <p className=" text-xl font-black ml-10 text-white">SUBSCRIBE TO THE NEWS LETTER</p>
                    </div>
                    
                    <form action="" className="flex-1 flex">
                        <input type="text" className=" w-4/5 border-none outline-none  bg-green-900 py-2 px-3 text-white" placeholder="Enter Your Email Address" />
                        <button className="px-10 py-3 border-none outline-none bg-white text-black font-bold text-md">SUBCRIBE</button>
                    </form>

                {/* </div> */}


            </div>
            {/* // <!-- footer  --> */}
            <footer className="w-full border-t-2 border-gray-200 pt-10">
                <div className="grid grid-cols-4 gap-4 h-full">
                    <div className=" h-auto">
                        <div className=" pl-24 py-5">
                            <div >
                                <img src="https://firebasestorage.googleapis.com/v0/b/shop-ff2b2.appspot.com/o/images%2Flogo.jpg?alt=media&token=99516ca8-4173-4d92-8ba4-ad08175bd36c" alt="" />
                            </div>
                            <p className="text-md text-gray-400 mt-3">
                                Lorem Ipsum is simply dummy text of the Nting simply text printhing of amet
                            </p>
                            <ul>
                                <li className="flex mt-3 ">
                                    <Link to="" className="text-gray-500 mr-6  text-lg"><FaFacebook /></Link>
                                    <Link to="" className="text-gray-500 mr-6  text-lg"><AiFillInstagram /></Link>
                                    <Link to="" className="text-gray-500 mr-6  text-lg"><AiFillYoutube /></Link>
                                    <Link to="" className="text-gray-500  mr-6 text-lg"><AiOutlineTwitter /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" h-auto">
                        <div className=" pl-24 py-5">
                            <p className="text-lg font-semibold  mb-8">Information</p>
                            <ul className="text-gray-400 text-md ">
                                <li className="mb-4">
                                    <Link to="" >About Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" >Delivery Information</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" >Privacy Policy</Link>
                                </li>
                                <li className="">
                                    <Link to="" >Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" h-auto">
                        <div className=" pl-24 py-5">
                            <p className="text-lg font-semibold  mb-8">Extras</p>
                            <ul className="text-gray-400 text-md ">
                                <li className="mb-4">
                                    <Link to="" >Brands</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" >Gift Certificates</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="">Affiliate</Link>
                                </li>
                                <li className="">
                                    <Link to="">Specials</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" h-auto">
                        <div className=" pl-24 py-5">
                            <p className="text-lg font-semibold  mb-8">Store Information</p>
                            <ul className="text-gray-400 text-md ">
                                <li className="mb-4">
                                    <div className="flex  items-center">
                                        <div className="w-6 h-6">
                                            <ImLocation className="w-full h-full" />
                                        </div>
                                        <div className="w-3/4">
                                            <p>Greenery - Plant Store</p>
                                            <p>United States</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="mb-4">
                                    <div className="flex  items-center">
                                        <div className="w-6 h-6">
                                            <IoPhonePortraitOutline className="w-full h-full" />
                                        </div>
                                        <div className="w-3/4">
                                            <p>000-000-0000</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="flex  items-center">
                                        <div className="w-6 h-6">
                                            <AiOutlineMail className="w-full h-full" />
                                        </div>
                                        <div className="w-3/4">
                                            <p>sales@yourcompany.com</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- bottom fotter  --> */}
            <div className=" flex items-center justify-center  h-24 border-t-2 border-gray-200 px-24 ">
                <p className="text-gray-500">Powered By OpenCart Greenery - Plant Store © 2021</p>
            </div>
        </div>
    )
}

export default Footer
