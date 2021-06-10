import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'

const List = ({ listCategories, removeCategory, showEditForm, user }) => {

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
                    {listCategories.map((cate, index) =>

                        <tr className="text-left" key={cate._id}>

                            <th
                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                {index}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {cate.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                <div className="bg-cover bg-center w-20 h-20" style={{ backgroundImage: `url(http://localhost:4000/api/category/image/${cate._id})` }} />
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {cate.description}
                            </td>
                            {
                                user.role===1 ? (
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 flex">
                                        <RiEdit2Fill
                                            className="text-3xl  text-red-600"
                                            onClick={() => {
                                                showEditForm(true, cate);
                                            }}
                                        />
                                        <AiFillDelete
                                            className="text-3xl  text-red-600"
                                            onClick={() => removeCategory(cate._id)}
                                        />
                                    </td>
                                ) : (
                                    <td className="border-t-0 text-red-500 text-xs font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    Bạn không có quyền !
                                </td>
                                )
                            }

                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default List;
