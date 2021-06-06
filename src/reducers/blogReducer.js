const initailState = {
    data: null,
    loading:true
}
const blogReducer = (state = initailState, action) => {
    switch (action.type) {
        case 'FETCH_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading:false
            }
        case 'ADD_BLOG' : 
            const dataAdd = [...state.data,action.payload];
            return {
                data:dataAdd,
                loading:false
            }
        case 'REMOVE_BLOG' :    
            const dataRemove = state.data.filter(blog=>blog._id!==action.payload);
            return {
                ...state,
                data:dataRemove,
                loading:false
            }
        default:
            return state;
    }
}
export default blogReducer;