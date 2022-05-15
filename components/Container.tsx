import React from "react";

const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return <div className={`my-10 ${classNames}`}>{children}</div>;
};

export default Container;
