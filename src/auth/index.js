import { API } from '../config';


export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "appliaction/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data));
        next()
    }
}