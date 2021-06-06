import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { signup } from '../../../auth'
import { RiErrorWarningFill } from 'react-icons/ri'
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const onHandleSubmit =  (data,e) => {
        signup(data)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    e.target.reset();
                    setError('');
                    setSuccess(true);
                }
            })

    }
    const showError = () => {
        return (
            <div className={ error ? 'text-center text-red-400 my-2' : 'hidden'}>
                <p className="text-lg font-semibold">Đăng ký không thành công !</p>
                <span className="flex justify-center my-2 items-center">
                    <RiErrorWarningFill />{error}
                </span>
            </div>

        )
    }
    const showSuccess = () => {
        return (
            <div className={success ? 'text-center text-green-600 my-2' : 'hidden'}>
                <p className="text-lg font-semibold ">Đăng ký thành công !</p>
                <span className="flex justify-center my-2 items-center">
                    Vui lòng đăng nhập  <Link to="/login">  tại đây</Link>
                </span>
            </div>

        )
    }
    const signUpForm = () => {
        return (
            <form className="border border-gray-300 rounded shadow-xl px-5 py-3 " onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="hidden" id="id" />
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Email <span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Email sai định dạng !"
                                }
                            })}
                        />
                        <span className=" text-xs text-red-400 absolute right-1 top-3">
                            {errors.email && errors.email.message}
                        </span>
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">User Name <span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register("name", { required: true, pattern: /^[a-zA-Z0-9_ ]{5,30}$/ })}
                        />
                        {errors.name && <span className="text-xs text-red-500 absolute top-3 right-3">This field is required</span>}
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Password<span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="password"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register("password", { required: true, pattern: /^[a-zA-Z0-9_]{6,30}$/ })}
                        />
                        {errors.password && <span className="text-xs text-red-500 absolute top-3 right-3">Password must contain at least 6 characters !</span>}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <button type="submit" className="px-8 py-3 text-sm bg-green-700 opacity-80  hover:opacity-100 text-white ">CREATE AN ACCOUNT</button>
                    <Link to="/login" className="font-normal text-gray-900">BACK</Link>
                </div>
            </form>
        )
    }

    return (
        <>
            <p className="text-gray-900 text-xl font-semibold my-4 text-center tracking-widest">CREATE NEW CUSTOMER ACCOUNT</p>
            <div className="resgiter flex justify-center mb-20">
                <div className="flex flex-col  w-2/5">
                    {showError()}
                    {showSuccess()}
                    {signUpForm()}
                </div>
            </div>
        </>
    )
}

export default RegisterPage
