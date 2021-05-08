import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import productApi from '../../api/productApi'
import FormProduct from './FormProduct'
import List from './List'
import { GrClose } from 'react-icons/gr'
import EditProductPage from './EditProductPage'
import AddProductPage from './AddProductPage'
Modal.setAppElement('#root');
const ProductsPage = () => {

    const [listProducts, setListProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateProduct,setUpdateProduct] = useState();
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


    const onHadleShowEdit = (status,product)=>{
  
        setShowEditForm(status);
        setUpdateProduct(product);
    }
    const onUpdateProduct = async (product)=>{
        try {
            await productApi.update(product.id,product);

            const findIndexProduct = listProducts.findIndex(ele=>ele.id===product.id);
            
            const newListProducts = [ ...listProducts];
            newListProducts.splice(findIndexProduct,1,product);
            setListProducts(newListProducts);
            
            setShowEditForm(false);
            alert('UPDATE sản phẩm thành công !');
        } catch (error) {
            alert('UPDATE sản phẩm thất bại !')
        }

    }

    if(showAddForm===true){
        return (
            <AddProductPage onSubmit={onAddProduct} />
        )
    }else if(showEditForm===true){
        return (
            <EditProductPage product={updateProduct} onUpdate={onUpdateProduct} />
        )
    }else{
        return (
            <div className="px-32 mt-10">
            <button onClick={()=>{setShowAddForm(true)}}>Add Product</button>
            <List listProducts={listProducts} removeProduct={removeProduct} showEditForm={onHadleShowEdit} />
            </div>
        )
    }

}

export default ProductsPage
