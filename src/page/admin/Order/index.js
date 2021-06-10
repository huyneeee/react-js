import React, { useEffect, useState } from 'react';
import {getAll} from '../../../api/orderApi';
import { isAuthenticated } from '../../../auth';
import List from './List';
import OrderDetail from './OrderDetail';
const OrderAdmin = () => {
    const [ listOrder , setListOrder] = useState([]);
    const [ showOrderDetail , setShowOrderDetail ] = useState({
        orderId:'',
        status:false
    });
    const { status , orderId } = showOrderDetail;
    const {user} = isAuthenticated()
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                getAll()
                .then(data=>{
                    console.log(data)
                    setListOrder(data);
                })
                // setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchOrder();
    }, [])
    const onHandleDetailOrder = (id)=>{
        setShowOrderDetail({
            orderId:id,
            status:true
        })
    }
    return (
        <>
            {status ? (
                <OrderDetail orderId={orderId} handelShowListOrder={()=>setShowOrderDetail({orderId:'',status:false})} />
            ) :
            (<List listOrder={listOrder} user={user} handleDetailOrder={onHandleDetailOrder} />)
            }
        </>
    )
}

export default OrderAdmin
