
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styled from 'styled-components'
import Quotes from "./views/quotes"
import Home from "./views/home"
import CV from "./views/cv"

import { useState, useRef } from 'react'


const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory; /* Enables vertical snapping */
  scroll-behavior: smooth; /* Ensures smooth scrolling */
`;


function App() {
  const [bump, setBump] = useState(false)
  const [fade, setFade] = useState(false)
  
  const refCV = useRef(null);
  const refQuotes = useRef(null);
  const refHome = useRef(null);

  function handleContactClick() {
    setBump(true)
    setFade(false)
  }

  function handlecvClick() {
    setBump(false)
    setFade(false)
    refCV.current?.scrollIntoView({ behavior: 'smooth' })

  }
  
  function handleProjectsClick () {
    setBump(false)
    setFade(true)
    
    refQuotes.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleBurgerClick () {
    setBump(false)
    setFade(false)
    refHome.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function resetState () {
    setBump(false)
    setFade(false)
  }


  
  return (
    <Main>
      <ScrollContainer>
      <Header burgerClick={() => handleBurgerClick()} cvClick={() => handlecvClick()} contactClick={() => handleContactClick()} projectsClick={() => handleProjectsClick()} otherClick={() => resetState()} />
      <Home ref={refHome}/>
      <Quotes ref={refQuotes}/>
      <CV ref={refCV}/>
      <Footer bump={bump} fade={fade} />
      </ScrollContainer>
    </Main>
  );
}

export default App;
