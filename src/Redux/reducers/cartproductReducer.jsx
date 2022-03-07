import { CART_PRODUCT,TOTAL_PRICE} from "../Constants";

const initialState={
    cart_products:[],
    total_price:0,
};

export const cartproductReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART_PRODUCT:
            return {
                ...state,
                cart_products:action.payload,
            }
        default:
            return state
    }
};