import React from 'react'
import { GiBattleship,GiPiggyBank,GiMoneyStack } from 'react-icons/gi'
import { FaUserAstronaut } from 'react-icons/fa'
const ServiceItem = () => {
    return (
        <div className="flex py-6 my-10 px-32">
            <div className=" flex-1 flex justify-center items-center border-r border-gray-500  group">
                <div className="flex justify-center items-center group-hover:text-green-700 ">
                        <div className=" w-14 h-14">
                            <GiBattleship className="w-full h-full text-gray-700 group-hover:text-green-700 " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg">Free Delivery</p>
                            <p className="text-gray-600 text-md">Free shipping on all order</p>
                    </div>
                </div>              
            </div>

            <div className=" flex-1  flex justify-center items-center border-r border-gray-500 group">
                <div className="flex justify-center  items-center">
                        <div className=" w-14 h-14">
                            <GiPiggyBank className="w-full h-full text-gray-700 group-hover:text-green-700 " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-green-700 ">Money Return</p>
                            <p className="text-gray-600 text-md">Back guarantee in 7 days</p>
                    </div>
                </div>              
            </div>

            <div className=" flex-1 flex justify-center items-center border-r border-gray-500 group ">
                <div className="flex items-center justify-center ">
                        <div className=" w-14 h-14">
                            <GiMoneyStack className="w-full h-full text-gray-700 group-hover:text-green-700 " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-green-700 ">Member Discount</p>
                            <p className="text-gray-600 text-md">Onevery order over $130.00</p>
                    </div>
                </div>              
            </div>


            <div className=" flex-1 flex justify-center items-center group">
                <div className="flex items-center justify-center">
                        <div className=" w-14 h-14">
                            <FaUserAstronaut className="w-full h-full text-gray-700 group-hover:text-green-700" />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-green-700">Online Support</p>
                            <p className="text-gray-600 text-md">Support 24 hours a day</p>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default ServiceItem
