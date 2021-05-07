import React, { useEffect, useState } from 'react'
import productApi from '../api/productApi'


const productReducer = (state=[] , action )=>{
    switch (action.type) {
        case 'ADD_PRODUCT':{
            return state;
        }
        default:
            return state;
    }
}
export default productReducer;