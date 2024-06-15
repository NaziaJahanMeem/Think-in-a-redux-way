import Book from "./component/book";
import Table from "./component/table";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Book />
      <Table />
    </Provider>
  );
}

export default App;
