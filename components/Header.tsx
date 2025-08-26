"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { RiHomeSmile2Line, RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <RiHomeSmile2Line size={20} />
        <p className="">Comfea</p>
      </div>
      <div
        className={`absolute md:static  top-0 left-0 md:block transition-all duration-300 ease-in ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-0  h-screen w-full md:w-auto md:h-auto bg-primary`}
      >
        <ul
          className={` ${
            isMenuOpen ? " transition ease-in duration-500" : ""
          } flex-col p-3 md:p-0 gap-2 md:flex-row  flex md:space-x-4 md:justify-center md:items-center lg:gap-4`}
        >
          <div className="flex justify-between items-center md:hidden ">
            <div className="flex items-center space-x-1 py-2 ">
              <RiHomeSmile2Line size={20} />
              <p className="">Comfea</p>
            </div>
            <div>
              <IoMdClose size={20} onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>

          <hr className="border-gray-300 border md:hidden" />
          <li className="flex items-center space-x-1 gap-1 cursor-pointer hover:text-green-200 group">
            Buy{" "}
            <IoChevronDownOutline className="group-hover:rotate-180 transition-all duration-400 ease" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-green-200 group">
            Rent{" "}
            <IoChevronDownOutline className="group-hover:rotate-180 transition-all duration-400 ease" />
          </li>
          <li className="cursor-pointer hover:text-green-200">Sell</li>
          <li className="cursor-pointer hover:text-green-200">Contact</li>
          <li className="cursor-pointer hover:text-green-200">About</li>
          <hr className="border-gray-300 border md:hidden my-2 " />

          {/* <hr className="md:hidden" /> */}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <FiSearch size={20} />
        <FiUser
          size={20}
          className="cursor-pointer"
          onClick={() => {
            router.push("/auth/login");
          }}
        />
        <RiMenu3Fill
          size={20}
          className="block md:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
        {/* <button className=" border-1 border-white px-3  rounded">Log In</button> */}
      </div>
    </header>
  );
}
