import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AuthPage: React.FC = () => {
  const params = useParams();
  console.log(params.authMethod);
  const [authMethod, setAuthMethod] = React.useState<string | undefined>(
    params.authMethod
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailLogin, setEmailLogin] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");
  const [passwordConfirm, setPasswordConfim] = useState<string>("");
  const history = useNavigate();
  useEffect(() => {
    setAuthMethod(params.authMethod);
  }, [params.authMethod]);
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email: emailLogin,
        password: passwordLogin,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const signup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        name,
        email,
        password,
        passwordConfirm,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="min-h-screen flex ">
      <form className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col justify-center items-center pb-12 px-2">
        <div className=" px-6 py-8 text-black w-full ">
          <div className="flex justify-around mb-8">
            <a
              onClick={() => {
                history("/auth/signup");
              }}
              className={`mb-8 text-4xl text-center abel ${
                authMethod === "signup"
                  ? "border-b-2 border-black text-black"
                  : "text-black/60 hover:text-black"
              } py-2 cursor-pointer`}
            >
              Sign up
            </a>
            <a
              onClick={() => {
                history("/auth/login");
              }}
              className={`mb-8 text-4xl text-center abel ${
                authMethod === "login"
                  ? "border-b-2 border-black text-black"
                  : "text-black/60 hover:text-black"
              } py-2 cursor-pointer`}
            >
              Login
            </a>
          </div>
          {authMethod === "signup" ? (
            <>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  Name
                </label>
                <input
                  type="text"
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
                  required
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  E-mail
                </label>
                <input
                  type="email"
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  Password
                </label>
                <input
                  type="password"
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-8"
                  required
                  value={passwordConfirm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordConfim(e.target.value);
                  }}
                />
              </div>
              <button
                className={
                  "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                }
                onClick={(e: React.FormEvent) => {
                  e.preventDefault();
                  signup();
                }}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  Email
                </label>
                <input
                  type="text"
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
                  required
                  value={emailLogin}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmailLogin(e.target.value);
                  }}
                />
              </div>
              <div>
                <label className="text-black abel text-xl font-[500]">
                  Password
                </label>
                <input
                  className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
                  required
                  type="password"
                  value={passwordLogin}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordLogin(e.target.value);
                  }}
                />
              </div>
              <h3 className="text-center mb-8 text-black hover:text-blackish text-[18px] abel">
                forgot password?
              </h3>
              <button
                type="submit"
                className={
                  "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                }
                onClick={(e: React.FormEvent) => {
                  e.preventDefault();
                  login();
                }}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
