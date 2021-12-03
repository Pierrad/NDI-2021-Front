import styled from "styled-components";

export const Button = styled.button`
  background-color : ${props =>  props.theme.colors.pureWhite};
  border: 1px solid ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.pureBlack};
  outline: none;
  padding: 15px 100px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
  overflow: hidden;
  &:hover{
      cursor: ${props => props.isSubmiting ? 'not-allowed' : 'cursor'};;
      background-color: ${props => props.isSubmiting ? 'none' : props.theme.colors.lightBlue};
  }
`