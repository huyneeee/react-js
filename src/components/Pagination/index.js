import React from 'react'

const Pagination = ({ pagination, onPageChange }) => {
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    const handlepageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    const numberPage = (handlepageChange) => {
        var arr_index = []
        for (let i = 1; i <= totalPages; i++) {
            arr_index.push(i)
        }
        const result = arr_index.map(ele => {
            return (
                <button
                    key={ele}
                    
                    disabled={_page ===ele}
                    onClick={() => { handlepageChange(ele) }}

                    className={_page===ele ? "px-4 py-2 bg-main text-white text-sm mr-2 focus:outline-none" : "px-4 py-2 bg-gray-400 text-white text-sm mr-2 focus:outline-none hover:bg-main"}
                >{ele}</button>
            )
        })
        return result;
    }

    return (
        <>
        <div className="mt-10 flex justify-center">
            <div>
                {/* <button
                    className="px-2 py-2 bg-main text-white text-sm mr-2"
                    disabled={_page <= 1}
                    onClick={() => { handlepageChange(_page - 1) }}
                >
                    Prev
            </button> */}
                {numberPage(handlepageChange)}
                {/* <button
                    className="px-2 py-2 bg-main text-white text-sm ml-2"
                    disabled={_page >= totalPages}
                    onClick={() => handlepageChange(_page + 1)}
                >
                    Next
            </button> */}
            </div>

           
        </div>
         {/* <div className="flex justify-center items-center right">
          {_page} of {totalPages} 
     </div> */}
     </>
    )
}

export default Pagination
