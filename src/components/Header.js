import styled from 'styled-components'
import { Link } from "react-router-dom"

const HeaderWrap = styled.div`
  font-family: monospace;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-left: 5px; /* Add some padding */
  padding-right: 5px; /* Add some padding */
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
  };
`

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
      opacity: 0.3;
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
  cursor: crosshair;
  font-size: 1.25rem;

  :active {
    transform: scale(0.9, 0.9);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0; /* Remove default paragraph margin */
    white-space: nowrap; /* Prevent line breaks */
    font-size: 1.25rem;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 388px) {
   flex-direction: column;
  };
`

const HeaderElement = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: crosshair;
  margin: 10px 30px;
  
  :active {
    transform: scale(0.9, 0.9);
  }
`

export default function Header({ contactClick, projectsClick, burgerClick, cvClick }) {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Fader>
          <Burger to='/' onClick={burgerClick}>
            <p>lorenz 🍔</p>
          </Burger>
          <Menu>
            <HeaderElement to='#quotes' onClick={projectsClick}>
              <p> projects </p>
            </HeaderElement>
            <HeaderElement to='#cv' onClick={cvClick}>
              <p> cv </p>
            </HeaderElement>
            <HeaderElement to='#contact' onClick={contactClick}>
              <p> contact </p>
            </HeaderElement>
          </Menu>
        </Fader>
      </HeaderContainer>
    </HeaderWrap>
  );
}
