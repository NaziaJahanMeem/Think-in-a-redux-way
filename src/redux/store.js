import { createStore } from "redux";
import bookReducer from "./book/bookReducer";

export const store = createStore(bookReducer);
