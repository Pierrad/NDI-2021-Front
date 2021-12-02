import styled from 'styled-components';

import SearchBar from '../../components/SearchBar';

export const Container = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.darkMarron};
`

export const Search = styled(SearchBar)`
  
`