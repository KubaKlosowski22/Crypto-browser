import React from "react";
import { Navigation } from "../organism/navigation/Navigation";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-primary h-screen w-screen overflow-hidden px-4 py-6 flex gap-8">
      <Navigation />
      {children}
    </div>
  );
};
