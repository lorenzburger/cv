import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// Import modified version from assets
import modifiedNighthawks from '../assets/modified-nighthawks.jpeg';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-left: 10%;
  z-index: 2;
`;

const HeroWrapper = styled.div`
  font-family: monospace;
  color: lime;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bolder;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  text-align: left;
  max-width: 50%;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: ${(props) => (props.locked ? "none" : "background-image 1s ease-in-out")};
  z-index: 0;
  @media (max-width: 600px) {
  background-position: +65% center; /* Shift the background image 20% to the left */
}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Nighthawks = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  scroll-snap-align: start; 
  scroll-snap-stop: always;
`;

const Home = forwardRef((props, ref) => {
  const originalNighthawks =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/2880px-Nighthawks_by_Edward_Hopper_1942.jpg";

  const [background, setBackground] = useState(originalNighthawks);
  const [backgroundLocked, setBackgroundLocked] = useState(true); // Ensures no fade on reset
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTypewriter(false);
          setBackgroundLocked(true); // Lock background to prevent fade
          setBackground(originalNighthawks); // Instantly reset to original
          setTimeout(() => setShowTypewriter(true), 100);
        }
      },
      { threshold: 0.5 }
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

  return (
    <Nighthawks ref={ref}>
      <BackgroundImage image={background} locked={backgroundLocked} />
      <Overlay />
      <Wrapper>
        <HeroWrapper>
          {showTypewriter && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(40)
                  .typeString("Hi")
                  .pauseFor(500)
                  .typeString(", I'm Lorenz.")
                  .callFunction(() => {
                    setBackgroundLocked(false); // Unlock background transition
                    setTimeout(() => {
                      setBackground(modifiedNighthawks); // Fade to modified version
                    }, 500);
                  })
                  .start();
              }}
            />
          )}
        </HeroWrapper>
      </Wrapper>
    </Nighthawks>
  );
});

export default Home;
