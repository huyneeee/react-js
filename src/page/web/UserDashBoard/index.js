import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../auth'
import { Link } from 'react-router-dom'
import authApi from '../../../api/authApi';
const UserDashBoard = () => {
    const { user } = isAuthenticated();
    const [profile, setProfile] = useState('');
    const [orderHistory, setOrderHistory] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const { data: userProfile } = await authApi.getOne(user._id);
                const { data: orderByUser } = await authApi.orderByUser(user._id);
                setOrderHistory(orderByUser);
                setProfile(userProfile)
            } catch (error) {
                console.log(error.response)
            }
        })();
    }, [user._id])
    const historyOrder = JSON.parse(localStorage.getItem('history'));
    const orderByUserList = () => {
        return (
            <div className="px-3 mt-2">
                <table className="items-center w-full bg-transparent border-collapse" >
                    <thead>
                        <tr>
                            <th
                                className="px-6 bg-main text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                STT
            </th>
                            <th
                                className="px-6 bg-main text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Name Of Consignee
            </th>
                            <th
                                className="px-6 bg-main text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Create At
            </th>
                            <th
                                className="px-6 bg-main text-white align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                SubTotal
          </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.length !== 0 &&
                            orderHistory.map((c, index) =>

                                <tr className="text-left" key={index}>

                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {index}
                                    </td>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {c.name_of_consignee}
                                    </td>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {c.createdAt.slice(0,10)}
                                    </td>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {c.subtotal}
                                    </td>
                                </tr>
                            )}

                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <>
            <div className="bg-gray-100 h-screen w-screen px-10 py-10 ">
                <Link to="/" className="px-3 py-2 bg-main text-white text-sm rounded-md my-5 flex items-center justify-center w-16">Back</Link>
                <div className="w-full h-60 flex bg-white rounded-md py-3 ">
                    <div className="flex-1 border-r-2 border-gray-400 flex  items-center p-10 relative">
                        <div className="bg-center bg-cover h-40 w-40 rounded-full"
                            style={{ backgroundImage: `url(${profile.image})` }}
                        >
                        </div>
                        <div>
                            <p className="text-lg font-semibold ml-5">{profile.name}</p>
                            <p className="text-gray-600 ml-5">{profile.role === 1 ? 'Admin' : 'Customer'}</p>
                        </div>
                        <button className="px-2 py-2 bg-main text-white rounded-md top-3 right-3 absolute">Edit Profile</button>
                    </div>
                    <div className="flex-1 px-10 py-10 ">
                        <p className="text-lg font-semibold mb-2">Contact Detail</p>
                        <p className="text-gray-600">Email : {profile.email}</p>
                        <p className="text-gray-600">Phone:{profile.phone ? profile.phone : '+84:'}</p>
                        <p className="text-gray-600">Address:Hanoi, VietNam</p>
                    </div>
                </div>
                <div className="w-full  flex bg-gray-100 rounded-md py-3 mt-10 ">
                    <div className=" flex-1 bg-white rounded-md mr-5">
                        <p className="text-ld font-semibold ml-4 my-4 text-main">Unpaid</p>
                        {historyOrder.length !== 0 && (
                            historyOrder.map(ele => {
                                return (
                                    <div className="flex h-20 w-full my-3 px-5 " key={ele._id}>
                                        <div className="w-1/5 bg-center bg-cover h-20 w-20"
                                            style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${ele._id})` }}
                                        >
                                        </div>
                                        <div>
                                            <p className="text-main text-md font-semibold ml-3">{ele.name}</p>
                                            <p className=" text-md font-semibold ml-3">{ele.sl} x ${ele.price}.00</p>
                                        </div>

                                    </div>
                                )

                            })
                        )}
                    </div>
                    <div className=" flex-1 bg-white rounded-md ml-5 ">
                        <p className="text-ld font-semibold ml-4 mt-4 text-main">History Order</p>
                            {orderByUserList()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashBoard
