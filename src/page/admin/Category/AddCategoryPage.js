
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProductPage = ({ onSubmit, onHadleShowList }) => {
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

        let category = new FormData();

        category.append('name', data.name);
        category.append('image', data.image[0]);
        category.append('description', data.description);
        if (data.image.length === 0) {
            setFile({ status: true, message: "Không được để trống !" })
        } else {
            if (file.status === false) {
                onSubmit(category);
            }
        }
    }

    return (
        <div className="relative bg-gray-100">
            <div className="px-4 md:px-10 mx-auto w-full h-full">
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mt-8">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <h1 className="text-center uppercase text-2xl font-bold my-4">Add Category</h1>

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
                                                        {...register("name", { required: true, pattern: /^[a-zA-Z0-9_ ]{3,30}$/ })}
                                                    />

                                                    {errors.name && errors.name.type === "required" && <span className="text-xs text-red-500 absolute top-3 right-3">Không được để trống !</span>}
                                                    {errors.name && errors.name.type === "pattern" && <span className="text-xs text-red-500 absolute top-3 right-3">Không đúng định dạng !</span>}
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <label className="block text-sm font-medium text-gray-700">Image </label>
                                                <div className="relative">
                                                    <input
                                                        onChange={(e) => {
                                                            console.log(e)
                                                        }}
                                                        type="file"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        {...register("image")}
                                                        onChange={(e) => onHandleFile(e)}
                                                    />
                                                    {file.status && <span className="text-xs text-red-500 absolute top-3 right-3">{file.message}</span>}
                                                </div>
                                            </div>

                                            <div className="col-span-6 ">
                                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                                <div className="relative">
                                                    <textarea
                                                        id="description" cols={30} rows={5}
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        name="description"
                                                        {...register("description", { required: true, pattern: /^[a-zA-Z0-9_ ]{0,255}$/ })}
                                                    />

                                                    {errors.description && errors.description.type === "required" && <span className="text-xs text-red-500 absolute top-3 right-3">Không được để trống !</span>}
                                                    {errors.description && errors.description.type === "pattern" && <span className="text-xs text-red-500 absolute top-3 right-3">Không đúng định dạng !</span>}

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

export default AddProductPage
