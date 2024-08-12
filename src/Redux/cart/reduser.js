import { ADD_TO_CART } from "./action type";

const initialState = {
    cart:[]
}

const cartReduser =(state = initialState , action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart : [...state.cart ,{...action.payload , qty : 1}]
            }
            
    
        default:
            return state
    }
}

export default cartReduser;