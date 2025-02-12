import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  0% { transform: translateY(50px); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
`;

const bounceHigher = keyframes`
  0% { transform: translateY(50px); }
  50% { transform: translateY(-60px); }
  100% { transform: translateY(0px); }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const FooterWrapper = styled.div`
  font-family: monospace;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  color: lime;
`;


const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: black;
  opacity: 0;
  z-index: -1;
`;

const Fader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  width: 80%;
  &:hover a {
    opacity: 0.3;
  }
  a:hover {
    opacity: 1;
    cursor: crosshair;
  }
  pointer-events: ${(props) => (props.bump ? `auto` : `none`)};
`;

const Bubble = styled.p`
  opacity: ${(props) => (props.fade ? 0.8 : 0)};
  pointer-events: ${(props) => (props.fade ? `auto` : `none`)};
  animation: ${(props) =>
    props.fade ? css`${fadeInOut} 6.5s normal forwards ease-in-out` : null};
  position: absolute;
  background: #8efa00;
  border-radius: 0.6em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(165px);
  right: 50%;
  top: -30px;
  width: 330px;
  height: 18px;
  font-size: 12px;
  color: black;

  @media (max-width: 600px) {
    top: 5%;
    font-size: 10px;
    width: 280px;
    transform: translateX(140px);
  }
`;

const FooterElement = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 15px;

`;

const StyledSocialBadge1 = styled.a`
  opacity: ${(props) => (props.bump ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  pointer-events: ${(props) => (props.bump ? `auto` : `none`)};
  animation: ${(props) => (props.bump ? css`${bounce} 0.8s normal forwards ease-in-out` : null)};
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: crosshair;
`;

const StyledSocialBadge2 = styled.a`
  opacity: ${(props) => (props.bump ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  pointer-events: ${(props) => (props.bump ? `auto` : `none`)};
  animation: ${(props) => (props.bump ? css`${bounceHigher} 0.6s normal forwards ease-in-out` : null)};
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: crosshair;
`;

const StyledSocialBadge3 = styled.a`
  opacity: ${(props) => (props.bump ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  pointer-events: ${(props) => (props.bump ? `auto` : `none`)};
  animation: ${(props) => (props.bump ? css`${bounce} 0.8s normal forwards ease-in-out` : null)};
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: crosshair;
`;

const StyledSocialBadge4 = styled.a`
  opacity: ${(props) => (props.bump ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  pointer-events: ${(props) => (props.bump ? `auto` : `none`)};
  animation: ${(props) => (props.bump ? css`${bounce} 0.8s normal forwards ease-in-out` : null)};
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: crosshair;
`;

export default function Footer({ bump, fade }) {
  return (
    <FooterWrapper>
      <BackgroundImage />
      <Fader>
        <Bubble fade={fade}>Feeling lazy, might add projects later.</Bubble>
        <FooterElement>
          <StyledSocialBadge1 bump={bump} href="http://github.com/lorenzburger" target="_blank" rel="noopener noreferrer">
            GitHub
          </StyledSocialBadge1>
          <StyledSocialBadge2 bump={bump} href="http://instagram.com/lrnzbrgr" target="_blank" rel="noopener noreferrer">
            Instagram
          </StyledSocialBadge2>
          <StyledSocialBadge3 bump={bump} href="http://linkedin.com/in/lorenzburger" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </StyledSocialBadge3>
          <StyledSocialBadge4 bump={bump} href="mailto:me@lorenzburger.com" target="_blank" rel="noopener noreferrer">
            e-mail
          </StyledSocialBadge4>
        </FooterElement>
      </Fader>
    </FooterWrapper>
  );
}
