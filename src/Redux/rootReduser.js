import { combineReducers } from "redux";
import productReduser from "./products/reduser";
import cartReduser from "./cart/reduser";

const rootReduser = combineReducers({
    product: productReduser,
    shoppingCart: cartReduser,
});

export default rootReduser;
