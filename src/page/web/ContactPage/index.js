import React from 'react'
import { Link } from 'react-router-dom'
import {ImLocation} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {GoMail} from 'react-icons/go'
const ContactPage = () => {
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
            <p className="text-2xl font-semibold my-2">Tell Us Your Project</p>
            <form action="">
            <div className="flex flex-col w-full">
                <label className="py-2 font-semibold text-sm">Your Name</label>
                <input type="text" placeholder="name" className="px-5 py-3 border border-gray-300" />
            </div>
            <div className="flex flex-col w-full">
                <label className="py-2 font-semibold text-sm">Your Email</label>
                <input type="text" placeholder="email" className="px-5 py-3 border border-gray-300" />
            </div>
            <div className="flex flex-col w-full">
                <label className="py-2 font-semibold text-sm">Your Massage</label>
                <textarea name="" id="" cols="30" rows="10" className="border border-gray-400 px-5 py-2"></textarea>
            </div>
            <button className="px-5 py-2 bg-black text-white text-md font-semibold rounded-md mt-8">Send</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default ContactPage
