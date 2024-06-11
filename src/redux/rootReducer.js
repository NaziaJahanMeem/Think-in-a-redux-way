import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/counterReducer";

export const rootReducer = {
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
};
