import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart } from '../../../actions/cartAction';
import { API } from '../../../config';

const CartMini = ({ showCart, handleClickCart }) => {
    const cart = useSelector(data => data.cart.data);
    const dispatch = useDispatch();
    if (cart != null) {
        var subtotal = cart.reduce((sum, { sl, price }) => sum + sl * price, 0);
    }
    const handlDeleteCart = (id) => {
        dispatch(deleteCart(id));
    }
    return (
        <>
            <div className={showCart ? 'w-80 h-screen bg-white fixed z-10 right-0 p-5 transform  translate-x-0 transition-all duration-500' : 'w-80 h-screen bg-white fixed z-10 right-0 p-5 transform translate-x-80 transition-all duration-500'} >
                <div className="flex justify-between text-lg my-5 border-b border-black pb-3">
                    <p className="flex-1 ">Cart</p>
                    <button onClick={() => handleClickCart(false)} className="flex-1 text-right focus:outline-none "><i className="fas fa-times"></i></button>
                </div>
                {cart.length !== 0 ? (
                    <>
                        <div className="flex flex-col">
                            {cart.map(c => {
                                return (
                                    <div className=" w-full h-24 flex border-b border-black pb-5" key={c._id}>
                                        <div
                                            className=" w-1/3 bg-no-repeat bg-cover bg-center  "
                                            style={{ backgroundImage: `url(${API}/product/image/${c._id})` }}
                                        >
                                        </div>
                                        <div className="w-2/3 pl-2" >
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm">{c.name}</p>
                                                <button onClick={() => handlDeleteCart(c._id)} className="text-right focus:outline-none"><i className="fas fa-times"></i></button>
                                            </div>
                                            <p className="text-sm font-semibold">{c.sl} x ${c.price}.00</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex justify-between text-md my-5 border-b border-black pb-3 ">
                            <p className="flex-1 ">SubToltal</p>
                            <p className="flex-1 text-right font-semibold">${subtotal}.00</p>
                        </div>
                        <div className="w-full mb-3 ">
                            <Link to="/cart" onClick={() => handleClickCart(false)} className="flex justify-center items-center py-3 text-center hover:bg-main hover:text-white  bg-gray-400 text-black font-semibold "><i className="fas fa-cart-plus"></i> View Cart</Link>
                        </div>
                        <div className="w-full ">
                            <Link to="/checkout" onClick={() => handleClickCart(false)} className="flex justify-center items-center py-3 text-center  bg-main text-white font-semibold "><i className="fas fa-sign-out-alt"></i> Check Out</Link>
                        </div>
                    </>
                ) : 
                <>
                    Cart not product !
                </>
            }
            </div>
        </>
    )
}

export default CartMini
