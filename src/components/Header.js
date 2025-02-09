import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  font-family: monospace;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
  };
`;

const Fader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: space-evenly;
  };
  flex-wrap: nowrap;
  
  &:hover {
    a {
      opacity: 0.5;
    }
  }
  a {
    &:hover {
      opacity: 1;
    }
  }
`;

const Burger = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin: 5px 10px;
  cursor: pointer;
  font-size: 1.25rem;

  :active {
    transform: scale(0.9, 0.9);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    white-space: nowrap;
    font-size: 1.25rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 388px) {
   flex-direction: column;
  };
`;

const HeaderElement = styled(Link)`
  color: ${({ active }) => (active ? 'red' : 'white')};
  font-weight: bold;
  text-decoration: none;
  cursor: crosshair;
  margin: 10px 30px;
  
  :active {
    transform: scale(0.9, 0.9);
  }
`;

export default function Header({ contactClick, projectsClick, burgerClick, cvClick, refHome, refQuotes, refCV }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: refHome },
      { id: "quotes", ref: refQuotes },
      { id: "cv", ref: refCV },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let closestSection = sections[0].id; // Default to first section

      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top >= -rect.height / 2 && rect.top < window.innerHeight / 2) {
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refHome, refQuotes, refCV]);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Fader>
          <Burger to='/' onClick={burgerClick}>
            <p>lorenz 🍔</p>
          </Burger>
          <Menu>
            <HeaderElement to='#quotes' onClick={projectsClick} active={activeSection === "quotes"}>
              <p> projects </p>
            </HeaderElement>
            <HeaderElement to='#cv' onClick={cvClick} active={activeSection === "cv"}>
              <p> cv </p>
            </HeaderElement>
            <HeaderElement to='#contact' onClick={contactClick} active={activeSection === "contact"}>
              <p> contact </p>
            </HeaderElement>
          </Menu>
        </Fader>
      </HeaderContainer>
    </HeaderWrap>
  );
}
