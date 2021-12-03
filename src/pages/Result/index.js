import React, { useState, useEffect, useMemo } from "react";
import ResultCard from "../../components/ResultCard";
import { useParams } from "react-router"; 
import Lottie from 'react-lottie';

import searchAnimation from '../../assets/lottie/search.json';


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

    async function fetchMyAPI() {
      const dataTypes = {}
      types.forEach(type => {
        if (type.length > 0) {
          dataTypes[type] = search
        }
      })
    
      if (types.length === 0) {
        dataTypes.secourist = search
        dataTypes.saved = search
        dataTypes.boat = search
      }
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...dataTypes 
         })
      };

      let response = await fetch(`${process.env.REACT_APP_API_URL}/rescues/precise`, requestOptions)
      let data = await response.json()
      setResult(data?.data)
    }

    fetchMyAPI()
  }, [search, type]);

  const searchOptions = {
    loop: true,
    autoplay: true,
    animationData: searchAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const renderResult = useMemo(() => {
    return (
      result && result.length > 0 && result.map((item, index) => (
        <ResultCard title={item.title} description={item.story} image="//unsplash.it/64/64"/>
      ))
    )
  }, [result])


  return (
    <div>
      <SC.Wrapper>
        <SC.Cards>
          {renderResult}
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