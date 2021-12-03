import React from "react";
import * as SC from "./styled";

const SearchButton= ({ className, onClick, children, isSubmiting }) => {
    return (
      <SC.Button className={className} onClick={onClick} isSubmiting={isSubmiting}>{children}</SC.Button>
    );
  };
  
  export default SearchButton;