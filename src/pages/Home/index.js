import React from "react";
import ResultCard from "../../components/ResultCard";
import SearchButton from "../../components/SearchButton";

import ToggleButton from "../../components/ToggleButton";

import * as SC from './styled';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/*<ToggleButton isSelected={true} label="click"/>*/}
      {/*<SearchButton label="click"/>*/}
      <ResultCard title="Title" description="Description" image="Image"/>
      <ResultCard title="Title" description="Description" image="Image"/>
      <ResultCard title="Title" description="Description" image="Image"/>
    </div>
  );
}

export default Home;