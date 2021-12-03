import React, { useState, useEffect } from "react";
import ResultCard from "../../components/ResultCard";
import { useParams } from "react-router"; 
import Lottie from 'react-lottie';

import searchAnimation from '../../assets/lottie/search.json';

import { getSearchResult } from './api'

import * as SC from './styled';

const Result = () => {
  const {search, type} = useParams();
  const [result, setResult] = useState([]);


  useEffect(() => {
    let types;
    if (type && type.length > 0) {
      types = type.split(',');
    } else {
      types = []
    }
    console.log(getSearchResult(search, types));
  }, [search, type]);

  const searchOptions = {
    loop: true,
    autoplay: true,
    animationData: searchAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <SC.Wrapper>
        <SC.Cards>
          {result && result.length > 0 && result.map((item, index) => (
            <ResultCard title={item.title} description={item.description} image="//unsplash.it/64/64"/>
          ))}
          {result && result.length === 0 && (
            <SC.Spinner>
              <Lottie options={searchOptions}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
            </SC.Spinner>
          )}
        </SC.Cards>
      </SC.Wrapper>
  </div>
  );
}

export default Result;