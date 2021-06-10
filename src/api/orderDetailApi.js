import { isAuthenticated } from '../auth'
import {API} from '../config'
const {user} = isAuthenticated()
const { token} = isAuthenticated()
export const addOrderDetail = (orderDetail) => {
    return fetch(`${API}/orderdetail/${user._id}`, {
        method: "POST",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderDetail)

    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const orderDetailByOrderId = (orderId) => {
    return fetch(`${API}/orderdetail/${orderId}`, {
        method: "GET",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

    })
        .then(response => response.json())
        .catch(error => console.log(error))
}