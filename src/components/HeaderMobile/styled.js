import styled from "styled-components";


import BasicLink from "../BasicLink";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  width: 2rem;
  height: 1.5rem;
`

export const Title = styled(BasicLink)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
  color: ${props => props.theme.colors.darkMarron };
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const BurgerButton = styled.button``

export const MenuC = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.pureWhite };
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
`

export const NavItem = styled.div`
  margin-right: 2rem;
  cursor: pointer;
  z-index: 100;

`

export const NavLink = styled(BasicLink)`
  font-size: 1.5rem;
  text-decoration: none;
  border-bottom: ${props => props.actual ? `1px solid ${props.theme.colors.darkMarron}` : 'none'};
  color: ${props => props.theme.colors.darkMarron };
  margin-top: 1rem;
  &:hover {
    text-decoration: none;
    color: ${props => props.actual ? props.theme.colors.darkMarron : props.theme.colors.lightBlue };
  }

`
