import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  text-align: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
`;

const CvWrapper = styled.div`
  font-family: monospace;
  color: lime;
  font-size: 1rem;
  width: 85%;
  max-height: 90vh; /* Restrict to avoid overflow */
  overflow-y: auto; /* Enables scrolling if content overflows */
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? '0' : '20px')});
  transition: opacity 1s ease-out, transform 1s ease-out;
  padding: 30px;

  @media (max-width: 768px) {
    width: 90%;
    max-height: 80vh; /* Limit height further on mobile */
    font-size: 0.9rem;
    padding: 25px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-top: 10px;
  max-width: 100%; /* Prevents overflow on small screens */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout for mobile */
    text-align: center; /* Aligns text properly */
    padding: 10px; /* Ensures spacing on mobile */
    font-size: 0.8rem;
  }
`;

const DateColumn = styled.div`
  text-align: right;
  font-weight: bold;
  color: lightgray;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContentColumn = styled.div`
  text-align: left;
`;

const NinthWave = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4a/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  scroll-snap-align: start; 
  scroll-snap-stop: always;
`;

const CV = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Create an Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.5, // trigger visibility when 50% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <NinthWave ref={ref}>
      <Wrapper>
        <BackgroundImage />
        <CvWrapper visible={visible}>
          <h2>CV</h2>
          <Grid>
            <DateColumn>2024 - Present</DateColumn>
            <ContentColumn>
              <strong>Learning a lot at 
                <a style={{ color: 'lightgray', textDecoration: 'none' }} rel="Qlibri" href="https://www.qlibri.eu"> Qlibri</a>
              </strong>  
              <p>Working on improving the  passiv stability of optical micro cavities and pushing the boundaries of whats possible in cryogenic positioning.</p>
            </ContentColumn>
            <DateColumn>2022 - Present</DateColumn>
            <ContentColumn>
              <strong>M.Sc. Micro- & Nanotechnolgy, HM 
              </strong>  
              <p>Started this because I wanted to dive deeper into the natural sciences and their real world applications.</p>
            </ContentColumn>

            <DateColumn>2019 - 2024</DateColumn>
            <ContentColumn>
              <strong>Radiation Engineer, BfS</strong>  
              <p>Worked for the german federal office for radiation protection (BfS), in the "environmental radioactivity" division. Flew in a helicopter over the chornobyl exclusion zone to 
              <a style={{ color: 'lightgray', textDecoration: 'none' }} rel="bfs" href="https://www.bfs.de/SharedDocs/Pressemitteilungen/BfS/EN/2022/006.html"> remap </a>
              the spatial distribution of Cs-137 in 2021. </p>
            </ContentColumn>

            <DateColumn>2016 - 2019</DateColumn>
            <ContentColumn>
              <strong>M.A. History of Science and Technology, TU Berlin</strong>  
              <p>Focus on history of technology. For my master's thesis I examined the dynamics of the phase-out of lead based hunting ammunition in Germany from the 80s to 2000. </p>
            </ContentColumn>

            <DateColumn>2012 - 2016</DateColumn>
            <ContentColumn>
              <strong>B.Sc. Engineering Physics, HM</strong>  
              <p>Focus on semiconductor physics. For my bachelor's thesis I detected excitonic systems in silicon which can be used to detect nitrogen impurities using photoluminisecenes at low temperatures. </p>
            </ContentColumn>
          </Grid>
        </CvWrapper>
      </Wrapper>
    </NinthWave>
  );
});

export default CV;
