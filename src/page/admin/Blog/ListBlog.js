import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'
const ListBlog = ({data,removeBlog}) => {
    return (
        <div>
            <table className="items-center w-full bg-transparent border-collapse" >
                <thead>
                    <tr>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            ID
                    </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Name
                    </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Image
                    </th>

                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Description
                </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Action
              </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((blog, index) =>

                        <tr className="text-left" key={blog._id}>

                            <th
                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                {index}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {blog.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                <div className="bg-cover bg-center w-20 h-20" style={{ backgroundImage: `url(http://localhost:4000/api/blog/image/${blog._id})` }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {/* {blog.content.substr(0, 50)}... */}
                                    </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 flex">
                            <RiEdit2Fill 
                                    className="text-3xl  text-red-600" 
                                    onClick={() => {
                                        // showEditForm(true,cate);
                                    }}
                                />
                                <AiFillDelete 
                                className="text-3xl  text-red-600" 
                                onClick={() => removeBlog(blog._id)} 
                                />
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default ListBlog
