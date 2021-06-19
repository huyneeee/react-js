import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../../actions/cartAction'
import productApi from '../../../api/productApi'
import Pagination from '../../../components/Pagination'
const ShopPage = ({ listCategories }) => {

    const dispatch = useDispatch()
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, image: '' }));
    }

    const [listProducts, setListProducts] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 6,
        _total: 1
    });
    const [filter, setFilter] = useState({
        _limit: 6,
        _page: 1,
        _gte: 0,
        _lte: 0,
        _category:0
    })
    const onHandlePrice = (gte,lte)=>{
        setFilter({
            ...filter,
            _gte:gte,
            _lte:lte
        })
    }
    const onHandleCate = (id) => {
        setFilter({
            ...filter,
            _category:id
        })
    }
    const handlePagechange = (newPage) => {
        setFilter({
            ...filter,
            _page: newPage
        })
    }

    useEffect(() => {
        (async () => {
            const { _page, _limit, _gte, _lte ,_category} = filter;
            try {
                const { data: total } = await productApi.countproduct();
                const { data: response } = await productApi.getProductPaginate(_page, _limit, _gte, _lte,_category);
          
                setListProducts(response.data);
                setPagination({
                    ...response.pagination,
                    _total : total
                });
            } catch (error) {
                console.log(error)
            }
        })()
    }, [filter])

    const ProductList = () => {
        return (
            <div className="grid grid-cols-3 gap-4 w-full">
                {listProducts.map(product => {
                    return (
                        <div className=" h-auto w-auto group overflow-hidden relative" key={product._id}>
                            <div
                                className=" w-full h-80 bg-gray-100 flex justify-center items-center "
                            >
                                <img src={`http://localhost:4000/api/product/image/${product._id}`} alt="" className="w-40 h-40" />
                            </div>
                            <div className="text-center mt-5">
                                <Link className="text-md font-semibold uppercase text-gray-900 hover:text-main" to={`/shop/${product._id}`} >{product.name}</Link>
                                <div className="flex mt-3">
                                    <div className="flex-1">
                                        <button
                                            onClick={() => { handleClick(product) }}
                                            className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500">ADD TO CARD</button>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500 text-main">$ {product.price}.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    const SideBar = () => {
        return (
            <>
                <div>
                    <p className="text-lg font-semibold py-5 border-b border-gray-400">CATEGORY</p>
                    <div className="pl-2">
                        {listCategories.map(cate => {
                            return (
                                <div className="flex my-2 items-center" key={cate._id}>
                                    <input type="radio" name="cate" className="mr-2" onClick={() => { onHandleCate(cate._id) }} />
                                    <label>{cate.name}</label>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold py-5 border-b border-gray-400">FILTER BY PRICE</p>
                    <div className="pl-2">
                        <div className="flex my-2 items-center">
                            <input type="radio" name="price" className="mr-2" onClick={() => { onHandlePrice(0,0) }} />
                            <label>All</label>
                        </div>
                        <div className="flex my-2 items-center">
                            <input type="radio" name="price" className="mr-2" onClick={() => { onHandlePrice(0,100) }} />
                            <label>$0-$100</label>
                        </div>
                        <div className="flex my-2 items-center">
                            <input type="radio" name="price" className="mr-2" onClick={() => { onHandlePrice(100,500) }} />
                            <label>$100-$500</label>
                        </div>
                        <div className="flex my-2 items-center">
                            <input type="radio" name="price" className="mr-2" onClick={() => { onHandlePrice(500,1000) }} />
                            <label>$500-$1000 </label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold py-5 border-b border-gray-400">SELECT BY COLOR</p>
                    <div className="px-10">
                        <p className="my-1">Black</p>
                        <p className="my-1">White</p>
                        <p className="my-1">Red</p>
                        <p className="my-1">Brown</p>
                        <p className="my-1">Pink</p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="bg-gray-100 h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / Shop
            </div>
            <div className=" flex px-32  mt-10">
                <div className="w-1/4 px-5">
                    {SideBar()}
                </div>
                <div className="w-3/4">
                    {ProductList()}
                    <Pagination pagination={pagination} onPageChange={handlePagechange} />
                </div>
            </div>

        </div>
    )
}

export default ShopPage
