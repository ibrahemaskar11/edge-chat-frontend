import React from "react";
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        {
          email,
        }
      );
      console.log(res);
      setMessage('Email sent');
      setError('')
      setTimeout(()=>{
        setMessage('')
      },5000)
      console.log(message)
    } catch (err: AxiosError<any> | any) {
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="w-full h-[100vh] py-24 flex flex-col">
      <form
        onSubmit={submitHandler}
        className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div className=" px-6 py-8  text-black w-full abel">
          <h1 className="mb-12 text-4xl text-center">Forgot Password</h1>
          {error && (
            <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
              {error}
            </p>
          )}
          {message && (
            <p className="text-center text-black w-full px-4 py-3 bg-green-200 mb-4 rounded">
              {message}
            </p>
          )}
          <div>
            <label htmlFor="" className="text-black abel text-xl font-[500]">
              E-mail
            </label>
            <input
              type="text"
              className="block border-b-2 border-blackish w-full outline-none py-2 px-3 mb-8"
              name="fullname"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className={
              "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
