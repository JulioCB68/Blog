import React, { useState } from 'react';

import { FiPlus, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Nav, StyledBurger, Ul, StyledLink } from './styles';
import * as path from '../../utils/routes'


const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <Nav>
      <div className="logo">
        NavBar
      </div>
      <StyledBurger isNavExpanded={isNavExpanded} onClick={handleNavExpanded}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul isNavExpanded={isNavExpanded}>
        <StyledLink to={path.HOME}>Home</StyledLink>
        <StyledLink to={path.HOME}>About Us</StyledLink>
        <StyledLink to={path.HOME}>Contact Us</StyledLink>
        <StyledLink to={path.HOME}>Sign In</StyledLink>
        <StyledLink to={path.HOME}>Sign Up</StyledLink>
      </Ul>
    </Nav>
    // <Container toggle={navToggled}>
    //   <AddPostButton onClick={handleNavToggled}><FiPlus size={16} /></AddPostButton>
    //   <Wrapper toggle={navToggled}>
    //     <StyledLink to={path.HOME}> Home </StyledLink>
    //     <StyledLink to={path.HOME}> Home </StyledLink>
    //     <StyledLink to={path.HOME}> Home </StyledLink>
    //   </Wrapper>
    // </Container>
  );
}

export default Navbar;