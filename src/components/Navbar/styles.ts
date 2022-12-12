import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  background: #E5E5E5;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  @media only screen and (min-width: 1024px) { 
    padding: 0 7rem;
  }
`
export const StyledBurger = styled.div<{ isNavExpanded: boolean }>`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isNavExpanded }) => isNavExpanded ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isNavExpanded }) => isNavExpanded ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isNavExpanded }) => isNavExpanded ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isNavExpanded }) => isNavExpanded ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ isNavExpanded }) => isNavExpanded ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Ul = styled.ul<{ isNavExpanded: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ isNavExpanded }) => isNavExpanded ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 18px 10px;

  &:hover {
    transition: 300ms ease-in-out;
    color: #3485FF;
  }
`;