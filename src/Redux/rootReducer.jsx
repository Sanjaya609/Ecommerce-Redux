import { combineReducers } from "redux";
import { cartdisplayReducer } from "./reducers/cartdisplayReducer";
import {cartproductReducer} from "./reducers/cartproductReducer";
import { carttotalReducer } from "./reducers/carttotalReducer";
import counterReducer from "./reducers/counterReducer";
import filtermodalReducer from "./reducers/filtermodalReducer";
import productdetailReducer from "./reducers/productdetailReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  filterModal:filtermodalReducer,
  cartDisplay:cartdisplayReducer,
  cartProduct:cartproductReducer,
  cartTotal:carttotalReducer,
  productDisplay:productdetailReducer,

});

export default rootReducer;