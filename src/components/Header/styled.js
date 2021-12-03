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
  width: 5rem;
  height: 4.5rem;
`

export const Title = styled(BasicLink)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 1rem;
  color: ${props => props.theme.colors.pureWhite };
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavItem = styled.div`
  margin-right: 2rem;
  cursor: pointer;

`

export const NavLink = styled(BasicLink)`
  text-decoration: none;
  border-bottom: ${props => props.actual ? `1px solid ${props.theme.colors.darkMarron}` : 'none'};
  color: ${props => props.theme.colors.pureWhite };
  &:hover {
    text-decoration: none;
    color: ${props => props.actual ? props.theme.colors.darkMarron : props.theme.colors.lightBlue };
  }

`
