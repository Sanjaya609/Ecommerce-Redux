import { PRODUCT_DETAIL} from "../Constants";

const initialState={
    product_detail:[],
};

const productdetailReducer=(state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_DETAIL:
            return {
                product_detail:action.payload,
            }
        default:
            return state;
    }
};
export default productdetailReducer;