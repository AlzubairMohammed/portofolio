import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
