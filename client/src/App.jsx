import { Container, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainMenu from './components/MainMenu'
import PostGame from './components/PostGame'
import Settings from './components/Settings'
import SubmitExplanation from './components/SubmitExplanation'
import GameContainer from './containers/GameContainer'
import MainContainer from './containers/MainContainer'

function App() {
  const [settings, setSettings] = useState({ noOfQuestions: 10 })

  return (
    <Container maxW={'100vw'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW={'container.xl'}>
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <MainMenu />
              </MainContainer>
            }
          />
          <Route path="/game" element={<GameContainer settings={settings} />} />
          <Route
            path="/result"
            element={
              <MainContainer name="Results">
                <PostGame />
              </MainContainer>
            }
          />
          <Route
            path="/settings"
            element={
              <MainContainer name="Settings">
                <Settings settings={settings} setSettings={setSettings} />
              </MainContainer>
            }
          />
          <Route
            path="/add"
            element={
              <MainContainer name="Explanation">
                <SubmitExplanation />
              </MainContainer>
            }
          />
        </Routes>
      </Container>
    </Container>
  )
}

export default App
