import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginDummy from "./pages/LoginDummy";
import Auth from "./pages/AuthPage";
import Home from "./pages/Home";
import Preloader from "./components/UI/Preloader";
import { ChatState } from "./store/chatProvider";
import axios, { AxiosProgressEvent } from "axios";

function App() {
  const history = useNavigate();
  const { isLoading, setIsLoading, setUser, setIsLoggedIn } = ChatState();
  console.log(isLoading);
  useEffect(() => {
    const validate = async () => {
      setIsLoading(true);
      try {
        const res = await axios(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/users/validate/`,
          {
            withCredentials: true,
          }
        );
        const { data } = res.data;
        if (data) {
          setUser(data.user);
          setIsLoggedIn(true);
        } else {
          // history("/auth/login");
          setIsLoggedIn(false);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        console.log(err);
        setIsLoggedIn(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };
    validate();
  }, [history]);

  return (
    <>
      {isLoading && <Preloader loading={isLoading} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/" element={<Auth />} />
        <Route
          path="/auth/reset-password/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route path="/auth/forgot-password/" element={<ForgotPasswordPage />} />
        <Route path="/login-design" element={<LoginDummy />} />
      </Routes>
    </>
  );
}

export default App;
