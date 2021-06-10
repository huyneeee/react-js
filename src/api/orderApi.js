import { isAuthenticated } from '../auth'
import {API} from '../config'
const {user} = isAuthenticated()
const { token} = isAuthenticated()
export const addOrder = (order) => {
    return fetch(`${API}/order/${user._id}`, {
        method: "POST",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(order)

    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const getAll = ()=>{
    return fetch(`${API}/order`,{
        method:"GET",
        headers: {
            Accept: "appliaction/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}
export const countOrder = ()=>{
    return fetch(`${API}/countorder`,{
        method :"GET",
        headers: {
            Accept: "appliaction/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}