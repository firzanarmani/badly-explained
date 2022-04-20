import { Container, Stack } from '@chakra-ui/react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import GameLoading from '../components/GameLoading'
import QuestionContainer from './QuestionContainer'

function GameContainer({ noOfQuestions }) {
  const API_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const [hasStarted, setHasStarted] = useState(false)
  const [questions, setQuestions] = useState([
    { id: 0, question: '', movie_id: 0, source: '', movie: { name: '' } }
  ])
  const [isGameOver, setIsGameOver] = useState(false)
  const [results, setResults] = useState([])

  // Fetch list of questions
  useEffect(() => {
    const controller = new AbortController()
    axios
      .get(API_URL + '/explanation', {
        signal: controller.signal,
        params: { noOfQueries: noOfQuestions }
      })
      .then((response) => {
        setQuestions(response.data.explanations)
        new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
          setHasStarted(true)
        )
      })
    // TODO Handle error (e.g server unavailable) properly
    // .catch(error => console.log(error))
    return () => controller.abort
  }, [])

  useEffect(() => {
    isGameOver &&
      navigate('/result', {
        replace: true,
        state: {
          results
        }
      })
  })

  return (
    <Container h={'100vh'} align={'start'} py={{ base: 8, md: 12 }}>
      <Stack
        spacing={8}
        mx={'auto'}
        h={'full'}
        maxW={'lg'}
        px={{ base: 2, md: 6 }}
        position={'relative'}>
        <GameLoading isLoading={!hasStarted} />
        <QuestionContainer
          hasStarted={hasStarted}
          questions={questions}
          gameOverCallback={(guesses) => {
            setResults(() => {
              const newResults = guesses.map((result, index) => ({
                result: result,
                movie: questions[index].movie.name
              }))
              return newResults
            })
            setIsGameOver(true)
          }}
        />
      </Stack>
    </Container>
  )
}

GameContainer.propTypes = {
  noOfQuestions: PropTypes.number
}

export default GameContainer
