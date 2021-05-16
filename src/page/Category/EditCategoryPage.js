import React, { useEffect, useState } from 'react'
import firebase from '../../firebase';
import { useForm } from 'react-hook-form';
const EditProductPage = ({ category, onUpdate, onHadleShowList }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onHandleSubmit = (data) => {
        const image_category = data.imageNew[0];
        if (image_category) {

            let storageRef = firebase.storage().ref(`images/${image_category.name}`);
            storageRef.put(image_category).then(function () {
                storageRef.getDownloadURL().then(async (url) => {
                    const categoryUpdate = {
                        ...category,
                        name: data.name,
                        image: url,
                        description: data.description
                    }
                    onUpdate(categoryUpdate);
                })
            })
        } else {
            const categoryUpdate = {
                ...category,
                name: data.name,
                image: data.imageOld,
                description: data.description
            }
            onUpdate(categoryUpdate);
        }

    }
    return (
        <div className="relative bg-gray-100">
            <div className="px-4 md:px-10 mx-auto w-full h-full">
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mt-8">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <h1 className="text-center uppercase text-2xl font-bold my-4">Edit Product</h1>

                            <form onSubmit={handleSubmit(onHandleSubmit)} >
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                                <div className="relative">

                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("name", { required: true, pattern: /^[A-Za-z ]+$/i })}
                                                        defaultValue={category.name}
                                                    />
                                                    {errors.name && <span className="text-xs text-red-500 absolute top-3 right-3">This field is required</span>}
                                                </div>
                                            </div>


                                            <div className="col-span-6 ">
                                                <label className="block text-sm font-medium text-gray-700">Image </label>
                                                <div className="bg-cover bg-center w-40 h-40" >
                                                    <img src={category.image} className="w-full h-full" />
                                                </div>
                                                <input type="hidden" value={category.image} {...register("imageOld")} />
                                                <div className="relative">
                                                    <input
                                                        type="file"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("imageNew", { required: false })} />

                                                </div>
                                            </div>




                                            <div className="col-span-6 ">

                                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                                <div className="relative">
                                                    <textarea
                                                        id="description" cols={30} rows={5}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        name="description"
                                                        {...register("description", { required: true })}
                                                        defaultValue={category.description}
                                                    />

                                                    {errors.description && <span className="text-xs text-red-500 absolute top-3 right-3">This field is required</span>}

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
