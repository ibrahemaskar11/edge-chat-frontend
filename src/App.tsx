import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./pages/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/:authMethod" element={<Auth />} />
    </Routes>
  );
}

export default App;
