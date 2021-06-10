import React from 'react'
import { Link } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { GoMail } from 'react-icons/go'
import { useForm } from 'react-hook-form'
import { addContact } from '../../../api/contactApi'
import Swal from 'sweetalert2'
const ContactPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = async(data)=>{
        try {
            addContact(data).
            then(data=>{
                Swal.fire({
                    icon: 'success',
                    title: `Cảm ơn đã liên hệ với chúng tôi!`,
                    showConfirmButton: false,
                    timer: 2000
                })
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    const fromContact = () => {
        return (
            <>
                <p className="text-2xl font-semibold my-2">Tell Us Your Project</p>
                <form  onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="flex flex-col w-full relative">
                        <label className="py-2 font-semibold text-sm">Your Name</label>
                        <input type="text" placeholder="name" className="px-5 py-3 border border-gray-300"
                            {...register("name",{required:true})}
                        />
                        <span className=" text-xs text-red-400 absolute right-6 top-14">
                        {errors.name && errors.name.type==='required'&& 'Không được để trống!'}
                    </span>
                    </div>
                    <div className="flex flex-col w-full relative">
                        <label className="py-2 font-semibold text-sm">Your Email</label>
                        <input type="text" placeholder="email" className="px-5 py-3 border border-gray-300" 
                            {...register("email",
                            {
                                required:true,
                                pattern:/\S+@\S+\.\S+/
                            })}       
                        />
                         <span className=" text-xs text-red-400 absolute right-6 top-14">
                        {errors.email && errors.email.type==='required'&& 'Không được để trống!'}
                        {errors.email && errors.email.type==='pattern'&& 'Email không đúng định dạng !'}
                    </span>
                    </div>
                    <div className="flex flex-col w-full relative">
                        <label className="py-2 font-semibold text-sm">Your Phone</label>
                        <input type="text" placeholder="Phone" className="px-5 py-3 border border-gray-300" 
                            {...register("phone",{required:true,pattern:/((09|03|07|08|05)+([0-9]{8})\b)/})}
                        
                        />
                         <span className=" text-xs text-red-400 absolute right-6 top-14">
                        {errors.phone && errors.phone.type==='required'&& 'Không được để trống!'}
                        {errors.phone && errors.phone.type==='pattern'&& 'Phone sai định dạng !'}

                    </span>
                    </div>
                    <div className="flex flex-col w-full relative">
                        <label className="py-2 font-semibold text-sm">Your Massage</label>
                        <textarea name="" id="" cols="30" rows="10" className="border border-gray-400 px-5 py-2"
                            {...register("massage",{required:true})}
                        
                        ></textarea>
                         <span className=" text-xs text-red-400 absolute right-6 top-14">
                        {errors.massage && errors.massage.type==='required'&& 'Không được để trống!'}
                    </span>
                    </div>
                    <button className="px-5 py-2 bg-black text-white text-md font-semibold rounded-md mt-8">Send</button>
                </form>
            </>
        )
    }
    return (
        <div>
            <div className="bg-gray-100  h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / Contact
        </div>
            <div className="flex  px-32 ">
                <div className="flex-1 pr-3">
                    <p className="text-2xl font-semibold my-2">Contact Us</p>
                    <p className="border-b border-gray-400 pb-6">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                    <p className="border-b border-gray-400 py-6 flex items-center"><ImLocation className="mr-2"></ImLocation> KTX America Hanoi</p>
                    <p className="border-b border-gray-400 py-6 flex items-center"><GoMail className="mr-2"></GoMail>  huyne@gmail.com</p>
                    <p className="border-b border-gray-400 py-6 flex items-center"><IoPhonePortraitOutline className="mr-2"></IoPhonePortraitOutline>  0123456789</p>


                </div>
                <div className="flex-1 ">
                    {fromContact()}
                </div>
            </div>
        </div>
    )
}

export default ContactPage
