import React, { useState, useEffect } from 'react'
import blogApi from '../../../api/blogApi'
import { useParams, Link } from 'react-router-dom'
const BlogDetailPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const detailBlog = async () => {
            try {
                const { data: detailBlog } = await blogApi.getOne(id);

                setBlog(detailBlog);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailBlog();
    }, [id]);

    return (
        <div>
            <div className="bg-gray-100 w-screen h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / {blog.name}
            </div>
            <div className="flex px-32 mt-20">
                <div className="flex flex-col w-3/4">
                    <p className="text-3xl font-semibold">{blog.name}</p>
                    <p className="text-xs my-3">Date:{blog.date}</p>
                    <div >
                        <img src={`http://localhost:4000/api/blog/image/${blog._id}`} alt=""/>
                    </div>
                    <p className="text-md my-5 leading">{blog.content}</p>
                </div>
                <div className="w-1/4 px-4">
                    <p className="text-md font-semibold py-3 border-b border-gray-400">SEARCH</p>
                    <input type="text" placeholder="SEARCH" className="border-gray-200 my-5 px-5 py-2 w-full" />
                    <div>
                        <p className="text-md font-semibold py-3 border-b border-gray-400">RECENT COMMENTS</p>
                        <div className="flex justify-center items-center mt-3">
                            <div className="w-1/5">
                                <img class=" inline-block h-12  w-12 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
                            </div>
                            <div className=" w-4/5">
                                <p>demo says: Quisque semper nunc</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-3">
                            <div className="w-1/5">
                                <img class=" inline-block h-12  w-12 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
                            </div>
                            <div className=" w-4/5">
                                <p>demo says: Quisque semper nunc</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-3">
                            <div className="w-1/5">
                                <img class=" inline-block h-12  w-12 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
                            </div>
                            <div className=" w-4/5">
                                <p>demo says: Quisque semper nunc</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDetailPage
