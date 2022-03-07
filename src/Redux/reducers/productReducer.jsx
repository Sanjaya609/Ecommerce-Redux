import { PRODUCT_LIST, PRODUCT_LIST_FETCHING, PRODUCT_LIST_SUCCESS ,FILTERED_PRODUCT} from "../Constants";

const initialState = {
  products: [],
  isLoading: false,
  filtered_products:[],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case FILTERED_PRODUCT:
      return {
        ...state,
        filtered_products: action.payload,
      }
    default:
      return state;
  }
};

export default productReducer;
