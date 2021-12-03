import styled from "styled-components";

export const SearchBarContainer = styled.div``;

export const SearchBarInput = styled.input`
  border: 1px solid ${props => props.theme.colors.darkBlue};
  padding: 1.5rem;
  border-radius: 2rem;
  width: 30rem;
  font-size: 1.5rem;
  opacity: 0.8;
  @media (max-width: 768px) {
    width: 10rem;
    font-size: 1rem;
  }
`;