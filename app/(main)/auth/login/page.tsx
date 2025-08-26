"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-[90vh] flex-col ">
      <div className="absolute top-16 left-4 cursor-pointer flex items-center space-x-2 ">
        <h1 onClick={() => router.push("/")}>Home</h1>
        <span>/</span>
        <p className="text-primary">Login</p>
      </div>
      <h1 className="text-3xl">Login</h1>
      <p className="text-gray-400 my-1">
        Welcome back, Please enter your details
      </p>
      <form className="my-2 flex space-y-2 flex-col">
        <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2 lg:w-[400px] w-[300px] sm:w-[350px]">
          <div className="flex items-center w-full">
            <MdOutlineMail className="text-primary ml-2   text-xl" />
            <span className=" border-r size-4 border-gray-300" />
            <input
              type="email"
              placeholder="Email"
              className="border-none outline-none p-2 rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2 lg:w-[400px] w-[300px] sm:w-[350px]">
          <div className="flex items-center w-full">
            <PiPassword className="text-primary ml-2   text-xl" />
            <span className=" border-r size-4 border-gray-300" />

            <input
              type=""
              placeholder="Password"
              className="border-none outline-none p-2 rounded-md w-full"
            />
          </div>
        </div>
        <div>
          <p
            className="text-sm text-primary cursor-pointer"
            onClick={() => router.push("/auth/forget-password")}
          >
            Forgot Password?
          </p>
        </div>
        <div className="flex items-center cursor-pointer rounded-md  space-x-2 lg:w-[400px] w-[300px] sm:w-[350px]">
          <button className="bg-primary cursor-pointer text-white w-full p-2 rounded-md">
            Login
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => router.push("/auth/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
