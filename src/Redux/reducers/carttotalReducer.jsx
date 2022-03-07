import { TOTAL_PRICE } from "../Constants";
const initialState={
    total_price:0,
}
export const carttotalReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOTAL_PRICE:
            return{
                ...state,
                total_price:action.payload,
            }
        default:
            return state;
    }
}