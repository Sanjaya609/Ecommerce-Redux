import { CART_DISPLAY } from "../Constants"

export const cartDisplay=(state)=>{
    return{
      type:CART_DISPLAY,
      payload:state,
    }
};