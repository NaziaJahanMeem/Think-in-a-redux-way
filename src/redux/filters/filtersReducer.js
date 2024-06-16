import initialState from "./initialState";
import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((item) => item !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
