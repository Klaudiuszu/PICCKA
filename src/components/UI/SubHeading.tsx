import React from "react";

const SubHeading = ({ children, className = "" }) => {
  return <h3 className={`text-subheading font-semibold text-primary ${className}`}>{children}</h3>;
};

export default SubHeading;
