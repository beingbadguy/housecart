import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { RiFilePaperLine } from "react-icons/ri";

const Slider = () => {
  return (
    <div className="w-full bg-primary text-white flex-col gap-2  items-start justify-start md:flex-row flex md:items-center md:justify-between px-5 p-4  ">
      <div className="flex items-center space-x-1">
        <GoSearch />
        <p>Find your ideal property</p>
      </div>
      <div className="flex items-center space-x-1">
        <FaRegCalendarAlt />
        <p>Schedule a visit</p>
      </div>
      <div className="flex items-center space-x-1">
        <FaRegUser />
        <p>Contact the agent</p>
      </div>
      <div className="flex items-center space-x-1">
        <RiFilePaperLine />
        <p>Complete the paperwork</p>
      </div>
    </div>
  );
};

export default Slider;
