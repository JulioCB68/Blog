import React, { useState } from 'react';

import { FiCloud } from 'react-icons/fi';
import { Nav, StyledBurger, Ul, StyledLink } from './styles';
import * as path from '../../utils/routes'


const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <Nav>
      <StyledBurger isNavExpanded={isNavExpanded} onClick={handleNavExpanded}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div className="logo">
        <FiCloud size={30}/>
      </div>
      <div className="logo">
        <FiCloud size={30}/>
      </div>
      <Ul isNavExpanded={isNavExpanded}>
        <StyledLink to={path.HOME}>Home</StyledLink>
        <StyledLink to={path.HOME}>About Us</StyledLink>
        <StyledLink to={path.HOME}>Contact Us</StyledLink>
        <StyledLink to={path.HOME}>Sign In</StyledLink>
        <StyledLink to={path.HOME}>Sign Up</StyledLink>
      </Ul>
    </Nav>
  );
}

export default Navbar;