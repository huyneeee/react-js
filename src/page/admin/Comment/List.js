import React from 'react'

const List = ({ listProduct,hadleClick}) => {

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
                            Total Comment
        </th>
                        <th
                            className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                           Comment
      </th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct.map((p, index) =>

                        <tr className="text-left" key={p._id}>

                            <th
                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                {index}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {p.name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                               
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                <button 
                                onClick={()=>{
                                    hadleClick(p._id,false)
                                }}
                                className="px-2 py-2 bg-main text-sm rounded-md text-white " >Comment</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default List;
