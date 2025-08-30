import React from "react";

const IconBox = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col items-center space-y-1 size-20 md:size-auto  max-w-[80px] text-center cursor-pointer group ">
      <div className="border-2 border-primary rounded p-3 ">{icon}</div>
      <p className="line-break text-center text-sm group-hover:text-primary transition-all duration-all ease-in-out">
        {title}
      </p>
    </div>
  );
};

export default IconBox;
