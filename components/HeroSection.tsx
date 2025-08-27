"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdOutlineAddBusiness,
  MdOutlineBusiness,
} from "react-icons/md";
import IconBox from "./IconBox";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { BsHouse, BsHouseLock } from "react-icons/bs";
import { RiLandscapeAiLine } from "react-icons/ri";

const HeroSection = () => {
  const options = ["Buy", "Rent", "Sell"];
  return (
    <div className="flex  items-center justify-center flex-col h-[90vh] md:h-[84vh] mx-4">
      <h1 className=" text-4xl md:text-5xl text-center text-black heading">
        Find your dream house with your love
      </h1>
      <p className=" text-md md:text-xl text-center my-1 text-gray-400">
        Everything you need in one place
      </p>
      <div className="flex items-center border border-gray-300 rounded-md  mt-4 w-full max-w-3xl mx-4">
        <div className="bg-primary text-white outline-none  rounded p-2 m-1 flex items-center">
          <select className=" appearance-none  outline-none text-white">
            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-white text-black"
              >
                {option}
              </option>
            ))}
          </select>
          <MdKeyboardArrowDown />
        </div>

        <input
          type="text"
          className="w-full outline-none px-2"
          placeholder="Search apartment Comfea"
        />
        <div className="bg-primary text-white p-3 m-1 rounded-md cursor-pointer">
          <FiSearch />
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-3 justify-center space-x-4 mt-4">
        {/* <IconBox
          icon={<IoMdCheckmark size={24} className="text-primary" />}
          title="Verified"
        /> */}
        <IconBox
          icon={<BsHouseLock size={24} className="text-primary" />}
          title="New House"
        />
        <IconBox
          icon={<BsHouse size={24} className="text-primary" />}
          title="Second House"
        />
        <IconBox
          icon={<FaBuildingCircleCheck size={24} className="text-primary" />}
          title="New Apartment"
        />
        <IconBox
          icon={<RiLandscapeAiLine size={24} className="text-primary" />}
          title="Land"
        />
        <IconBox
          icon={<MdOutlineBusiness size={24} className="text-primary" />}
          title="Business Place"
        />
        <IconBox
          icon={<MdOutlineAddBusiness size={24} className="text-primary" />}
          title="Warehouse"
        />
      </div>
    </div>
  );
};

export default HeroSection;
