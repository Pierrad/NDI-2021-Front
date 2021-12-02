import React from "react";

import CorsaireImg from "../../assets/img/corsaires.png";
import SauveteurImg from "../../assets/img/sauveteurs.png";

import * as SC from "./styled";

const Header = ({ actual }) => {


  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Left>
          <SC.Logo src={CorsaireImg} />
          <SC.Logo src={SauveteurImg} />
          <SC.Title>{"Les Sauveteurs du dunkerquois"}</SC.Title>
        </SC.Left>
        <SC.Nav>
          <SC.NavItem>
            <SC.NavLink actual={actual==="search"}  to="search">{"Recherche"}</SC.NavLink>
          </SC.NavItem>
          <SC.NavItem>
            <SC.NavLink actual={actual==="article"} to="article">{"Article"}</SC.NavLink>
          </SC.NavItem>
          <SC.NavItem>
            <SC.NavLink actual={actual==="community"} to="community">{"Communauté"}</SC.NavLink>
          </SC.NavItem>
        </SC.Nav>
      </SC.Wrapper>
    </SC.Container>
  );
}

export default Header;