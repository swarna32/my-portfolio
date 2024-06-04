import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../ThemeContext"; // Import useTheme hook

const Header = () => {
  const { darkMode, toggleTheme } = useTheme(); // Access darkMode state and toggleTheme function
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapse

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <HeaderContainer darkMode={darkMode}>
      <HeaderContent>
        <Nav>
          <Logo to="/">Swarna Das</Logo>
          <ToggleNavbar onClick={toggleNavbar}>
            {isCollapsed ? "☰" : "✖"}
          </ToggleNavbar>
          <RightContent isCollapsed={isCollapsed}>
            <LogoCollapsed to="/">Swarna Das</LogoCollapsed>
            <Menu>
              <MenuItem to="/">Home</MenuItem>
              <MenuItem to="/about">About Me</MenuItem>
              <MenuItem to="/skills">Skills</MenuItem>
              <MenuItem to="/papers">Papers</MenuItem>
              <MenuItem to="/projects">Projects</MenuItem>
              <MenuItem to="/contact">Contact</MenuItem>
            </Menu>
            <ToggleTheme onClick={toggleTheme}>
              {darkMode ? "🌙" : "☀️"}
            </ToggleTheme>
          </RightContent>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#00aaff" : "#00aaff")};
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoCollapsed = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#00aaff" : "#00aaff")};
  text-decoration: none;
  margin-bottom: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const ToggleNavbar = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    display: ${(props) => (props.isCollapsed ? "none" : "flex")};
  }
`;

const Menu = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const MenuItem = styled(Link)`
  margin: 0 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  &:hover {
    color: #00aaff;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const ToggleTheme = styled.div`
  cursor: pointer;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
