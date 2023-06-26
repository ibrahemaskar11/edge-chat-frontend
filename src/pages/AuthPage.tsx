import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/edge.png";
import loginPattern from "../assets/pattern.png";
import axios from "axios";
import { AxiosError } from "axios";
import useForm from "../hooks/useForm";
import Preloader from "../components/UI/Preloader";
import CircularLoading from "../components/UI/CircularLoading";
const Auth = () => {
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  const history = useNavigate();
  const params = useParams();
  const [authMethod, setAuthMethod] = React.useState<string | undefined>(
    params.authMethod
  );
  const {
    value: email,
    error: emailError,
    handleChange: setEmail,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      return true;
    },
    error: "Please enter a valid email address",
  });
  const {
    value: emailLogin,
    error: emailLoginError,
    handleChange: setEmailLogin,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      return true;
    },
    error: "Please enter a valid email address",
  });
  const {
    value: password,
    error: passwordError,
    handleChange: setPassword,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^.{6,16}$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Password must be between 6 and 16 characters",
  });
  const {
    value: passwordLogin,
    error: passwordLoginError,
    handleChange: setPasswordLogin,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^(?=.{6,16}$)/;
      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Password must be between 6 and 16 characters",
  });
  const {
    value: name,
    error: nameError,
    handleChange: setName,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^[a-zA-Z ]{2,30}$/;
      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Please enter a valid name",
  });
  const {
    value: passwordConfirm,
    error: passwordConfirmError,
    handleChange: setPasswordConfirm,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      if (!passwordError && value.length > 0 && value !== password)
        return false;
      else return true;
    },
    error: "Passwords do not match",
  });
  const [error, setError] = useState<string>("");

  const loginHandler = async () => {
    // e.preventDefault();
    setLoading(true);
    try {
      if (emailLoginError || passwordLoginError) return;
      console.log(emailLogin, passwordLogin);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/login`,
        {
          email: emailLogin,
          password: passwordLogin,
        }
      );
      console.log(res);
      setLoading(false);
      history("/");
    } catch (err: AxiosError | any) {
      console.log(err.response?.data?.message || "Something went wrong");
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  console.log(error);
  const signupHandler = async () => {
    // e.preventDefault();
    setLoading(true);
    try {
      if (nameError || emailError || passwordError || passwordConfirmError)
        return;
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/signup`,
        {
          name,
          email,
          password,
          passwordConfirm,
        }
      );
      console.log(res);
      setLoading(false);
      history("/");
    } catch (err: AxiosError | any) {
      console.log(err);
      console.log(err.response?.data?.message || "Something went wrong");
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  useEffect(() => {
    if (!params.authMethod) {
      history("/auth/login");
    }
  }, []);
  useEffect(() => {
    setAuthMethod(params.authMethod);
  }, [params.authMethod]);
  return (
    <>
      {loading && <CircularLoading panner="Loading..." />}
      {!loading && (
        <div className="hidden lg:flex w-full min-h-screen justify-center items-center overflow-hidden bg-gray-100 Abel">
          <div className="mx-auto rounded-lg lg:max-w-[980px] xl:max-w-[1024px] flex justify-center items-center">
            <div className="w-[50%] bg-[#0E0B0E] h-[40rem] rounded-l-lg relative flex flex-col items-center justify-between z-10">
              <div className="w-full h-[40rem] absolute  z-1  grayscale opacity-[0.3]">
                <img src={loginPattern} alt="" className="h-full w-full" />
              </div>
              <div className="text-white  w-full flex flex-col  text-3xl ">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col px-8 py-[3.8rem]">
                    {/* <h1 className="Poiret text-5xl mb-6">edge.</h1> */}
                    <img src={loginImg} alt="" className="w-[8rem] mb-2" />
                    <h3 className=" text-base w-[80%] text-gray-100 tracking-[0.1rem]">
                      Connecting You to the World, anytime, anywhere!
                    </h3>
                  </div>
                  <div className="pt-32 z-10">
                    <div
                      className={`w-[9.4rem] ${
                        authMethod === "login"
                          ? "bg-white text-black btn-effect font-semibold "
                          : " text-white bg-[#0E0B0E]"
                      } text-center  rounded-l-[2rem] py-4   z-100 mb-[2rem]`}
                    >
                      <span></span>
                      <span></span>
                      <button
                        className="block w-full bg-transparent border-none outline-none cursor-pointer"
                        onClick={() => {
                          history("/auth/login");
                        }}
                      >
                        login
                      </button>
                    </div>
                    <div
                      className={`w-[9.4rem] ${
                        authMethod === "signup"
                          ? "bg-white text-black btn-effect font-semibold"
                          : " text-white bg-[#0E0B0E]"
                      } text-center rounded-l-[2rem] py-4 z-100 tracking-[10rem]`}
                    >
                      <span></span>
                      <span></span>
                      <button
                        className="block w-full bg-transparent border-none outline-none cursor-pointer"
                        onClick={() => {
                          history("/auth/signup");
                        }}
                      >
                        sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <img
              src={loginPattern}
              alt=""
              className="h-full w-full absolute opacity-[0.15] img-pattern rounded-[1rem]"
            /> */}
              <h3
                className="w-[60%] opacity-100 text-white text-center tracking-wider"
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "20%",
                }}
              >
                Edge is a fast, secure, and customizable chat app for you to
                stay connected with friends and family.
              </h3>

              {/* <h1
            className=" z-10 text-white text-[3.5rem] tracking-[0.3rem] Poiret z-1 self-center mb-16 "
            
          >
            edge
          </h1> */}
            </div>
            <div className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg ">
              {authMethod === "login" && (
                <div className="w-full h-full flex flex-col gap-3 items-start justify-start text-start py-24">
                  <h1 className="text-4xl text-black font-bold tracking-[0.225rem] text-start mb-2 Abel ">
                    Login
                  </h1>
                  <h3 className="text-lg text-blackish Abel mb-2  tracking-wide">
                    Welcome back! please enter your details!
                  </h3>
                  <form className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="email"
                      className="text-md text-black font-semibold "
                    >
                      Email
                    </label>
                    <div>
                      <input
                        className={` ${
                          emailLoginError ? "border-red-600" : "border-black"
                        } border-b-2 w-full py-1 px-4 mb-1  text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                        type="text"
                        placeholder="Enter your email"
                        value={emailLogin}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmailLogin(e.target.value)
                        }
                      />
                      <h5 className="h-3 text-red-600 font-semibold px-4 mb-1">
                        {emailLoginError}
                      </h5>
                    </div>
                    <label
                      htmlFor="password"
                      className="text-md text-black font-semibold "
                    >
                      Password
                    </label>
                    <div>
                      <input
                        className={` ${
                          passwordLoginError ? "border-red-600" : "border-black"
                        } border-b-2 w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
                        type="password"
                        placeholder="********"
                        value={passwordLogin}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPasswordLogin(e.target.value)
                        }
                      />
                      <h5 className="h-3 text-red-600 text-md font-semibold px-4 mb-1">
                        {passwordLoginError}
                      </h5>
                    </div>
                    <div className="w-full flex justify-end items-center mb-2">
                      <div className=" ">
                        <Link
                          to={"/"}
                          className="justify-self-center text-center pb-2 text-black text-md font-semibold hover:text-blackish"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    {error && (
                      <div className="flex justify-center items-center w-full">
                        <h5 className=" text-md text-center text-red-600 font-bold px-4 mb-1">
                          {error}
                        </h5>
                      </div>
                    )}
                    <button
                      onClick={(e: React.FormEvent) => {
                        e.preventDefault();
                        loginHandler();
                      }}
                      className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg py-3 text-white font-[500] text-lg tracking-[0.15rem] mb-2 ${
                        error ? "bg-red-600" : ""
                      }`}
                    >
                      Sign in
                    </button>
                  </form>

                  <h3 className="text-[#707785] flex w-full justify-center gap-1 text-lg">
                    Don't have an account?
                    <span>
                      <Link
                        to={"/auth/signup"}
                        className="text-black font-[600] hover:text-blackish"
                      >
                        sign up
                      </Link>
                    </span>
                  </h3>
                </div>
              )}
              {authMethod === "signup" && (
                <div className="w-full h-full flex flex-col gap-0 items-start justify-start text-start py-12">
                  <h1 className="text-4xl text-black font-bold tracking-[0.2rem] text-start mb-2 Abel ">
                    Sign up
                  </h1>
                  <h3 className="text-lg text-blackish Abel mb-2  tracking-wide">
                    Join us today! Fill in your details to create an account.
                  </h3>
                  <form className="flex flex-col gap-1 w-full">
                    <label
                      htmlFor="name"
                      className="text-md text-black font-semibold "
                    >
                      Name
                    </label>
                    <div>
                      <input
                        className={` ${
                          nameError ? "border-red-600" : "border-black"
                        } border-b-2  w-full py-1 px-4 mb-1 text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setName(e.target.value)
                        }
                      />
                      <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
                        {nameError}
                      </h5>
                    </div>
                    <label
                      htmlFor="email"
                      className="text-md text-black font-semibold "
                    >
                      Email
                    </label>
                    <div>
                      <input
                        className={`${
                          emailError ? "border-red-600" : "border-black"
                        } border-b-2  w-full py-1 px-4 mb-1 text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                      />
                      <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
                        {emailError}
                      </h5>
                    </div>
                    <label
                      htmlFor="password"
                      className="text-md text-black font-semibold "
                    >
                      Password
                    </label>
                    <div>
                      <input
                        className={`  ${
                          passwordError ? "border-red-600" : "border-black"
                        } border-b-2 border-black w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.target.value)
                        }
                      />
                      <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
                        {passwordError}
                      </h5>
                    </div>
                    <label
                      htmlFor="email"
                      className="text-md text-black font-semibold "
                    >
                      Confirm Password
                    </label>
                    <div>
                      <input
                        className={`  ${
                          passwordConfirmError
                            ? "border-red-600"
                            : "border-black"
                        } border-b-2 border-black w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
                        type="password"
                        placeholder="********"
                        value={passwordConfirm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPasswordConfirm(e.target.value)
                        }
                      />
                      <h5
                        className={`h-3 text-sm text-red-600 font-semibold px-4 ${
                          error ? "mb-0" : "mb-3"
                        }`}
                      >
                        {passwordConfirmError}
                      </h5>
                    </div>
                    {error && (
                      <div className="flex justify-center items-center w-full">
                        <h5 className="text-md text-center text-red-600 font-bold px-4 mb-1">
                          {error}
                        </h5>
                      </div>
                    )}
                    <button
                      onClick={(e: React.FormEvent) => {
                        e.preventDefault();
                        signupHandler();
                      }}
                      className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg py-3 text-white font-[500] text-lg tracking-[0.15rem] mb-1 ${
                        error ? "bg-red-600 hover:bg-red-500" : ""
                      } `}
                    >
                      Sign up
                    </button>
                  </form>

                  <h3 className="text-[#707785] flex w-full justify-center gap-1 text-lg">
                    Already has an account?
                    <span>
                      <Link
                        to={"/auth/login"}
                        className="text-black font-[600] hover:text-blackish"
                      >
                        sign in
                      </Link>
                    </span>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <section className="lg:hidden min-h-screen flex ">
        <form className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col justify-center items-center pb-12 px-2">
          {/* <h1 className=" text-4xl ">edge</h1> */}
          <div className=" px-6 py-2 text-black w-full ">
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
            {authMethod === "signup" ? (
              <>
                {error && (
                  <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
                    {error}
                  </p>
                )}
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      nameError ? "border-red-600" : ""
                    }`}
                    required
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-1 mb-2">
                    {nameError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      emailError ? "border-red-600" : ""
                    }`}
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-1 mb-2">
                    {emailError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      passwordError ? "border-red-600" : ""
                    }`}
                    required
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-[0.7rem] text-red-600 font-semibold px-1 mb-2">
                    {passwordError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      passwordConfirmError ? "border-red-600" : ""
                    }`}
                    required
                    value={passwordConfirm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPasswordConfirm(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-2">
                    {passwordConfirmError}
                  </h5>
                </div>

                <button
                  className={
                    "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                  }
                  onClick={(e: React.FormEvent) => {
                    e.preventDefault();
                    signupHandler();
                  }}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                {error && (
                  <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
                    {error}
                  </p>
                )}
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      emailLoginError ? "border-red-600" : ""
                    }`}
                    required
                    value={emailLogin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmailLogin(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-3">
                    {emailLoginError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Password
                  </label>
                  <input
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      passwordLoginError ? "border-red-600" : ""
                    }`}
                    required
                    type="password"
                    value={passwordLogin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPasswordLogin(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
                    {passwordLoginError}
                  </h5>
                </div>
                <Link
                  to={"/auth/forgot-password"}
                  className="text-center block self-center mb-4 text-black hover:text-blackish text-[18px] abel"
                >
                  forgot password?
                </Link>
                <button
                  type="submit"
                  className={
                    "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                  }
                  onClick={(e: React.FormEvent) => {
                    e.preventDefault();
                    loginHandler();
                  }}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Auth;
