import axios from "axios";
import { FILTERED_PRODUCT, PRODUCT_DETAIL, PRODUCT_LIST,PRODUCT_LIST_FETCHING,PRODUCT_LIST_SUCCESS } from "../Constants";

let response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product");
let data=response.data.data.product;
export const fetchProduct = () => async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_FETCHING,
    });
    if (response?.data?.data?.product) {
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }
  };

export const filteredProduct=(filteredProducts)=>{
    return {
        type:FILTERED_PRODUCT,
        payload:filteredProducts,
    }
};

export const productDetail=(product)=>{
  return{
    type:PRODUCT_DETAIL,
    payload:product,
  }
}
