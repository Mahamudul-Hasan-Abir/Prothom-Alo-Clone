import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full lg:px-20 md:px-5 sm:px-5 px-2">
      {children}
    </div>
  );
};

export default Container;
