import React, { useEffect, useState } from 'react'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
import { countOrder } from '../../../api/orderApi'
import authApi from '../../../api/authApi'
import Loading from '../../../components/Loading'
const AdminDashBoard = () => {
    const [admin, setAdmin] = useState({
        countCategory: '',
        countProduct: '',
        countOrder: '',
        contacts: [],
        orderRencent: []
    })
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const { data: countCategory } = await categoryApi.count();
                const { data: countProduct } = await productApi.countproduct();
                const { data: contacts } = await authApi.getAllContact();
                const { data: ordersRencent } = await authApi.orderRencent()

                countOrder().then(countOrder => {
                    setAdmin({
                        countCategory: countCategory,
                        countProduct: countProduct,
                        countOrder: countOrder,
                        contacts: contacts,
                        orderRencent: ordersRencent
                    })
                }).then(() => {
                    setLoading(false);
                })

            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCount();
    }, []);
    const oderRecent = () => {
        return (
                <div className="px-10">
                    <p className="text-md font-semibold text-main mb-2">Order Recent</p>
                    <table>
                    {admin.orderRencent.map((c, index) =>

                        <tr className="text-left border-b border-main" key={index}>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {index}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {c.name_of_consignee}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {c.address}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                (+84) {c.phone}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                ${c.subtotal}.00
                            </td>
                        </tr>
                    )}
                    </table>
                </div>
        )
    }
    const ListContact = () => {
        return (
            <div className="px-10">
                <p className="text-md font-semibold text-main mb-2">Contact Recent</p>
                <table className="items-center w-full bg-transparent border-collapse  " >
                    <tbody>
                        {admin.contacts.map((c, index) =>

                            <tr className="text-left border-b border-main" key={index}>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {index}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.email}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    (+84) {c.phone}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                    {c.massage}
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
            {loading ? (<Loading></Loading>)
                : (<>
                    <div className="flex flex-wrap justify-between py-5 px-10 bg-main my-10">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Category</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countCategory}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="fas fa-chart-pie"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Product</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countProduct}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="far fa-chart-bar"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Order</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countOrder}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="fas fa-users"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-10 flex flex-col ">

                        <div className="flex bg-white my-5">
                            {ListContact()}
                        </div>
                        <div className="flex bg-white my-5">
                            {oderRecent()}
                        </div>
                    </div>
                </>
                )}

        </>
    )
}

export default AdminDashBoard
