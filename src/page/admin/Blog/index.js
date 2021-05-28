import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, removeBlog } from '../../../actions/blogAction'
import Loading from '../../../components/Loading'
import AddBlogPage from './AddBlogPage'
import ListBlog from './ListBlog'
const BlogAdminPage = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    const dispatch = useDispatch();

    const data = useSelector(state => state.blog.data);
    const loading = useSelector(state => state.blog.loading);
    const onHandelRemove = (id) => {
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa không ?');
        if(isConfirm){
            dispatch(removeBlog(id));
        }
    }
    const onHandleSubmit = (blog) => {
        if(dispatch(addBlog(blog))){
            alert('Thêm blog thành công!');
            setShowAddForm(false);
        }
   
    }
    if (showAddForm === true) {
        return (
            <AddBlogPage onHadleShowList={() => { setShowAddForm(false) }} onSubmit={onHandleSubmit} />
        )
    }
    else {
        return (
            <div>
                {
                    loading ?
                        <Loading />
                        :
                        (data && data.length > 0) ?
                            (<div >
                                <button
                                    className="px-3 py-2 bg-blue-400 text-white outline:none focus:outline-none m-3"
                                    onClick={() => { setShowAddForm(true) }}
                                >Add Blogs</button>
                                <ListBlog data={data} removeBlog={onHandelRemove} />
                            </div>)
                            :
                            <p>Data empty</p>
                }
            </div>
        )
    }

}

export default BlogAdminPage
