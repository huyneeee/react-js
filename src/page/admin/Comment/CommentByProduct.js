import React from 'react';

const CommentByProduct = ({ hadleClick, comment }) => {

  
    return (
        <div>
            <button
                onClick={()=>{
                    hadleClick('',true);
                }}
                className="px-2 py-2 bg-main text-white text-sm"
            >Back</button>
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
                            Content
    </th>

                    </tr>
                </thead>
                <tbody>
                    {comment.length===0 ?
                     (<>Product not comment</>) 
                     :
                     (
                        comment.map((c, index) =>

                            <tr className="text-left" key={c._id}>
    
                                <th
                                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 ">
                                    {index}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {c.content}
                                </td>
                            </tr>
                        )
                     )        
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export default CommentByProduct
