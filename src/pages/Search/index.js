import React, { useState } from 'react';

import * as SC from './styled';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Title>Je recherche...</SC.Title>
        <SC.Search onChange={handleChange} value={search} />
      </SC.Wrapper>
    </SC.Container>
  );
}

export default Search;