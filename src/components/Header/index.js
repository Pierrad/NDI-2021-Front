import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CorsaireImg from "../../assets/img/corsaires.png";
import SauveteurImg from "../../assets/img/sauveteurs.png";

import * as SC from "./styled";

const Header = () => {
  const [actual, setActual] = useState("/");
  const location = useLocation();
  
  useEffect(() => {
    setActual(location.pathname.split("/")[1]);
  }, [location.pathname])

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Left>
          <SC.Logo src={CorsaireImg} />
          <SC.Logo src={SauveteurImg} />
          <SC.Title to="/home">{"Les Sauveteurs du dunkerquois"}</SC.Title>
        </SC.Left>
        <SC.Nav>
          <SC.NavItem>
            <SC.NavLink actual={actual === "search"}  to="search">{"Recherche"}</SC.NavLink>
          </SC.NavItem>
          <SC.NavItem>
            <SC.NavLink actual={actual === "article"} to="article">{"Article"}</SC.NavLink>
          </SC.NavItem>
          <SC.NavItem>
            <SC.NavLink actual={actual === "community"} to="community">{"Communaut√©"}</SC.NavLink>
          </SC.NavItem>
        </SC.Nav>
      </SC.Wrapper>
    </SC.Container>
  );
}

export default Header;