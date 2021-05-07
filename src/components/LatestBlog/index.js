import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdDateRange } from 'react-icons/md'
import blogApi from '../../api/blogApi'
const LastesBlog = () => {
    const [listBlog, setListBlog] = useState([]);

    useEffect(() => {
        const fecthListBlogs = async () => {
            try {

                const { data: blogs } = await blogApi.getAll()
                setListBlog(blogs);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fecthListBlogs();
    }, []);

    return (
        <div className="px-32  text-center my-5 ">
            <p className="text-3xl font-semibold  text-center">Our Latest Posts</p>

            <div className="grid grid-cols-3 gap-8 mt-6">
                {listBlog.map((blog) => {
                    return (
                        <div className=" h-auto group overflow-hidden">
                            <div
                                className=" w-full h-64 bg-gray-500 bg-no-repeat bg-cover bg-center  "
                                style={{ backgroundImage: `url(${blog.image})` }}
                            >

                            </div>
                            <div className="text-left mt-5">

                                <div className="flex items-center mb-2">
                                    <MdDateRange className="text-lg" />
                                    <p className="font-semibold tracking-wider">{blog.date}</p>
                                </div>

                                <Link className="text-md font-semibold " to="">{blog.name}</Link>
                                <p className=" text-gray-500 leading-6 mt-1"> {blog.content.slice(0, 90)}... </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LastesBlog
