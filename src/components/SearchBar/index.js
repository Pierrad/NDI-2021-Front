import React from 'react';

import * as SC from './styled';

const SearchBar = ({ className, onChange, value }) => {
  return (
    <SC.SearchBarContainer className={className}>
      <SC.SearchBarInput
        type="text"
        placeholder="Votre recherche..."
        onChange={onChange}
        value={value}
      />
    </SC.SearchBarContainer>
  );
}

export default SearchBar;