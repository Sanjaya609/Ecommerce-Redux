import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "../Constants";

export const increment = (number) => {

  return {
    type: INCREMENT_NUMBER,
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_NUMBER,
    payload: 2,
  };
};
