import React, { useEffect, useState } from 'react'
import categoryApi from '../../../api/categoryApi'
import productApi from '../../../api/productApi'
import { countOrder } from '../../../api/orderApi'
import authApi from '../../../api/authApi'
const AdminDashBoard = () => {
    const [admin, setAdmin] = useState({
        countCategory: '',
        countProduct: '',
        countOrder: '',
        contacts: []
    })
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const { data: countCategory } = await categoryApi.count();
                const { data: countProduct } = await productApi.countproduct();
                const { data: contacts } = await authApi.getAllContact();
                countOrder().then(countOrder => {
                    setAdmin({
                        countCategory: countCategory,
                        countProduct: countProduct,
                        countOrder: countOrder,
                        contacts:contacts
                    })
                })

            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCount();
    }, []);
    const ListContact = () => {
        return (
            <>
                <table className="items-center w-full bg-transparent border-collapse" >
                    <thead>
                        <tr>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                STT
            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Name
            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Email
            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Phone
          </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Massage
          </th>

                        </tr>
                    </thead>
                    <tbody>
                        {admin.contacts.map((c, index) =>

                            <tr className="text-left" key={index}>

                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {index}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.name}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.email}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.phone}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                    {c.massage}
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </>
        )
    }
    return (
        <div>
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
            <div className=" mt-10 flex items-center bg-gray-200">
   
                    <div className="flex-1 bg-red-200">
                    {ListContact()}
                    </div>
                    <div className="flex-1 bg-green-300">

                    </div>

            </div>
        </div>
    )
}

export default AdminDashBoard
