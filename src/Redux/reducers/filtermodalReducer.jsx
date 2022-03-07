import { CART_DISPLAY, FILTER_MODAL } from "../Constants";

const initialState={
    display:false,
}

const filtermodalReducer=(state=initialState,action)=>{
    switch(action.type){
        case FILTER_MODAL:
            return {
                ...state,
                display:action.payload,
            }
        default:
            return state;
    }
};
export default filtermodalReducer;