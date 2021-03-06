import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { API } from '../../../config'
const BlogPage = () => {
    const listBlog = useSelector(state => state.blog.data);
    return (
        <div>
        <div className="bg-gray-100  h-32 flex justify-center items-center">
        <Link to='/' className="font-semibold text-md ">Home </Link> / Blog
        </div>
        <div className="flex px-32 mt-10">
            <div className="w-1/4 px-4">
                <p className="text-md font-semibold py-3 border-b border-gray-400">SEARCH</p>
                <input type="text" placeholder="SEARCH" className="border-gray-200 my-5 px-5 py-2 w-full" />
                <div>
                    <p className="text-md font-semibold py-3 border-b border-gray-400">RECENT COMMENTS</p>
                    <div className="flex justify-center items-center mt-3">
                        <div className="w-1/5">
                            <img className=" inline-block h-12  w-12 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
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
                            <img className=" inline-block h-12  w-12 rounded-full my-2 " src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/136415274_2780920485455236_3790817701055726266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7preIa939JIAX-KONr6&_nc_ht=scontent-hkg4-1.xx&oh=972e139651a38f78b2689b783afd8597&oe=60D17591" alt="" />
                        </div>
                        <div className=" w-4/5">
                            <p>demo says: Quisque semper nunc</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-3/4">

                {listBlog.map(blog => {
                    return (
                        <div className="h-70 flex border-b border-gray-400 py-8" key={blog._id}>
                            <div className="w-2/5 ">
                                <img src={`${API}/blog/image/${blog._id}`} alt="" className="w-full h-full" />
                            </div>
                            <div className="w-3/5 pl-8 relative">
                                <p className="text-2xl">{blog.name}</p>
                                <p className="py-1 text-gray-400 font-semibold">Date:{blog.createdAt.slice(0,10)}</p>
                                <p className="py-1">{blog.content.slice(0, 130)}</p>
                                <Link to={`/blog/${blog._id}`} className="px-5 py-2 bg-black text-white rounded-full font-semibold text-sm absolute bottom-5 ">Read More</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default BlogPage
