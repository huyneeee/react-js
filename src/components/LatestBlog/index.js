import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import {API} from '../../config'
const LastesBlog = () => {
    const loading = useSelector(state => state.blog.loading);
    const listBlog = useSelector(state => state.blog.data);

    return (
        <>
            {loading ?
                <Loading />
                :
                (
                    <div className="px-32  text-center my-5 ">
                        <p className="text-3xl font-semibold  text-center">Our Latest Posts</p>

                        <div className="grid grid-cols-3 gap-8 mt-6">
                            {listBlog.slice(0,3).map((blog) => {
                                return (
                                    <div className=" h-auto group overflow-hidden" key={blog._id}>
                                        <div
                                            className=" w-full h-64 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                                            style={{ backgroundImage: `url(${API}/blog/image/${blog._id})` }}
                                        >

                                        </div>
                                        <div className="text-left mt-5">

                                            <div className="flex items-center mb-2">
                                                <MdDateRange className="text-lg" />
                                                <p className="font-semibold tracking-wider">{blog.createdAt.slice(0,10)}</p>
                                            </div>

                                            <Link className="text-md font-semibold " to={`/blog/${blog._id}`} >{blog.name}</Link>
                                            <p className=" text-gray-500 leading-6 mt-1"> {blog.content.slice(0, 90)}... </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LastesBlog
