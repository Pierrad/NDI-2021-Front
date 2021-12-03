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
  & > div {
      margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    & > div {
      margin-bottom: 1rem;
    }
  }
`

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`