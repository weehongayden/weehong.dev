import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grow max-w-7xl mx-auto px-4 flex items-center sm:items-start sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
