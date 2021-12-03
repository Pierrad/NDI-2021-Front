import React from "react";
import * as SC from "./styled";

const ResultCard= ({ className, title, description, image, onClick, id }) => {
  
    return (
      <SC.Card id={id} className={className} onClick={onClick}>
        <SC.Wrapper>
          <SC.Image src={image} />
          <SC.Right>
            <SC.Title>{title}</SC.Title>
            <SC.Description>{description}</SC.Description>
          </SC.Right>
        </SC.Wrapper>
      </SC.Card>
    );
  };
  
  export default ResultCard;