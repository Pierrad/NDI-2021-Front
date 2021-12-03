import React from "react";

import * as SC from './styled';

const Burger = ({ open, setOpen }) => {
  return (
    <SC.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </SC.StyledBurger>
  )
}

export default Burger;