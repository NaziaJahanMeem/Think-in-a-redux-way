import { combineReducers } from "redux";
import { todoReducer } from "./todos/todosReducer";
import { filtersReducer } from "./filters/filtersReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
