import Swal from 'sweetalert2';
if (localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', '[]');
}

const cartStorage = JSON.parse(localStorage.getItem('cart'));

const initailState = {
    data: cartStorage
}

const cartReducer = (state = initailState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const arrCart = state.data;

            Swal.fire({
                icon: 'success',
                title: `${action.payload.name} đã nằm trong giỏ hàng của bạn !`,
                showConfirmButton: false,
                timer: 2000
            })
            if (state.data.length === 0) {
                const newCart = [...arrCart, { ...action.payload, sl: 1 }]
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            } else {
                const findIndexProduct = arrCart.findIndex(ele => ele._id === action.payload._id);
                if (findIndexProduct !== -1) {
                    const sl = arrCart[findIndexProduct].sl;

                    const newPayload = { ...action.payload, sl: sl + 1 }
                    const newCart = [...arrCart];
                    newCart.splice(findIndexProduct, 1, newPayload);
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    return {
                        data: newCart
                    }
                } else {
                    const newCart = [...arrCart, { ...action.payload, sl: 1 }];
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    return {
                        data: newCart
                    }
                }
            }

        }
        case 'DELETE_TO_CART': {
            const arrCart = state.data;
            const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
            if (isConfirm) {
                const newCart = arrCart.filter(product => product._id !== action.payload);
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            }else{
                return {
                    data: arrCart
                }
            }
        }
        case 'UP_TO_CART': {
            const arrCart = state.data;
            const findIndexProduct = arrCart.findIndex(ele => ele._id === action.payload._id);
            const sl = arrCart[findIndexProduct].sl;
           
            if(sl < action.payload.quantity){
                console.log(action.payload.quantity)
                const newProductInCart = { ...arrCart[findIndexProduct], sl: sl + 1 }
                let newCart = [...arrCart];
                newCart.splice(findIndexProduct, 1, newProductInCart);
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            }else{
                return {
                    data : arrCart
                }
            }
            
        }
        case 'DOWN_TO_CART': {
            const arrCart = state.data;
            const findIndexProduct = arrCart.findIndex(ele => ele._id === action.payload._id);
            const sl = arrCart[findIndexProduct].sl;
            if (sl > 1) {
                const newProductInCart = { ...arrCart[findIndexProduct], sl: sl - 1 }
                const newCart = [...arrCart];
                newCart.splice(findIndexProduct, 1, newProductInCart);
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            } else {
                const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
                if (isConfirm) {
                    const newCart = arrCart.filter(product => product._id !== action.payload);
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    return {
                        data: newCart
                    }
                }

            }
            break;
        }
        case 'DELETE_ALL_TO_CART': {
            localStorage.removeItem('cart');
            localStorage.removeItem('history');
            return {
                data: []
            }
        }
        case 'SET_TO_CART': {
            return {
                data:action.payload
            }
        }
        default:
            return state;
    }
}
export default cartReducer;