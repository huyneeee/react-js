import React from 'react'

const List = ({ listOrder , handleDetailOrder }) => {

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
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Action
        </th>
                    </tr>
                </thead>
                <tbody>
                    {listOrder.map((order, index) =>

                        <tr className="text-left" key={index}>

                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {index}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.name_of_consignee}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.address}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {order.phone}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                ${order.subtotal}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                <button className="bg-main text-white text-sm px-3 py-2 rounded" onClick={()=>{handleDetailOrder(order._id)}}>Detail</button>
                            </td>

                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default List;
