import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import Index from "./route/Index";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
          <Index />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
