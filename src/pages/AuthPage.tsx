import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthPage: React.FC = () => {
  const params = useParams();
  const history = useNavigate();
  console.log(params.authMethod);
  const [authMethod, setAuthMethod] = React.useState<string | undefined>(
    params.authMethod
  );
  console.log(authMethod);
  useEffect(() => {
    if (!params.authMethod) {
      console.log("no auth method");
      history("/auth/login");
    }
  }, []);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setAuthMethod(params.authMethod);
  }, [params.authMethod]);

  return (
    <section className="min-h-screen flex ">
      <form className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col justify-center items-center pb-12 px-2">
        <div className=" px-6 py-8 text-black w-full ">
          <div className="flex justify-around mb-8">
            <Link
              to="/auth/signup"
              className={`mb-8 text-4xl text-center abel ${
                authMethod === "signup"
                  ? "border-b-2 border-black text-black"
                  : "text-black/60 hover:text-black"
              } py-2 cursor-pointer`}
            >
              Sign up
            </Link>
            <Link
              to="/auth/login"
              className={`mb-8 text-4xl text-center abel ${
                authMethod === "login"
                  ? "border-b-2 border-black text-black"
                  : "text-black/60 hover:text-black"
              } py-2 cursor-pointer`}
            >
              Login
            </Link>
          </div>
          {authMethod === "signup" ? <Signup /> : <Login />}
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
