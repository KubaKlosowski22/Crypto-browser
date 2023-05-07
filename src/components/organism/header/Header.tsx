import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
};

export const Header: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className="h-12 w-full border-b b-navigation text-white">
      <div className=" flex items-center gap-4">
        {icon}
        <h1>{title}</h1>
      </div>
    </div>
  );
};
