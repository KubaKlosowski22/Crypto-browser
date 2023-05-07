import React from "react";
import { IoHomeOutline } from "react-icons/io5";

export const Navigation: React.FC = () => {
  return (
    <div className="h-full rounded w-fit pt-16 pl-6 pr-6 mt-2 bg-navigation text-white">
      <IoHomeOutline className="cursor-pointer" />
    </div>
  );
};
