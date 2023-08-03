import React from "react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import CircularLoading from "../components/UI/CircularLoading";
import { useNavigate, useParams } from "react-router";
const ResetPasswordPage = () => {
  const history = useNavigate();
  const { resetToken } = useParams();
  console.log(resetToken);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfim] = useState<string>("");
  // const loadingPanner: JSX.Element = <CircularLoading panner="Loading" />;
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(password, passwordConfirm);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/reset-password/${resetToken}`,
        {
          password,
          passwordConfirm,
        }
      );
      console.log(res);
      setLoading(false);
      history("/");
    } catch (err: AxiosError | any) {
      // console.log(err);
      setError(err.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      {/* {loading && !error && loadingPanner} */}
      {!loading && (
        <div className="w-full h-[100vh] py-24 flex flex-col">
          <form
            className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
            onSubmit={onSubmitHandler}
          >
            <div className=" px-6 py-8  text-black w-full abel">
              <h1 className="mb-12 text-4xl text-center">Forgot Password</h1>
              {error && (
                <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
                  {error}
                </p>
              )}
              <div>
                <label
                  htmlFor=""
                  className="text-black abel text-xl font-[500]"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block border-b-2 border-blackish w-full outline-none py-2 px-3 mb-8"
                  name="fullname"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-black abel text-xl font-[500]"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block border-b-2 border-blackish w-full outline-none py-2 px-3 mb-8"
                  name="fullname"
                  required
                  value={passwordConfirm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordConfim(e.target.value);
                  }}
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
      )}
    </>
  );
};

export default ResetPasswordPage;
