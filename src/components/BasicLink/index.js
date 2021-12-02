import React from "react";
import { Link } from "react-router-dom";

const BasicLink = ({ children, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default BasicLink;