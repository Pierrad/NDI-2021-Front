import React from "react";
import * as SC from "./styled";

const SearchButton= ({ className, onClick, label }) => {
   
    
    return (
      <SC.Button className={className} onClick={onClick}>{label}</SC.Button>
    );
  };
  
  export default SearchButton;