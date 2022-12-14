import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav<{ isVisible: boolean }>`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .LogoContainer {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    color: ${(props) => props.theme.title};
  }
  
  .Logo {
    background: #4B5563;
    border-radius: .25rem;
    color: ${(props) => props.theme.title};
    margin: 0 .25rem 0 0;
  }

  .SearchContainer {
      display: ${props => props.isVisible ? 'flex' : 'none'};
      width: 50%;
      border: 1px solid ${(props) => props.theme.title};
      border-radius: 1rem;
      padding: .5rem 1rem .5rem 1rem;
  }

  .SearchIcon {
    display: ${props => props.isVisible ? 'none' : 'flex'};
    color: ${(props) => props.theme.title};
  }

  .SearchInput {
      display: flex;
      width: 100%;
      color: ${(props) => props.theme.title};
  }
  
  @media only screen and (min-width: 1024px) { 
    .SearchIcon {
      display: none;
    }

    .SearchContainer {
      width: 30%;
      display: flex;
    }
  }

  @media only screen and (min-width: 1500px) { 
    padding: 0 20rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0 0 0 .75rem;
  background: transparent;
  color: ${(props) => props.theme.title};

  ::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

export const StyledBurger = styled.div<{ isNavExpanded: boolean }>`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isNavExpanded }) => isNavExpanded ? '#CCCCCC' : '#FFFFFF'};
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

  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.background};
    padding: 3rem .75rem 0;
    position: fixed;
    top: 0;
    left: ${({ isNavExpanded }) => isNavExpanded ? '0' : '-32rem'};
    height: 100vh;
    width: 250px;
    transition: all 0.3s ease-in-out;
    li {
      color: ${(props) => props.theme.title};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.title};
  text-decoration: none;
  padding: 18px 10px;

  &:hover {
    transition: 300ms ease-in-out;
    color: #3485FF;
  }
`;