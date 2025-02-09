import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { quotes } from '../assets/quotes';
import Typewriter from 'typewriter-effect';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
  background-color: black;
  opacity: 0.4;
`;

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  color: lime;
  font-size: 1rem;
  width: 75%;
  @media (min-width: 1600px) {
    width: 45%;
  };
`;

const DeathOfSocrates = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1920px-David_-_The_Death_of_Socrates.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  scroll-snap-align: start; 
  scroll-snap-stop: always; 
`;


const Quotes = forwardRef((props, ref) => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTypewriter(false); // Reset first
          setTimeout(() => setShowTypewriter(true), 100); // Small delay to restart effect
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <DeathOfSocrates ref={ref}>
      <BackgroundImage />
      <Wrapper>
        <QuoteWrapper>
          {showTypewriter && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(40)
                  .typeString(Object.values(randomQuote)[0])
                  .pauseFor(1000)
                  .typeString('  - ' + Object.keys(randomQuote)[0])
                  .start();
              }}
            />
          )}
        </QuoteWrapper>
      </Wrapper>
    </DeathOfSocrates>
  );
});

export default Quotes;
