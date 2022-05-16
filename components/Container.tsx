import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grow max-w-7xl mx-auto px-4 pt-8 pb-20 flex items-center sm:items-start sm:px-6 lg:pt-16">
      <div className="max-w-3xl mx-auto relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Container;
