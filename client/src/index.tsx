import * as ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./components/Todolist";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
);
