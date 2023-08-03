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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChatState } from "../store/chatProvider";
import errorImg from "../assets/error.png";

const Auth: React.FC = () => {
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { setIsLoading, isLoggedIn } = ChatState();
  const history = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      history("/");
    }
  }, [isLoggedIn]);
  const params = useParams();
  const [authMethod, setAuthMethod] = React.useState<string>("login");
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

  const loginHandler = async () => {
    // e.preventDefault();
    try {
      if (emailLoginError || passwordLoginError) return;
      setLoading(true);
      console.log(emailLogin, passwordLogin);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/login`,
        {
          email: emailLogin,
          password: passwordLogin,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setLoading(false);
      setSuccess("Login successful");
      setTimeout(() => {
        history("/");
      }, 1500);
    } catch (err: AxiosError | any) {
      console.log(err.response?.data?.message || "Something went wrong");
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
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
      setSuccess("Login successful");
      setTimeout(() => {
        history("/");
        setLoading(true);
      }, 1500);
    } catch (err: AxiosError | any) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);
  return (
    <>
      {error && (
        <div
          className={`error-panner bg-red-500  error-panner rounded-lg mt-4  text-center text-white abel text-xl flex justify-between items-center px-4 gap-2`}
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              className="fill-[#fff]"
              width="24"
              height="24"
              focusable="false"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth="0.5"
              aria-hidden="true"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <h3 className="h-full text-[16px] font-semibold">{error}</h3>
          </div>
          <button
            onClick={() => {
              setError("");
            }}
          >
            <svg
              width="24"
              height="24"
              fill="#fff"
              className="justify-self-end"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      )}
      {success && (
        <div
          className={`error-panner bg-green-500 mt-4 error-panner rounded-lg  text-center text-white abel text-xl flex justify-between items-center px-4 gap-2`}
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
            </svg>

            <h3 className="h-full text-[16px] font-semibold">{success}</h3>
          </div>
          <button>
            <svg
              width="24"
              height="24"
              fill="#fff"
              className="justify-self-end"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      )}
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
                        setError("");
                        setAuthMethod("login");
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
                        setError("");
                        setAuthMethod("signup");
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
              Edge is a fast, secure, and customizable chat app for you to stay
              connected with friends and family.
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
                  {/* {error && (
                    <div className="flex justify-center items-center w-full">
                      <h5 className=" text-md text-center text-red-600 font-bold px-4 mb-1">
                        {error}
                      </h5>
                    </div>
                  )} */}
                  <button
                    onClick={(e: React.FormEvent) => {
                      e.preventDefault();
                      loginHandler();
                    }}
                    className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg h-[3.25rem] text-white font-[500] text-lg tracking-[0.15rem] mb-2 ${
                      loading ? "bg-mostlyblack" : ""
                    }`}
                  >
                    {!loading ? "sign in" : <CircularLoading button={true} />}
                  </button>
                </form>

                {/* <h3 className="text-[#707785] flex w-full justify-center gap-1 text-lg">
                  Don't have an account?
                  <span>
                    <Link
                      to={"/auth/signup"}
                      className="text-black font-[600] hover:text-blackish"
                    >
                      sign up
                    </Link>
                  </span>
                </h3> */}
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
                        passwordConfirmError ? "border-red-600" : "border-black"
                      } border-b-2 border-black w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
                      type="password"
                      placeholder="********"
                      value={passwordConfirm}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPasswordConfirm(e.target.value)
                      }
                    />
                    <h5
                      className={`h-3 text-sm text-red-600 font-semibold px-4 mb-3`}
                    >
                      {passwordConfirmError}
                    </h5>
                  </div>
                  {/* {error && (
                    <div className="flex justify-center items-center w-full">
                      <h5 className="text-md text-center text-red-600 font-bold px-4 mb-1">
                        {error}
                      </h5>
                    </div>
                  )} */}
                  <button
                    onClick={(e: React.FormEvent) => {
                      e.preventDefault();
                      signupHandler();
                    }}
                    className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg h-[3.25rem] text-white font-[500] text-lg tracking-[0.15rem] mb-1 ${
                      loading ? "bg-mostlyblack" : ""
                    }  `}
                  >
                    {loading ? <CircularLoading button={true} /> : "sign up"}
                  </button>
                </form>

                {/* <h3 className="text-[#707785] flex w-full justify-center gap-1 text-lg">
                  Already has an account?
                  <span>
                    <Link
                      to={"/auth/login"}
                      className="text-black font-[600] hover:text-blackish"
                    >
                      sign in
                    </Link>
                  </span>
                </h3> */}
              </div>
            )}
          </div>
        </div>
      </div>
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
