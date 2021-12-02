import React from "react";

import ToggleButton from "../../components/ToggleButton";

import * as SC from './styled';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ToggleButton isSelected={true} label="click"/>
    </div>
  );
}

export default Home;