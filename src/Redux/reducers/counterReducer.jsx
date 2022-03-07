import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "../Constants";

const initialState = {
  count: 1000,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_NUMBER:
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
