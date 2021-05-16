import React , { useState , useEffect} from 'react'
import categoryApi from '../../api/categoryApi'
import List from './List'
import AddCategoryPage from './AddCategoryPage'
import EditProductPage from './EditCategoryPage'
import Navigation from '../../components/Layout/Navigation'
const CategoryPage = () => {

    const [listCategories , setListCategories ] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [updateCategory,setUpdateCategory] = useState();
    // get category api
    useEffect(()=>{
        const fetchCategory = async ()=>{
            try{
                const { data : category } = await categoryApi.getAll();
                setListCategories(category);
            }catch(error){
                console.log("Failed to get data", error);
            }
        }
        fetchCategory();
    },[]);
    //remove category
    const removeCategory = async(id)=>{
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if(isConfirm){
            try{
                categoryApi.remove(id);
                alert('Xóa danh mục thành công !');
                const findIndexById = listCategories.findIndex(cate => cate.id === id);
                if (findIndexById !== -1) {
                    const newListCategories = [...listCategories];
                    newListCategories.splice(findIndexById, 1);
                    setListCategories(newListCategories);
                }
            }catch(error){
                alert("Failed to remove category!")
            }
        }

    }
    //add category
    const onAddCategory = async(category)=>{
        try {
            await categoryApi.add(category);
            setListCategories([
                ...listCategories,
                category
            ])
            setShowAddForm(false);
            alert('Thêm danh mục thành công !');
        } catch (error) {
            alert('Thêm danh mục thất bại !')
        }
    }
    //show list
    const onHadleShowList =(status)=>{
        setShowAddForm(status)
    }
    //show edit
    const onHandleShowEdit =(status,cate)=>{
        setShowEditForm(status);
        setUpdateCategory(cate);
    }
    //edit
    const onHandleUpdate = async(category)=>{
        try {
            await categoryApi.update(category.id,category);

            const findIndexProduct = listCategories.findIndex(ele=>ele.id===category.id);
            
            const newListCategories = [ ...listCategories];
            newListCategories.splice(findIndexProduct,1,category);
            setListCategories(newListCategories);
            
            setShowEditForm(false);
            alert('Update danh mục thành công !');
        } catch (error) {
            alert('Upadte danh mục thất bại !')
        }
    }
    if(showAddForm===true){
        return (
            <AddCategoryPage onSubmit={onAddCategory} onHadleShowList={onHadleShowList} />
        )
    }
    else if(showEditForm===true){
        return (
            <EditProductPage category={updateCategory} onUpdate={onHandleUpdate} />
        )
    }else{
        return (
            <div className="px-32 mt-10">
                <Navigation />
                <button className="px-3 py-2 bg-blue-400 text-white outline:none focus:outline-none" onClick={()=>setShowAddForm(true)}  >Add Category</button>
                <List listCategories={listCategories} removeCategory={removeCategory} showEditForm={onHandleShowEdit} />
            </div>
        )
    }
}

export default CategoryPage
