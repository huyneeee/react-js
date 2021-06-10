import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteCart , upToCart , downToCart} from '../../../actions/cartAction'
const Cart = () => {
    const arr_product_cart = useSelector(data => data.cart.data);
    if(arr_product_cart!=null){
        var subtotal = arr_product_cart.reduce( ( sum, { sl,price } ) => sum + sl*price , 0);        
    }
    const dispatch = useDispatch();

    const handleDeleteCart = (id)=>{
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if(isConfirm){  
            dispatch(deleteCart(id));
        }
    }
    const handleUpToCart = (id)=>{
        dispatch(upToCart(id));
    }
    const handleDownToCart = (id)=>{
        dispatch(downToCart(id));
    }
    return (
        <>
            <div className="flex w-full px-24 h-auto my-10" id="cart">
                <div className="w-2/3 h-auto flex-col ">
                    <p className="text-left text-lg font-normal uppercase py-4">shopping cart</p>
                    <table className="table-fixed border-collapse border border-gray-400 w-full mb-5" >
                        <thead>
                            <tr className="uppercase tracking-widest ">
                                <th className="border border-gray-300 py-4 w-2/3 font-semibold text-sm ">Item</th>
                                <th className="border border-gray-300 py-4 px-6 w-1/9 font-semibold text-sm">qty</th>
                                <th className="border border-gray-300 py-4 px-2 w-1/9 font-semibold text-sm">SUM</th>
                                <th className="border border-gray-300 py-4 px-2 w-1/9 font-semibold text-sm">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr_product_cart.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=" p-4 flex  border-b border-gray-300">
                                            <div 
                                                className="bg-cover bg-center w-1/4 h-24 mr-3 " 
                                                style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${product._id})` }}
                                                ></div>
                                            <div className="row w-3/4">
                                                <a href="#/products/${product.id}" className="w-full text-md font-normal  text-gray-900">{product.name}</a>
                                                <p className="w-full text-md font-bold  text-gray-900 mt-3">$ {product.price}</p>
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 text-center">
                                            <div className="flex flex-col ">
                                                <div>
                                                    <button 
                                                        onClick={()=>handleUpToCart(product._id)} 
                                                            className=" focus:outline-none">
                                                                <i className="fas fa-caret-up text-4xl"></i>
                                                    </button>
                                                    </div>
                                                <div>{product.sl}</div>
                                                <div>
                                                    <button 
                                                        onClick={()=>handleDownToCart(product._id)}  
                                                        className=" focus:outline-none">
                                                            <i className="fas fa-caret-down text-4xl"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 text-center">$ {product.price * product.sl}</td>
                                        <td className="border border-gray-300 text-center">
                                            <button className=" focus:outline-none" onClick={()=>handleDeleteCart(product._id)} ><i className="fas fa-trash text-2xl"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Link to="/shop" className="px-6 py-3 uppercase bg-main border-none text-white w-1/4 mt-5">CONTINUE SHOPPING</Link>
                </div>
                <div className="w-1/3  h-auto tracking-widest px-10">
                    <p className="text-left text-lg font-semibold uppercase py-4">summary</p>
                    <table className="table-fixed border-collapse border border-gray-400 w-full text-left">
                        <thead>
                            <tr className=" tracking-widest text-gray-500 ">
                                <th className="border border-gray-300 p-4 w-2/3 font-semibold text-sm ">Subtotal</th>
                                <th className="border border-gray-300 p-4 w-1/3 font-semibold text-sm">$<b>{subtotal}</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 font-semibold text-sm p-4">Shipping</td>
                                <td className="border border-gray-300 p-4 w-1/3 font-semibold text-sm text-gray-500">$0</td>
                            </tr>
                            <tr className=" tracking-widest text-gray-500 ">
                                <td className="border border-gray-300 font-semibold text-sm p-4">Order Total</td>
                                <td className="border border-gray-300 p-4 w-1/3 font-bold text-sm text-gray-900">$<b>{subtotal}</b></td>
                            </tr>
                        </tbody>
                    </table>
                    {arr_product_cart ? (<Link to="/checkout" className=" flex justify-center px-6 py-3 uppercase bg-main border-none text-white w-full mt-5">PROCEED TO CHECKOUT</Link>) : ''}
                </div>
            </div>
        </>
    )
}

export default Cart
