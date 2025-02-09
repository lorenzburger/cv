import styled from 'styled-components'

import {
Link
} from "react-router-dom";


const HeaderWrap = styled.div`
  font-family: monospace;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
  };
  flex-wrap: nowrap;
  
`

const Fader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
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
`

const Burger = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin: 5px 10px;
  cursor: pointer;
  font-size: 1.25rem; /* Smaller font size */

  :active {
    transform: scale(0.9, 0.9);
  }

  @media (max-width: 600px) {
    margin: 10px 50px 0px -30px;
    padding-left: 10%;
    font-size: 1.5rem; /* Make burger slightly larger on mobile */
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderElement = styled(Link)`
  display: flex;
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: crosshair;
  margin: 10px 30px 10px 30px;
  @media (max-width: 600px) {
    margin: 10px 30px 10px 30px;
  };
  :active {
    transform: scale(0.9, 0.9);
  }
`

export default function Header ({contactClick, projectsClick, burgerClick, cvClick}) {
    return (
      <HeaderWrap>
      
      <HeaderContainer>
      <Fader>
        <Burger to='/' onClick={burgerClick}>
          <p>lorenz 🍔</p>
        </Burger>
        <Menu>
        
            <HeaderElement  to='/' onClick={projectsClick}>
              <p> projects </p>
            </HeaderElement>
            <HeaderElement to='/' onClick={cvClick}>
              <p> cv </p>
            </HeaderElement>
            <HeaderElement to='/' onClick={contactClick}>
              <p> contact </p>
            </HeaderElement>
          
        </Menu>
        </Fader>
      </HeaderContainer>
    </HeaderWrap>
    )
  }
