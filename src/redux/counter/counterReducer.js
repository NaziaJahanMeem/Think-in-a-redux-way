import { DECREMENT, INCREMENT } from "./actionTypes";

const initialValue = {
  value: 0,
};
const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
