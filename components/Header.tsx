"use client";

import Link from "next/link";
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
    <header className=" text-black p-4 flex justify-between items-center z-[99999] relative border border-gray-200 bg-white">
      <Link
        className="flex items-center space-x-1 cursor-pointer text-primary hover:text-primary transition-all duration-300 ease-in"
        href={"/"}
      >
        <RiHomeSmile2Line size={20} />
        <p className="">Comfea</p>
      </Link>

      <div
        className={`absolute md:static  top-0 left-0 md:block transition-all duration-300 ease-in ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-0  h-screen w-full md:w-auto md:h-auto bg-white `}
      >
        <ul
          className={` ${
            isMenuOpen ? " transition ease-in duration-500" : ""
          } flex-col p-3 md:p-0 gap-2 md:flex-row  flex md:space-x-4 md:justify-center md:items-center lg:gap-4 `}
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
          <Link
            href={"/buy"}
            className="flex items-center space-x-1 gap-1 cursor-pointer hover:text-primary group"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy{" "}
            <IoChevronDownOutline className="group-hover:rotate-180 transition-all duration-400 ease" />
          </Link>
          <Link
            href={"/rent"}
            className="flex items-center gap-1 cursor-pointer hover:text-primary group"
            onClick={() => setIsMenuOpen(false)}
          >
            Rent{" "}
            <IoChevronDownOutline className="group-hover:rotate-180 transition-all duration-400 ease" />
          </Link>
          <Link
            href={"/sell"}
            className="flex items-center gap-1 cursor-pointer hover:text-primary group"
            onClick={() => setIsMenuOpen(false)}
          >
            Sell
            <IoChevronDownOutline className="group-hover:rotate-180 transition-all duration-400 ease" />
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href={"/about"}
            className="cursor-pointer hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <hr className="border-gray-300 border md:hidden my-2 " />
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <FiSearch
          size={20}
          className="cursor-pointer  transition-all duration-300 ease-in hover:text-primary "
        />
        <Link href={"/auth/login"}>
          <FiUser
            size={20}
            className="cursor-pointer  transition-all duration-300 ease-in hover:text-primary "
          />
        </Link>

        <RiMenu3Fill
          size={20}
          className="block md:hidden  transition-all duration-300 ease-in hover:text-primary cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
        {/* <button className=" border-1 border-white px-3  rounded">Log In</button> */}
      </div>
    </header>
  );
}
