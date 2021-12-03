import styled from "styled-components";

export const Button = styled.button`
background-color : ${props => props.isSelected ? props.theme.colors.pureBlack : props.theme.colors.pureWhite };
  border: none;
  color: white;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  

  &:hover {
    text-decoration: none;
    background-color: #379683;
    cursor: pointer;

}




`
