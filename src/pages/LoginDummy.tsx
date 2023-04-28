import React from "react";
import classes from "./LoginDummy.module.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const LoginDummy = () => {
  return (
    <div
      className={`w-100 relative min-h-screen flex justify-center items-center overflow-hidden bg-gray-100`}
    >
      <div className="bg-white rounded-lg w-[70vw] h-[80vh] flex justify-center items-center">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="flex justify-start items-start flex-col text-start gap-2">
            <h1 className="text-4xl text-[#12172A] font-semibold text-start mb-2">
              Welcome back
            </h1>
            <h3 className="text-xl text-[#87888b] mb-4">
              Welcome back! please enter your details!
            </h3>
            <label
              htmlFor="email"
              className="text-md text-[#454952] font-semibold mb-2"
            >
              Email
            </label>
            <input
              className="rounded-xl border w-full py-3 px-4  text-md outline-none placeholder:text-[#B6B7BD] placeholder:text-md placeholder:text-semibold"
              type="text"
              placeholder="Enter your email"
            />
            <label
              htmlFor="email"
              className="text-md text-[#454952] font-semibold mb-2"
            >
              Password
            </label>
            <input
              className="rounded-xl border w-full py-3 px-4 text-[#454952] placeholder:text-[#B6B7BD] placeholder:text-md placeholder:text-semibold mb-2 "
              type="password"
              placeholder="********"
            />
            <div className="flex justify-between items-center w-full px-2 mb-2">
              <div className="flex gap-2 justify-center items-center mb-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 color-[#7F56DA] cursor-pointer"
                  style={{ accentColor: "#7F56DA" }}
                />
                <label className="block self-center  text-md text-[#454952] font-semibold">
                  Remember me
                </label>
              </div>
              <div>
                <Link to={"/"} className="text-[#7F56DA] font-semibold text-md">
                  Forgot password
                </Link>
              </div>
            </div>
            <button className="w-full bg-[#7F56DA] rounded-lg py-3 text-white font-semibold text-md mb-2">
              Sign in
            </button>
            <h3 className="text-[#707785] flex w-full justify-center gap-1">
              Don't have an account?
              <span>
                <Link to={"/"} className="text-[#7F56DA] font-semibold text-md">
                  sign up
                </Link>
              </span>
            </h3>
          </div>
        </div>
        {/* input */}

        <div className="h-full w-full flex justify-center items-center bg-gray-200 relative flex-col">
          <div className={`${classes.circle}`}></div>
          <div
            className={` flex justify-center items-center border-1 border-[#7F56DA] ${classes["blurred-container"]}`}
          >
            <div className={`${classes["blurred-circle"]}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDummy;
