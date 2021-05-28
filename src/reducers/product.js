

const productReducer = (state=[] , action )=>{
    switch (action.type) {
        case 'ADD_PRODUCT':{
            console.log('Add_product');
            console.log(action.payload);
            return state;
        }
        default:
            return state;
    }
}
export default productReducer;