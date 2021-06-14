import React, { useEffect, useState } from 'react';
import authApi from '../../../api/authApi';
import { orderUpdateApi } from '../../../api/orderApi';
import { isAuthenticated } from '../../../auth';
import List from './List';
import OrderDetail from './OrderDetail';
const OrderAdmin = () => {
    const { user } = isAuthenticated()
    const [listOrder, setListOrder] = useState({
        orders: [],
        statusOrder: 0
    });
    const [showOrderDetail, setShowOrderDetail] = useState({
        orderId: '',
        status: false
    });
    const { orders, statusOrder } = listOrder;
    const { status, orderId } = showOrderDetail;


    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const { data: ordersList } = await authApi.orderbystutus(statusOrder);
                setListOrder({
                    ...listOrder,
                    orders: ordersList
                })
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchOrder();
    }, [statusOrder])
    const onHandleDetailOrder = (id) => {
        setShowOrderDetail({
            orderId: id,
            status: true
        })
    }
    const handleClickStatus = async (id, newStatus) => {
        orderUpdateApi(id, newStatus)
            .then(() => {
                setListOrder({
                    ...listOrder,
                    statusOrder: newStatus
                })
            })
    }
    const tabOrderStatus = () => {
        const classStyle = "focus:outline-none text-sm font-semibold  text-white px-2 py-3 mx-1 mt-5 ";
        return (
            <div className="tab-order flex  mb-5">
                <button
                    onClick={() => {
                        setListOrder({
                            ...listOrder,
                            statusOrder: 0
                        })
                    }}
                    className={statusOrder === 0 ? classStyle + ' bg-blue-600' : classStyle + 'opacity-30  bg-blue-600'}
                >Order chờ xác  nhận</button>
                <button
                    onClick={() => {
                        setListOrder({
                            ...listOrder,
                            statusOrder: 1
                        })
                    }}
                    className={statusOrder === 1 ? classStyle + ' bg-yellow-400' : classStyle + 'opacity-30 bg-yellow-400'}
                >Order Đang giao</button>
                <button
                    onClick={() => {
                        setListOrder({
                            ...listOrder,
                            statusOrder: 2
                        })
                    }}
                    className={statusOrder === 2 ? classStyle + ' bg-green-600' : classStyle + 'opacity-30 bg-green-600'}
                >Order Đã giao</button>
                <button
                    onClick={() => {
                        setListOrder({
                            ...listOrder,
                            statusOrder: 3
                        })
                    }}
                    className={statusOrder === 3 ? classStyle + ' bg-red-600' : classStyle + 'opacity-30 bg-red-600'}
                >Order đã bị hủy</button>
            </div>
        )
    }
    return (
        <>
            {status ? (
                <OrderDetail orderId={orderId} handelShowListOrder={() => setShowOrderDetail({ orderId: '', status: false })} />
            ) :
                (
                    <>
                        {tabOrderStatus()}
                        <List listOrder={orders} user={user} handleDetailOrder={onHandleDetailOrder} handleClickStatus={handleClickStatus} />
                    </>
                )
            }
        </>
    )
}

export default OrderAdmin
