
import { SET_PRODUCTS } from "./action"
const initialState = {
    products :[]
}

const productReduser = (state = initialState , action)=>{
switch (action.type) {
    case SET_PRODUCTS:
        return {
            ...state ,
            products : action.payload
        }
        

    default:
        return state
}
}

export default productReduser