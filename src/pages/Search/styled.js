import styled from 'styled-components';

import SearchBar from '../../components/SearchBar';
import ToggleButton from '../../components/ToggleButton';
import SearchButton from '../../components/SearchButton';

export const Container = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.pureWhite};
  padding: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  filter: drop-shadow(rgba(0,0,0,0.18) 0px 1.5rem 0.6rem);
  transition: all 0.2s ease 0s;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.darkMarron};
`

export const Buttons = styled.div`
  margin-bottom: 2rem;
  & > button {
    margin-right: 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > button {
      margin-bottom: 1rem;
    }
  }

`

export const ToggleButtonC = styled(ToggleButton)`
  width: 15rem;
`

export const Search = styled(SearchBar)`
  margin-bottom: 2rem;
`

export const Errors = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.red};
  margin-bottom: 2rem;
`

export const SearchButtonC = styled(SearchButton)``

export const Spinner = styled.div`

`