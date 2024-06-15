import { BOOK, DELETE } from "./actionTypes";

const initialValue = [];
const bookReducer = (state = initialValue, action) => {
  switch (action.type) {
    case BOOK:
      const newId = state?.length ? state[state.length - 1].id + 1 : 1;
      if (state.length === 3) {
        return state;
      } else {
        return [
          ...state,
          {
            id: newId,
            ...action.payload,
          },
        ];
      }
    case DELETE:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
