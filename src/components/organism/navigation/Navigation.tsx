import React from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { NavigationButton } from "../../atom/buttons/NavigationButton";
import { NavigationEnum } from "../../../enum/NavigationEnum";

export const Navigation: React.FC = () => {
  return (
    <div className=" flex gap-4 flex-col h-full rounded w-fit pt-16 pl-6 pr-6 mt-2 bg-navigation text-white">
      <NavigationButton to={NavigationEnum.Home} icon={<IoHomeOutline className="cursor-pointer" />} />
      <NavigationButton to={NavigationEnum.Settings} icon={<IoSettingsOutline className="cursor-pointer" />} />
    </div>
  );
};
