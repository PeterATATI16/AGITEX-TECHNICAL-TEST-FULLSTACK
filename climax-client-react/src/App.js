import "./App.css";
import AppRouter from "./config/router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
