import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const EditProductPage = ({ product, onUpdate, onHadleShowList, category }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [file, setFile] = useState({ status: false, message: "" });

    const onHandleFile = (e) => {
        setFile({ status: false, message: "" });
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
        if (e.target.files[0]) {
            if (acceptedImageTypes.includes(e.target.files[0].type) === false) {

                setFile({ status: true, message: "File tải lên phải có định dạng gif,jpeg,png,jpg!" })
                if (e.target.files[0].size > 3000000) {
                    setFile({ status: true, message: "File tải lên tối đa là 3MB!" })
                }
            }
        }

    }
    const onHandleSubmit = (data) => {
        let product = new FormData();

        if (data.imageNew.length === 0) {
            product.append('name', data.name);
            product.append('description', data.description);
            product.append('price', data.price);
            product.append('quantity', data.quantity);
            product.append('status', data.status);
            product.append('category', data.category);
            onUpdate(product, data._id);
        } else {
            product.append('name', data.name);
            product.append('description', data.description);
            product.append('price', data.price);
            product.append('quantity', data.quantity);
            product.append('image', data.imageNew[0]);
            product.append('status', data.status);
            product.append('category', data.category);
            if (file.status === false) {
                onUpdate(product, data._id);
            }
        }
    }
    return (
        <div className="relative bg-gray-100">
            <div className=" w-full h-full">
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mt-8">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <h1 className="text-center uppercase text-2xl font-bold my-4">Edit Product</h1>

                            <form onSubmit={handleSubmit(onHandleSubmit)} >
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                                <div className="relative">
                                                    <input type="hidden" {...register("_id")} defaultValue={product._id} />
                                                    <input
                                                        type="text"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("name", { required: true, pattern: /^[A-Za-z0-9 ]+$/i })}
                                                        defaultValue={product.name}
                                                    />
                                                    {errors.name && errors.name.type ==="required" && <span className="text-xs text-red-500 absolute top-3 right-3">Không được để trống !</span>}
                                                    {errors.name && errors.name.type ==="pattern" && <span className="text-xs text-red-500 absolute top-3 right-3">Tên sản phẩm sai định dạng !</span>}
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">

                                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                                <div className="relative">
                                                    <select   
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("category")}
                                                        defaultValue={product.category}
                                                        selected={product.category}
                                                    >
                                                        {category.map(cate => {
                                                            return (
                                                                <option 
                                                                select={(cate._id===product.category).toString()}
                                                                 key={cate._id} 
                                                                 value={cate._id}>{cate.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-span-6 ">
                                                <label className="block text-sm font-medium text-gray-700">Image </label>
                                                <div className="bg-cover bg-center w-40 h-40" >
                                                    <img src={`http://localhost:4000/api/product/image/${product._id}`} className="w-full h-full" alt="" />
                                                </div>
                                                <input type="hidden" value={product.image} {...register("imageOld")} />
                                                <div className="relative">
                                                    <input
                                                        type="file"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("imageNew", { required: false })}
                                                        onChange={(e) => onHandleFile(e)}
                                                        />
                                                        {file.status && <span className="text-xs text-red-500 absolute top-3 right-3">{file.message}</span>}
                                                </div>
                                            </div>


                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">Quantity </label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("quantity", { required: true , min:0})}
                                                        defaultValue={product.quantity}
                                                    />

                                                    {errors.quantity && errors.quantity.type ==="required" && <span className="text-xs text-red-500 absolute top-3 right-3">Không được để trống !</span>}
                                                    {errors.quantity && errors.quantity.type ==="min" && <span className="text-xs text-red-500 absolute top-3 right-3">Quantity là 1 số lớn hơn 0!</span>}
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">

                                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                                <div className="relative">

                                                    <input
                                                        type="number"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("price", { required: true , min:0})}
                                                        defaultValue={product.price}
                                                    />
                                                    {errors.price && errors.price.type ==="required" && <span className="text-xs text-red-500 absolute top-3 right-3">Không được để trống !</span>}
                                                    {errors.price && errors.price.type ==="min" && <span className="text-xs text-red-500 absolute top-3 right-3">Price là 1 số lớn hơn 0!</span>}
                                                </div>
                                            </div>

                                            <div className="col-span-6 ">

                                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                                <div className="relative">
                                                    <textarea
                                                        id="description" cols={30} rows={5}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("description", { required: true })}
                                                        defaultValue={product.description}
                                                    />

                                                    {errors.description && <span className="text-xs text-red-500 absolute top-3 right-3">This field is required</span>}

                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                                <div >
                                                    <input type="radio"  {...register("status")} defaultValue={true} checked /> Stocking
                                                    <input type="radio"  {...register("status")} defaultValue={false} /> Out of stock
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button

                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500  focus:outline-none  mr-5" onClick={() => onHadleShowList(false)} > Exit </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" > Save </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProductPage
