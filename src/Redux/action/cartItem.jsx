import { CART_PRODUCT,TOTAL_PRICE } from "../Constants";

export const cartItem=(cart_products)=>{
    return {
        type:CART_PRODUCT,
        payload:cart_products,
    }
};
export const cartTotal=(added)=>{
    //console.log(added);
    return{
            type: TOTAL_PRICE,
            payload:added,
    }
}