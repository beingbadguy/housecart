import Marquee from "react-fast-marquee";
import { GoSearch } from "react-icons/go";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";

export default function HouseKartSteps() {
  return (
    <div className="bg-primary py-4">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex items-center space-x-2 mx-12 text-white">
          <GoSearch className="text-xl" />
          <p className="text-lg">Find your ideal property</p>
        </div>
        <div className="flex items-center space-x-2 mx-12 text-white">
          <FaRegCalendarAlt className="text-xl" />
          <p className="text-lg">Schedule a visit</p>
        </div>
        <div className="flex items-center space-x-2 mx-12 text-white">
          <FaRegUser className="text-xl" />
          <p className="text-lg">Contact the agent</p>
        </div>
        <div className="flex items-center space-x-2 mx-12 text-white">
          <RiFilePaperLine className="text-xl" />
          <p className="text-lg">Complete the paperwork</p>
        </div>
      </Marquee>
    </div>
  );
}
