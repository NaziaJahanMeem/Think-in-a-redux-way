import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

function nextTodosId(todos) {
  const maxId = todos.reduce((maxId, todo) => {
    return Math.max(maxId, todo.id), -1;
  });

  return maxId;
}
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodosId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item;
        } else {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      });
    case COLORSELECTED:
      const { todoId, color } = action.payload;

      return state.map((item) => {
        if (item.id !== todoId) {
          return item;
        } else {
          return {
            ...item,
            color: color,
          };
        }
      });
    case DELETED:
      return state.filter((item) => item.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.map((item) => ({ ...item, completed: false }));

    default:
      return state;
  }
};

export default todoReducer;
