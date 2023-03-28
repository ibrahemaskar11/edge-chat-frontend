import React from "react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfim] = useState<string>("");

  const signup = async () => {
    try {
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
      history("/");
    } catch (err: AxiosError | any) {
      console.log(err);
      setError(err.response?.data.message);
    }
  };
  return (
    <>
      {error && (
        <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
          {error}
        </p>
      )}
      <div>
        <label className="text-black abel text-xl font-[500]">Name</label>
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
        <label className="text-black abel text-xl font-[500]">E-mail</label>
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
        <label className="text-black abel text-xl font-[500]">Password</label>
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
          className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
          required
          value={passwordConfirm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordConfim(e.target.value);
          }}
        />
      </div>
      <Link
        to={"/auth/login"}
        className="block text-center self-center mb-8 text-black hover:text-blackish text-[18px] abel"
      >
        already have an account?
      </Link>
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
  );
};

export default Signup;
