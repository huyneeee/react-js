import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'

const List = ({ listProducts, removeProduct, showEditForm, user }) => {
    if (listProducts.length === 0) {
        return (
            <p>Data Empty</p>
        )
    } else {
        return (
            <>
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
                                Price
                            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Quantity
                            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Status
                            </th>
                            <th
                                className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProducts.map((product, index) =>

                            <tr className="text-left" key={index}>

                                <th
                                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                    {index}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {product.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    <div className="bg-cover bg-center w-20 h-20"
                                     style={{ backgroundImage: `url(http://localhost:4000/api/product/image/${product._id})` }}
                                    />                               
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    ${product.price}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {product.quantity}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {product.status ? 'Stock' : 'InStock'}
                                </td>
                                {user.role === 1 ?
                                    (<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        <RiEdit2Fill
                                            className="text-3xl  text-red-600"
                                            onClick={() => {
                                                showEditForm(true, product);
                                            }}
                                        />
                                        <AiFillDelete className="text-3xl  text-red-600" onClick={() => removeProduct(product._id)} />
                                    </td>)
                                    :
                                    (
                                        <td className="border-t-0 text-red-500 text-xs font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            Bạn không có quyền !
                                        </td>
                                    )
                                }

                            </tr>
                        )}

                    </tbody>
                </table>

            </>
        )
    }
}

export default List;
