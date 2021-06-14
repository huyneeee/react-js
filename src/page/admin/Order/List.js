import React from 'react'

const List = ({ listOrder, handleDetailOrder, handleClickStatus }) => {


    return (
        <div>
            <table className="items-center w-full bg-transparent border-collapse" >
                <thead>
                    <tr>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            STT
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Name Of Consignee
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Address
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Phone
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Subtotal
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center">
                            Status
                        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listOrder.map((order, index) =>

                        <tr className="text-left" key={index}>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {index}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.name_of_consignee}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.address}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.phone}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                ${order.subtotal}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                {order.status === 0 && (<div className="flex  items-center justify-around">
                                    <button 
                                        onClick={()=>{handleClickStatus(order._id,3)}}
                                        className="px-2 py-2 text-sm font-semibold text-white bg-red-600 rounded-md focus:outline-none"><i className="fas fa-times "></i>Hủy</button>
                                    <button 
                                        onClick={()=>{handleClickStatus(order._id,1)}}
                                        className="px-2 py-2 text-sm font-semibold text-white bg-green-600 rounded-md focus:outline-none"><i className="fas fa-check-circle"></i>Xác Nhận</button>

                                </div>)}
                                {order.status === 1 && (<div className="flex  items-center justify-around">
                                    <button 
                                        onClick={()=>{handleClickStatus(order._id,3)}}
                                        className="px-2 py-2 text-sm font-semibold text-white bg-red-600 rounded-md focus:outline-none"><i className="fas fa-times "></i>Hủy</button>
                                    <button 
                                        onClick={()=>{handleClickStatus(order._id,2)}}
                                        className="px-2 py-2 text-sm font-semibold text-white bg-green-600 rounded-md focus:outline-none"><i className="fas fa-check-circle"></i>Giao hàng thành công</button>

                                </div>)}
                                {order.status === 2 && <p className="text-green-600">Giao hàng thành công</p>}
                                {order.status === 3 && <p className="text-red-600">Đã bị hủy</p>}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                <button className="bg-main text-white text-sm px-3 py-2 rounded" onClick={() => { handleDetailOrder(order._id) }}>Detail</button>
                            </td>

                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default List;
