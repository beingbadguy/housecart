import React from "react";

const IconBox = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col items-center space-y-1 max-w-[80px] text-center">
      <div className="border-2 border-primary rounded p-3 ">
        {icon}
      </div>
      <p className="line-break text-center text-sm">{title}</p>
    </div>
  );
};

export default IconBox;
