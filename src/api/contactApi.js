import {API } from '../config'
export const addContact =  (contact)=>{
    return fetch(`${API}/contact`, {
        method: "POST",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)

    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const getAll =  ()=>{
    return fetch(`${API}/contact`, {
        method: "GET",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}