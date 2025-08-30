"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState<string>("Buy");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const options = ["Buy", "Rent", "Sell"];

  const iconsWithBox = [
    {
      icon: <BsHouseLock size={24} className="text-primary" />,
      title: "House",
    },
    {
      icon: <FaBuildingCircleCheck size={24} className="text-primary" />,
      title: "Apartment",
    },
    {
      icon: <RiLandscapeAiLine size={24} className="text-primary" />,
      title: "Land",
    },
    {
      icon: <MdOutlineBusiness size={24} className="text-primary" />,
      title: "Offices",
    },
    {
      icon: <MdOutlineAddBusiness size={24} className="text-primary" />,
      title: "Warehouse",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex  items-center justify-center flex-col h-[90vh] md:h-[84vh] mx-4">
      <h1 className=" text-primary text-3xl md:text-4xl lg:text-5xl text-center text-black heading">
        Find your dream house with your love
      </h1>
      <p className=" text-md md:text-xl text-center my-2 text-gray-400">
        Everything you need in one place
      </p>
      <div className="flex items-center border border-gray-300 rounded-md  mt-4 w-full max-w-3xl mx-4 cursor-pointer">
        <div
          className="bg-primary text-white outline-none min-w-[90px]  rounded p-2 m-1 flex items-center relative"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {selectedOption && <span className="px-2">{selectedOption}</span>}
          <div
            ref={ref}
            className={` ${
              showOptions ? "flex" : "hidden"
            }  bg-white text-black rounded-md flex-col shadow-lg z-10 absolute top-full left-0 w-full mt-1`}
          >
            {options &&
              options.map((option, index) => (
                <span
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setShowOptions(false);
                  }}
                  className={`px-2 ${
                    selectedOption == option ? "text-primary" : ""
                  }  ${
                    index !== options.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {option}
                </span>
              ))}
          </div>

          <MdKeyboardArrowDown />
        </div>

        <input
          type="text"
          className="w-full outline-none px-2"
          placeholder="Search apartment HouseKart"
        />
        <div className="bg-primary text-white p-3 m-1 rounded-md cursor-pointer">
          <FiSearch />
        </div>
      </div>
      <div className="flex flex-wrap items-start gap-3 justify-center space-x-4 mt-4">
        {iconsWithBox.map((item) => (
          <IconBox
            key={item.title.split(" ").join("").toLowerCase()}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
