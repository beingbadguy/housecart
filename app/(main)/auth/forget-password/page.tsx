"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineMail } from "react-icons/md";

const ForgetPasswordPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-[90vh] flex-col">
      <div className="absolute top-16 left-4 cursor-pointer flex items-center space-x-2 ">
        <h1 onClick={() => router.push("/")}>Home</h1>
        <span>/</span>
        <p className="text-primary">Forget Password</p>
      </div>
      <h1 className="text-3xl">Forget Password</h1>
      <p className="text-gray-400 my-1 text-center w-[300px] lg:w-[400px]">
        Please enter your email to receive a link to create a new password via
        email
      </p>
      <form className="my-2 flex space-y-2 flex-col">
        <div className="flex items-center border border-gray-300 rounded-md p-1 space-x-2 lg:w-[400px] w-[300px]">
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

        <div className="flex items-center cursor-pointer rounded-md  space-x-2 lg:w-[400px] w-[300px]">
          <button className="bg-primary cursor-pointer text-white w-full p-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordPage;
