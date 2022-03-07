import { FILTER_MODAL } from "../Constants"

export const filterModal=(state)=>{
    return{
      type:FILTER_MODAL,
      payload:state,
    }
};