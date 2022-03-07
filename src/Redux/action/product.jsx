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

export const filteredProduct=(ranges)=>{
  // console.log(filteredProducts);
  // console.log(filteredProducts.priceMin,"here");
  console.log(ranges.priceMin);
  let filteredProducts;
  if (ranges.priceMin===0&&ranges.priceMax===0&&ranges.filterCategory==='default'){
      filteredProducts=data;
  }else{
      filteredProducts=data.filter((product)=>{
          let price=parseInt(product.price.slice(1));
          let category=product.category[1];
          let valid=price>=ranges.priceMin && price<=ranges.priceMax || category=== ranges.filterCategory;
          console.log(ranges.priceMin,ranges.priceMax,ranges.filterCategory,price,valid);
          return valid;
      })  
  }
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
