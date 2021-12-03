import styled from "styled-components";

export const Button = styled.button`
  background-color : ${props => props.isSelected ? props.theme.colors.darkBlue : 'transparent' };
  border: 1px solid ${props => props.theme.colors.darkBlue};
  color: ${props => props.isSelected ? props.theme.colors.pureWhite : props.theme.colors.pureBlack };
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.colors.lightBlue};
    cursor: pointer;
  }
`
