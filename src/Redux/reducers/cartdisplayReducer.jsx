
import { CART_DISPLAY } from "../Constants";

const initialState={
    display:false,
};

export const cartdisplayReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART_DISPLAY:
            return {
                ...state,
                display:action.payload,
            }
        default:
            return state;
    }
};