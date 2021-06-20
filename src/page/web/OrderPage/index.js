import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated, updateUser } from '../../../auth'
import { useForm } from 'react-hook-form';
import { addOrder } from '../../../api/orderApi'
import { addOrderDetail } from '../../../api/orderDetailApi'
import { deleteAllCart } from '../../../actions/cartAction';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { API } from '../../../config';
const OrderPage = ({ userProfile, handleLoading }) => {
    const cart = useSelector(data => data.cart.data);
    if (cart != null) {
        var subtotal = cart.reduce((sum, { sl, price }) => sum + sl * price, 0);
    }
    const { token } = isAuthenticated();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory()
    const formOrder = () => {
        return (
            <div className="ml-10  border border-gray-300">
                <div className=" border-b border-black px-5 py-3 text-md font-bold text-main">
                    <i className="fas fa-home " /> Shipping Address
                </div>
                <div className="p-5">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label className="block text-sm font-medium text-gray-700">Order Maker</label>
                        <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={userProfile.name} disabled

                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label className="block text-sm font-medium text-gray-700">Name of Consignee</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="name_of_consignee"
                                {...register("name_of_consignee", { required: true })}
                            />
                            <span className=" text-xs text-red-400 absolute right-1 top-3">
                                {errors.name_of_consignee && errors.name_of_consignee.type === 'required' && 'Không được để trống !'}
                            </span>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /\S+@\S+\.\S+/
                                    })}
                            />
                            <span className=" text-xs text-red-400 absolute right-6 top-14">
                                {errors.email && errors.email.type === 'required' && 'Không được để trống!'}
                                {errors.email && errors.email.type === 'pattern' && 'Email không đúng định dạng !'}
                            </span>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label className="block text-sm font-medium text-gray-700">Street Address</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="address"
                                {...register("address", { required: true })}
                            />
                            <span className=" text-xs text-red-400 absolute right-1 top-3">
                                {errors.address && errors.address.type === 'required' && 'Không được để trống !'}
                            </span>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div className=" relative">
                            <input
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-whiteshadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="phone"
                                {...register("phone", { required: true, pattern: /((09|03|07|08|05)+([0-9]{8})\b)/ })}
                            />
                            <span className=" text-xs text-red-400 absolute right-1 top-3">
                                {errors.phone && errors.phone.type === 'required' && 'Không được để trống !'}
                                {errors.phone && errors.phone.type === 'pattern' && 'Phone sai định dạng !'}

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const orderSumary = () => {
        return (
            <div className=" mr-10  border border-gray-300">
                <div className=" border-b border-black px-5 py-3 text-md font-bold text-main">
                    <i className="fas fa-list-ul" /> Order Summary
                </div>
                <div className="p-5">
                    <p>{cart.length} ITEM IN CART</p>
                    <hr className="my-3 text-gray-500" />
                    {cart.map(product => {
                        return (
                            <div className="flex my-3" key={product._id}>
                                <div className="bg-cover bg-center w-1/4 h-32 mr-3 relative"
                                    style={{ backgroundImage: `url(${API}/product/image/${product._id})` }}
                                >
                                    <div
                                        className="absolute top-1 right-1 text-white text-xs rounded-full h-4 w-4 bg-main flex items-center justify-center">
                                        {product.sl}</div>
                                </div>
                                <div className="w-3/4">
                                    <p className=" text-xl flex-1 text-left font-semibold text-gray-500">{product.name}</p>
                                    <p className="w-full flex-1 text-lg text-left font-bold  text-gray-900 mt-1">${product.price}.00</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="mt-5 flex items-center justify-between">
                        <p className="text-left font-bold">Subtotal</p>
                        <p className="text-right font-bold">${subtotal}.00</p>
                    </div>
                    <div className=" mt-5 flex items-center justify-between">
                        <p className="text-left italic font-bold">Shipping</p>
                        <p className="text-right font-bold">$0.00</p>
                    </div>
                    <div className=" mt-5 flex items-center justify-between">
                        <p className="text-left font-bold">Order Total</p>
                        <p className="text-right text-lg font-bold">${subtotal}.00</p>
                    </div>
                    <button type="submit" className="px-6 py-2 uppercase bg-main border-none text-white w-full mt-5">Place Order</button>
                </div>
            </div>
        )
    }


    const onHandleSubmit = async (data) => {
        handleLoading(true);
        const orderData = { ...data, subtotal: subtotal, id_order_maker: userProfile._id }
        try {

            addOrder(orderData)
                .then(data => {
                    cart.forEach(({ _id, sl, name, price, quantity, category }) => {
                        const orderDetail = { id_product: _id, sl: sl, name: name, price: price, category: category, quantity: quantity, id_order: data._id }
                        addOrderDetail(orderDetail)
                            .then(data => {
                                dispatch(deleteAllCart());
                            })
                            .catch(errors => {
                                console.log(`orderDetail ${errors}`)
                            });
                    })

                })
                .then(() => {
                    const userNew = { ...userProfile, history: '' }
                    updateUser(userNew, token)
                        .then(data => {
                            console.log('oki')
                        })
                        .catch(errors => {
                            console.log(errors)
                        })
                })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: `Đặt hàng thành công !`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .then(() => {
                    // history.push('/');
                    handleLoading(false);
                })

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="grid grid-cols-2 gap-4 px-20 mb-10">
                    {cart.length !== 0 ? (<> {formOrder()}
                        {orderSumary()}</>) : history.push('/')}
                </div>
            </form>

        </>
    )
}

export default OrderPage
