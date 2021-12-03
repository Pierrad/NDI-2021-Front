import React from "react";
import * as SC from "./styled";

const ResultCard= ({ className, title, description, image, card, wrapper }) => {
   
    
    return (
          <SC.Card>
          <SC.Wrapper>
            <SC.Title>{title}</SC.Title>
            <SC.Description>{description}</SC.Description>
            <SC.Image src={image} />
          </SC.Wrapper>
          </SC.Card>

     
    );
  };
  
  export default ResultCard;