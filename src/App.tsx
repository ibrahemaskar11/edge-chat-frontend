import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./pages/AuthPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/:authMethod" element={<Auth />} />
      <Route path="/auth/" element={<Auth />} />
      <Route
        path="/auth/reset-password/:resetToken"
        element={<ResetPasswordPage />}
      />
      <Route path="/auth/forgot-password/" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
