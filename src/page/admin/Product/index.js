import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import productApi from '../../../api/productApi'
import categoryApi from '../../../api/categoryApi';
import AddProductPage from './AddProductPage'
import EditProductPage from './EditProductPage'
import List from './List'
import Loading from '../../../components/Loading';
import Pagination from '../../../components/Pagination';
Modal.setAppElement('#root');
const ProductsPage = () => {

    const [listProducts, setListProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateProduct, setUpdateProduct] = useState();
    const { user } = JSON.parse(localStorage.getItem('user'))

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 5,
        _total: 1
    });
    const [filter, setFilter] = useState({
        _limit: 6,
        _page: 1,
        _gte: 0,
        _lte: 0,
        _category:0
    })
    const handlePagechange = (newPage) => {
        setFilter({
            ...filter,
            _page: newPage
        })
    }

    useEffect(() => {
        setLoading(true);
        (async () => {
            const { _page, _limit, _gte, _lte ,_category} = filter;
            try {
                const { data: total } = await productApi.countproduct();
                const { data: response } = await productApi.getProductPaginate(_page, _limit, _gte, _lte,_category);
                setLoading(false);
                setListProducts(response.data);
                setPagination({
                    ...response.pagination,
                    _total: total
                });
            } catch (error) {
                console.log("Failed to get data", error);
            }
        })()
    }, [filter])

    // get category api
    useEffect(() => {
        setLoading(true);
        const fetchCategory = async () => {
            try {
                const { data: category } = await categoryApi.getAll();

                setCategory(category);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCategory();
    }, []);
    const onAddProduct = async (product) => {
        try {
            const { user } = JSON.parse(localStorage.getItem('user'))
            const { data: productFake } = await productApi.add(product, user._id);
            setListProducts([
                ...listProducts,
                productFake
            ])
            setShowAddForm(false);
            alert('Thêm sản phẩm thành công !');
        } catch (error) {
            alert('Thêm sản phẩm thất bại !');
            alert(error.response.data.error);
        }

    }

    const removeProduct = async (idProduct) => {
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if (isConfirm) {
            try {
                await productApi.remove(idProduct, user._id);
                alert('Xóa sản phẩm thành công !');
                const findIndexById = listProducts.findIndex(pro => pro._id === idProduct);
                if (findIndexById !== -1) {
                    const newListProducts = [...listProducts];
                    newListProducts.splice(findIndexById, 1);
                    setListProducts(newListProducts);
                }
            } catch (error) {
                alert(error.response.data.error);
            }
        }

    }


    const onHadleShowEdit = (status, product) => {

        setShowEditForm(status);
        setUpdateProduct(product);
    }
    const onHadleShowList = (status) => {
        setShowAddForm(status);
        setShowEditForm(status);
    }
    const onUpdateProduct = async (product, id) => {

        try {
            const { data: productFake } = await productApi.update(id, product, user._id);

            const findIndexProduct = listProducts.findIndex(ele => ele._id === id);

            const newListProducts = [...listProducts];
            newListProducts.splice(findIndexProduct, 1, productFake);

            setListProducts(newListProducts);
            // setUpdateProduct('');    
            setShowEditForm(false);
            alert('UPDATE sản phẩm thành công !');
        } catch (error) {
            alert('UPDATE sản phẩm thất bại !');
            alert(error.response.data.error);
        }

    }

    if (showAddForm === true) {
        return (
            <AddProductPage onSubmit={onAddProduct} onHadleShowList={onHadleShowList} category={category} />
        )
    } else if (showEditForm === true) {
        return (
            <EditProductPage product={updateProduct} onUpdate={onUpdateProduct} onHadleShowList={onHadleShowList} category={category} />
        )
    } else {
        return (
            <div >
                {loading ? (<Loading />)
                    : (
                        <>
                            {user.role === 1 && <button className="px-3 py-2 bg-blue-400 text-white outline:none focus:outline-none m-3" onClick={() => setShowAddForm(true)}  >Add Product</button>}
                            <List listProducts={listProducts} removeProduct={removeProduct} showEditForm={onHadleShowEdit} user={user} />
                            <div className="mb-5  ">
                                <Pagination pagination={pagination} onPageChange={handlePagechange} />
                            </div>
                        </>
                    )
                }

            </div>
        )
    }

}

export default ProductsPage
