import React, { useState, useEffect } from 'react'
import { orderDetailByOrderId } from '../../../api/orderDetailApi'
const OrderDetail = ({ orderId,handelShowListOrder }) => {
    const [orderDetail, setOrderDetail] = useState([])
    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                orderDetailByOrderId(orderId)
                    .then(data => {
                        console.log(data)
                        setOrderDetail(data);
                    })
                // setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchOrderDetail();
    }, [orderId])
    const listOrderDetail = () => {
        return (
            <table className="items-center w-full  border-collapse mt-2">
                <thead>
                    <tr>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            ID Order
      </th>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Name Product
      </th>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Image
      </th>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Price
      </th>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Quantity
      </th>
                    </tr>
                </thead>
                <tbody >
                    {orderDetail.map(ele => {
                        return (
                            <tr>
                                <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                                    {ele.id_order}
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {ele.name}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    <div class="bg-cover bg-center w-20 h-20" 
                                    style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${ele.id_product})` }}
                                    ></div>
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    ${ele.price}.00
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs whitespace-no-wrap p-4">
                                    {ele.sl}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        )
    }
    return (
        <>
            <button onClick={()=>{handelShowListOrder()}} className="px-3 py-2 bg-main text-white text-sm rounded mt-2 ml-2">List Order</button>
            {listOrderDetail()}
        </>
    )
}

export default OrderDetail
