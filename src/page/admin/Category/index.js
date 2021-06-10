import React, { useEffect, useState } from 'react'
import categoryApi from '../../../api/categoryApi'
import AddCategoryPage from './AddCategoryPage'
import EditProductPage from './EditCategoryPage'
import List from './List'
import Loading from '../../../components/Loading';
const CategoryPage = () => {

    const [listCategories, setListCategories] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateCategory, setUpdateCategory] = useState();
    const [loading, setLoading] = useState(true);
    
    const { user } = JSON.parse(localStorage.getItem('user'));
    // get category api
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const { data: category } = await categoryApi.getAll();
                setListCategories(category);
                setLoading(false);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCategory();
    }, []);
    //remove category
    const removeCategory = async (id) => {
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if (isConfirm) {
            try {
                await categoryApi.remove(id,user._id);
                const findIndexById = listCategories.findIndex(cate => cate._id === id);
                alert('Xóa danh mục thành công !');
                if (findIndexById !== -1) {
                    const newListCategories = [...listCategories];
                    newListCategories.splice(findIndexById, 1);
                    setListCategories(newListCategories);
                }
            } catch (error) {
                alert(error.response.data.error);
            }
        }

    }
    //add category
    const onAddCategory = async (category) => {
        try {
            const { data: categoryFake } = await categoryApi.add(category,user._id);
            setListCategories([
                ...listCategories,
                categoryFake
            ])
            setShowAddForm(false);
            alert('Thêm danh mục thành công !');
        } catch (error) {
            alert(error.response.data.error);
        }
    }
    //show list
    const onHadleShowList = (status) => {
        setShowAddForm(status);
        setShowEditForm(status);
    }
    //show edit
    const onHandleShowEdit = (status, cate) => {
        setShowEditForm(status);
        setUpdateCategory(cate);
    }
    //edit
    const onHandleUpdate = async (category, id) => {

        try {
            const { data: categoryFake } = await categoryApi.update(id, category,user._id);

            const findIndexProduct = listCategories.findIndex(ele => ele._id === id);

            const newListCategories = [...listCategories];
            newListCategories.splice(findIndexProduct, 1, categoryFake);
            setListCategories(newListCategories);

            setShowEditForm(false);
            alert('Update danh mục thành công !');
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    if (showAddForm === true) {
        return (
            <AddCategoryPage onSubmit={onAddCategory} onHadleShowList={onHadleShowList} />
        )
    }
    else if (showEditForm === true) {
        return (
            <EditProductPage category={updateCategory} onUpdate={onHandleUpdate} onHadleShowList={onHadleShowList} />
        )
    } else {
        return (
            <>
                {loading ? (<Loading />)
                    : (
                        < >
                            {user.role===1 && (<button className="px-3 py-2 bg-blue-400 text-white outline:none focus:outline-none m-3" onClick={() => setShowAddForm(true)}  >Add Category</button>)} 
                            <List listCategories={listCategories} removeCategory={removeCategory} showEditForm={onHandleShowEdit} user={user} />

                        </>
                    )
                }
            </>
        )
    }
}

export default CategoryPage
