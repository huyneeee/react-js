import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import productApi from '../../../api/productApi'
import categoryApi from '../../../api/categoryApi';
import AddProductPage from './AddProductPage'
import EditProductPage from './EditProductPage'
import List from './List'
import Loading from '../../../components/Loading';
Modal.setAppElement('#root');
const ProductsPage = () => {

    const [listProducts, setListProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateProduct, setUpdateProduct] = useState();
    useEffect(() => {
        setLoading(true);
        const fecthListProduct = async () => {
            try {
                const { data: listProduct } = await productApi.getAll();
                setListProducts(listProduct);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fecthListProduct();
    }, []);

    // get category api
    useEffect(() => {
        setLoading(true);
        const fetchCategory = async () => {
            try {
                const { data: category } = await categoryApi.getAll();
               
                const newCategory = category.map(cate=>{
                    return {
                        value:cate._id,
                        label:cate.name
                    }
                });
                setCategory(newCategory);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCategory();
    }, []);
    const onAddProduct = async (product) => {
        try {
            const { data: productFake } = await productApi.add(product);
            setListProducts([
                ...listProducts,
                productFake
            ])
            setShowAddForm(false);
            alert('Thêm sản phẩm thành công !');
        } catch (error) {
            alert('Thêm sản phẩm thất bại !')
        }

    }

    const removeProduct = async (idProduct) => {
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if (isConfirm) {
            try {
                productApi.remove(idProduct);
                alert('Xóa sản phẩm thành công !');
                const findIndexById = listProducts.findIndex(pro => pro._id === idProduct);
                if (findIndexById !== -1) {
                    const newListProducts = [...listProducts];
                    newListProducts.splice(findIndexById, 1);
                    setListProducts(newListProducts);
                }
            } catch (error) {
                alert('Lỗi xóa sản phẩm', error);
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
            const { data: productFake } = await productApi.update(id, product);

            const findIndexProduct = listProducts.findIndex(ele => ele._id === id);

            const newListProducts = [...listProducts];
            newListProducts.splice(findIndexProduct, 1, productFake);
            setListProducts(newListProducts);

            setShowEditForm(false);
            alert('UPDATE sản phẩm thành công !');
        } catch (error) {
            alert('UPDATE sản phẩm thất bại !')
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
                        <button className="px-3 py-2 bg-blue-400 text-white outline:none focus:outline-none m-3" onClick={() => setShowAddForm(true)}  >Add Product</button>
                        <List listProducts={listProducts} removeProduct={removeProduct} showEditForm={onHadleShowEdit} />
                        </> 
                    )
                }

            </div>
        )
    }

}

export default ProductsPage
