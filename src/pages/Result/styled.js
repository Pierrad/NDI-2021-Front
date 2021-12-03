import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  & > div {
      margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    & > div {
      margin-bottom: 1rem;
    }
  }
`

