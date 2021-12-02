import React from "react";
import * as SC from "./styled";

const ToggleButton= ({ className, isSelected, onClick, label }) => {
   
    
    return (
      <SC.Button className={className} onClick={onClick} isSelected={isSelected}>{label}</SC.Button>
    );
  };
  
  export default ToggleButton;