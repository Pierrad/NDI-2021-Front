import React, { useState } from 'react';
import Lottie from 'react-lottie'
import { useHistory } from "react-router-dom";


import * as SC from './styled';
import loadingAnimation from '../../assets/lottie/loading.json'


const Search = () => {
  const [search, setSearch] = useState('');
  const [isRescueSelected, setIsRescueSelected] = useState(false);
  const [isSaveSelected, setIsSaveSelected] = useState(false);
  const [isBoatSelected, setIsBoatSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      setIsSubmitting(true);
      const type = `${isRescueSelected ? 'secourist,' : ''}${isSaveSelected ? 'saved,' : ''}${isBoatSelected ? 'boat' : ''}`;
      setTimeout(() => {
        history.push(`/results/${search}/${type}`);
      }, 2000);
    } else {
      setErrors('Veuillez entrer un terme de recherche');
    }
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Card>
          <SC.Title>Je recherche...</SC.Title>
          <SC.Buttons>
            <SC.ToggleButtonC
              label={"Un sauveteur"}
              isSelected={isRescueSelected}
              onClick={() => setIsRescueSelected(!isRescueSelected)}
            />
            <SC.ToggleButtonC
              label={"Un sauvé"}
              isSelected={isSaveSelected}
              onClick={() => setIsSaveSelected(!isSaveSelected)}
            />
            <SC.ToggleButtonC
              label={"Un bateau"}
              isSelected={isBoatSelected}
              onClick={() => setIsBoatSelected(!isBoatSelected)}
            />
          </SC.Buttons>
          <SC.Search onChange={handleChange} value={search} />
          {errors && (
            <SC.Errors>{errors}</SC.Errors>
          )}
          <SC.SearchButtonC onClick={handleSubmit} isSubmiting={isSubmitting}>
            {!isSubmitting ? "Rechercher" : (
              <SC.Spinner>
                <Lottie options={loadingOptions}
                  height={20}
                  width={100}
                  isStopped={false}
                  isPaused={false}
                />
              </SC.Spinner>
            )}
          </SC.SearchButtonC>
        </SC.Card>
      </SC.Wrapper>
    </SC.Container>
  );
}

export default Search;