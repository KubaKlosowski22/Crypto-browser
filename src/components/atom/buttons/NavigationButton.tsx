import React from "react";
import { Link } from "react-router-dom";
import { NavigationEnum } from "../../../enum/NavigationEnum";

type Props = {
  to: NavigationEnum;
  icon: React.ReactNode;
};

export const NavigationButton: React.FC<Props> = ({ to, icon }) => {
  return <Link to={to}>{icon}</Link>;
};
