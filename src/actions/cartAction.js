export const addToCart = (product)=>{
    return {
        type : 'ADD_TO_CART',
        payload:product
    }
}
export const deleteCart = (id)=>{
    return {
        type : 'DELETE_TO_CART',
        payload:id
    }
}
export const upToCart = (id)=>{
    return {
        type : 'UP_TO_CART',
        payload:id
    }
}
export const downToCart = (id)=>{
    return {
        type : 'DOWN_TO_CART',
        payload:id
    }
}
export const deleteAllCart = ()=>{
    return {
        type : 'DELETE_ALL_TO_CART',
    }
}
export const setCart = (historyCart)=>{
    return {
        type : 'SET_TO_CART',
        payload : historyCart
    }
}
