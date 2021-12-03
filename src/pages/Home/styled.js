import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: auto;
  background-color:wdhite;
  width: 65vw;
  height: 75vh;
  flex-direction: column;
`

export const Titre = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.pureWhite};
  margin: 0 auto;
  font-family: 'sans-serif';
  font-variant: small-caps;
`


export const Slogan = styled.p`
  margin-top: 2rem;
  padding: 3% 3%;
  text-align:center;
  font-size:1.25rem;  
  color: ${props => props.theme.colors.pureWhite}; 
`

export const Statistics = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  text-align:center;
  font-weight:650;
  color: ${props => props.theme.colors.pureWhite};
`

export const Quote = styled.p`
  &:before{
    content: '“ ';
  }
  &:after{
    content: ' ”';
  }
  text-align:center;
  font-size: 1rem;
  font-style:italic;
  margin-top: 2.5em;
  color: white;
  font-weight:bold;
  margin-bottom: 2rem;
`