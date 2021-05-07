import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import productApi from '../../api/productApi'
import FormProduct from './FormProduct'
import List from './List'
Modal.setAppElement('#root');
const ProductsPage = () => {

    const [listProducts, setListProducts] = useState([]);
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const fecthListProduct = async () => {
            try {
                const { data: listProduct } = await productApi.getAll();
                setListProducts(listProduct);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fecthListProduct();
    }, []);

    const onAddProduct = async (product) => {

        try {
            await productApi.add(product);
            setListProducts([
                ...listProducts,
                product
            ])
            alert('Thêm sản phẩm thành công !');
            setModal(false);
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
                const findIndexById = listProducts.findIndex(pro => pro.id === idProduct);
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

    const updateProduct = (idProduct) => {
        console.log(idProduct);

    }

    // redux
    const productList = useSelector(state=>state.product);
    console.log('product list ' , productList);

    return (

        <div className="px-32 mt-10">

            <button 
                onClick={() => { setModal(true) }}
                className="bg-blue-400 px-4 py-2 text-white"
            >
                Add Product 
            </button>

            <List listProducts={listProducts} removeProduct={removeProduct} updateProduct={updateProduct} />

            <Modal
                isOpen={modal}
            >
                <FormProduct onSubmit={onAddProduct} />
                <GrClose className="absolute top-3 right-3 text-2xl" onClick={() => { setModal(false) }} />
            </Modal>

        </div>
    )
}

export default ProductsPage
