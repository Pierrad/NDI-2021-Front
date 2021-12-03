import styled from "styled-components";

export const Card = styled.div``

export const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.pureWhite};
  padding: 2rem;
  width: 20rem;
  flex-direction: row;
  border-radius: 0.5rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
      transform: translateY(-2px);
      box-shadow: rgba(84, 84, 84, 0.2) 0px 5px 30px;
  };
  @media (max-width: 768px) {
    width: 15rem;
  }
`

export const Right = styled.div`
  margin-left: 1rem;
`

export const Title = styled.div`
  font-size: 1rem;
`

export const Description = styled.div`
  font-size: 1rem;
`

export const Image = styled.img`
  width: 3rem;
  height: auto;
  border-radius: 0.2rem;
`

