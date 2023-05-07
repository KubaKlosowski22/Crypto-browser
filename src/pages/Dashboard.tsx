import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Header } from "../components/organism/header/Header";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Header title="Dashboard" icon={<IoHomeOutline />} />
    </>
  );
};
