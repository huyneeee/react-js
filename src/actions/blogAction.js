import blogApi from '../api/blogApi';
export const fetchData = () => async (dispatch) =>{
    try{
        dispatch({
            type:'FETCH_LOADING'
        })
        const { data : blogs } = await blogApi.getAll()
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: blogs
        });
    }catch(error){
        console.log(error);
    }
   
}
export const addBlog = (blog)=>async (dispatch)=>{
    try{
        await blogApi.add(blog);
        dispatch({
            type : 'ADD_BLOG',
            payload:blog
        })
    }catch(error){
        console.log(error);
    }
   
}
export const removeBlog = (id) => async (dispatch)=>{
    try{
        await blogApi.remove(id);
        dispatch({
            type : 'REMOVE_BLOG',
            payload:id
        })
    }catch(error){
        console.log(error);
    }
}