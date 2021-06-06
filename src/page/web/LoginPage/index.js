import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signin ,authenticate} from '../../../auth'
import { Link, useHistory } from 'react-router-dom'
const LoginPage = ({signIn}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const history = useHistory();
    const onHadleSubmit = (data) => {
        signin(data)
            .then(data => {
                if (data.error) {
                    setError(data);
                } else {
                    setError('');
                    signIn(data);
                    authenticate(data,()=>{history.push('/')});
                }
            })
    }
    const signInForm = () => {
        return (
            <form className="border border-gray-300 shadow-lg h-96 w-2/5 px-8 py-10" onSubmit={handleSubmit(onHadleSubmit)} >
                <p className="font-semibold text-gray-400 text-md mb-3">REGISTERED CUSTOMERS</p>
                <hr />
                <p className="text-gray-400 my-3 text-sm">If you have an account, sign in with your username.</p>
                <div className="mb-7 relative">
                    <input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Email sai định dạng !"
                            }
                        })}
                        type="text"
                        className="w-full border-2 border-gray-300 px-2 py-2 rounded focus:outline-none "
                        placeholder="Email"
                    />
                    <span className=" text-xs text-red-400 absolute right-1 top-3">
                        {errors.email && errors.email.message}
                        {error.email && error.error}
                    </span>
                </div>
                <div className="relative">
                    <input
                        type="password"
                        className="w-full border-2 border-gray-300 px-2 py-2 rounded focus:outline-none "
                        placeholder="Password"
                        {...register("password",
                            {
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: "Password tối đa 6 kí tự !"
                                }
                            })} />
                    <span className=" text-xs text-red-400 absolute right-1 top-3">
                        {errors.password && errors.password.message}
                        {error.password && error.error}
                    </span>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-8 py-3 text-sm bg-green-700 opacity-80 mt-10 hover:opacity-100 text-white  ">SIGN IN</button>
                </div>
            </form>
        )
    }
    return (
        <div>
            <div>
                <p className="text-gray-900 text-xl font-semibold my-8 text-center ">CUSTOMER LOGIN</p>
                <div className="login flex flex-col items-center">
                    {signInForm()}
                    <div className="w-2/5 mt-20 text-center mb-10">
                        <p className="text-gray-900 text-xl font-semibold mb-2">NEW CUSTOMERS</p>
                        <p className="text-gray-400 text-md mb-8">Creating an account has many benefits: check out faster, keep more than one
                address, track orders and more.</p>
                        <Link to="/register" className="px-8 py-3 text-sm bg-green-700 opacity-80 mt-8 hover:opacity-100 text-white ">CREATE AN
                ACCOUNT</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
