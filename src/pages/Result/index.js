import React from "react";
import ResultCard from "../../components/ResultCard";

import * as SC from './styled';

const Result = () => {
  return (
    <div>
      <SC.Wrapper>
        <SC.Cards>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
          <ResultCard title="Title" description="Description" image="//unsplash.it/64/64"/>
        </SC.Cards>
      </SC.Wrapper>
  </div>
  );
}

export default Result;