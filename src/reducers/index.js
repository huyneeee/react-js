import { combineReducers } from 'redux'
import blogReducer from './blogReducer';
import cartReducer from './cartReducer'



const rootReducer = combineReducers({
    cart : cartReducer,
    blog : blogReducer
});
export default rootReducer;