import React,{useState} from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import Modal from 'react-modal'
import FormProduct from './FormProduct'

const List = ({ listProducts, removeProduct, updateProduct }) => {
    const [modal, setModal] = useState(false)
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
                                <div className="bg-cover bg-center w-20 h-20" style={{ backgroundImage: `url(${product.image})` }} />
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
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                <RiEdit2Fill 
                                    className="text-3xl  text-red-600" 
                                    onClick={() => {
                                        setModal(true)
                                        updateProduct(product.id)
                                    }}
                                />
                                <AiFillDelete className="text-3xl  text-red-600" onClick={() => removeProduct(product.id)} />
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            {/* modal update */}
            <Modal
                isOpen={modal}
            >
                <FormProduct />
                <GrClose className="absolute top-3 right-3 text-2xl" onClick={() => { setModal(false) }} />
            </Modal>
        </div>
    )
}

export default List;