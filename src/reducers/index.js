import { combineReducers } from 'redux'
import blogReducer from './blogReducer';
import productReducer from './product'



const rootReducer = combineReducers({
    product : productReducer,
    blog : blogReducer
});
export default rootReducer;