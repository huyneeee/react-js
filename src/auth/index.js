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
export const updateUser = (user,token)=>{
    return fetch(`${API}/user/${user._id}`,{
        method : "PUT",
        headers :{
            Accept : "appliaction/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body : JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error.response))
    
}
export const activateAcounnt = (token)=>{
    return fetch(`${API}/auth/activate`,{
        method:"POST",
        headers : {
            Accept : "appliaction/json",
            "Content-Type": "application/json"
        },
        body : JSON.stringify(token)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error.response))
}
export const signout = (next)=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('user');
        localStorage.removeItem('history');
        // next();
        return fetch(`${API}/signout`,{
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(error=>console.log(error))
    }
}

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data));
        next()
    }
}
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}
