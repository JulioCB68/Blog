import React, { useState, KeyboardEvent } from 'react';
import { useNavigate } from "react-router-dom";

import { GoBold, GoSearch } from "react-icons/go";
import { Nav, StyledBurger, SearchInput, Ul, StyledLink } from './styles';
import * as path from '../../utils/routes'

const Navbar = () => {

  const navigate = useNavigate();

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [searchInputIsVisible, setSearchInputIsVisible] = useState(false)
  const [inputText, setInputText] = useState('')

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  const handleSearchIcon = () => {
    setSearchInputIsVisible(!searchInputIsVisible)
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && inputText !== '') {
      navigate(`/category/${inputText}`)
      setInputText('');
    }
  }


  return (
    <Nav isVisible={searchInputIsVisible}>
      <StyledBurger isNavExpanded={isNavExpanded} onClick={handleNavExpanded}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div className='LogoContainer' onClick={() => navigate("/")}>
        <GoBold size={30} className='Logo'/>
        MyBlog
      </div>
      <div className='SearchContainer'>
        <div className='SearchInput'>
          <GoSearch size={20} />
          <SearchInput
            type="text"
            placeholder="Search"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
      <GoSearch
        className="SearchIcon"
        size={30}
        onClick={handleSearchIcon}
      />
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