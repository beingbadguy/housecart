"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { PiPassword } from "react-icons/pi";

const SignupPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-[90vh] flex-col">
      <div className="absolute top-16 left-4 cursor-pointer flex items-center space-x-2 ">
        <h1 onClick={() => router.push("/")}>Home</h1>
        <span>/</span>
        <p className="text-primary">Signup</p>
      </div>
      <h1 className="text-3xl">Sign Up</h1>
      <p className="text-gray-400 my-1">
        Hi Welcome, Please enter your details
      </p>
      <form className="my-2 flex space-y-2 flex-col">
        <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2 lg:w-[400px] w-[300px] sm:w-[350px]">
          <div className="flex items-center w-full">
            <FiUser className="text-primary ml-2   text-xl" />
            <span className=" border-r size-4 border-gray-300" />
            <input
              type="text"
              placeholder="Full Name"
              className="border-none outline-none p-2 rounded-md w-full"
            />
          </div>
        </div>
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
            <PiPassword className="text-primary ml-2   text-xl " />
            <span className=" border-r size-4 border-gray-300" />

            <input
              type=""
              placeholder="Password"
              className="border-none outline-none p-2 rounded-md w-full"
            />
          </div>
        </div>

        <div className="flex items-center cursor-pointer rounded-md  space-x-2 lg:w-[400px] w-[300px] sm:w-[350px]">
          <button className="bg-primary cursor-pointer text-white w-full p-2 rounded-md">
            Signup
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
