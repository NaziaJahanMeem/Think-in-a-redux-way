import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";
import HooksCounter from "./components/HooksCounter";
import DynamicHooksCounter from "./components/DynamicHookCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <HooksCounter />
        <DynamicHooksCounter />
      </div>
    </Provider>
  );
}

export default App;
