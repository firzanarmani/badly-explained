import { CheckIcon, CloseIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import {
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import { AsyncSelect } from 'chakra-react-select'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import QuestionCard from '../components/QuestionCard'
import ResultCard from '../components/ResultCard'

function QuestionContainer({ hasStarted, questions, gameOverCallback }) {
  const API_URL = import.meta.env.VITE_API_URL

  const [questionsAnswered, setQuestionsAnswered] = useState(() => {
    return Array.from(questions).fill(false)
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [guesses, setGuesses] = useState(() =>
    Array.from(questions).fill(new Array(5).fill(false))
  )
  const [currentGuess, setCurrentGuess] = useState(0)
  const [guessInput, setGuessInput] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)

  function handleGuess() {
    // if guess is correct
    if (guessInput.value === questions[currentQuestion].movie_id) {
      setGuesses((prevState) => {
        const newState = [...prevState]
        newState[currentQuestion] = [...prevState[currentQuestion]]
        newState[currentQuestion][currentGuess] = true
        return newState
      })
      setQuestionsAnswered((prevState) => {
        const newState = [...prevState]
        newState[currentQuestion] = !prevState[currentQuestion]
        return newState
      })
      setIsCorrect(true)
    } else {
      // If guess is wrong
      setGuesses((prevState) => {
        const newState = [...prevState]
        newState[currentQuestion] = [...prevState[currentQuestion]]
        newState[currentQuestion][currentGuess] = false
        return newState
      })
      // Then try to next guess
      if (currentGuess + 1 < 5) {
        setCurrentGuess(currentGuess + 1)
      } else {
        // Out of guesses
        setQuestionsAnswered((prevState) => {
          const newState = [...prevState]
          newState[currentQuestion] = !prevState[currentQuestion]
          return newState
        })
      }
    }
  }

  function handleGiveUp() {
    setQuestionsAnswered((prevState) => {
      const newState = [...prevState]
      newState[currentQuestion] = !prevState[currentQuestion]
      return newState
    })
  }

  function loadOptions(inputValue, callback) {
    axios
      .get(API_URL + '/movie', {
        params: { search: inputValue }
      })
      .then((response) => {
        const results = response.data.movies.map((movie) => ({
          value: movie.id,
          label: movie.name
        }))
        callback(results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    setQuestionsAnswered(() => Array.from(questions).fill(false))
    setGuesses(() => Array.from(questions).fill(new Array(5).fill(null)))
  }, [questions])

  return (
    <Stack spacing={8} h={'full'} position={'relative'} hidden={!hasStarted}>
      <Heading fontSize={'4xl'} fontWeight={'extrabold'} textAlign={'center'}>
        {`Question ${currentQuestion + 1}`}
      </Heading>
      <Container
        height={'full'}
        width={'full'}
        px={'0'}
        position={'relative'}
        style={{ transformStyle: 'preserve-3d' }}>
        <QuestionCard
          visible={questionsAnswered[currentQuestion]}
          question={questions[currentQuestion].content}
        />
        <ResultCard
          visible={!questionsAnswered[currentQuestion]}
          result={isCorrect}
          movie={questions[currentQuestion].movie}
        />
      </Container>
      <Flex>
        <Text
          mr={1}
          textAlign={'center'}
          flexGrow={1}
          flexShrink={1}
          flexBasis={'auto'}>
          Guesses:
        </Text>
        {guesses[currentQuestion].map((guess, index) => {
          if (guess === false) {
            return (
              <CloseIcon
                key={index}
                alignSelf={'center'}
                flexGrow={1}
                flexShrink={1}
                flexBasis={'auto'}
                color={'red.400'}
              />
            )
          } else if (guess === true) {
            return (
              <CheckIcon
                key={index}
                alignSelf={'center'}
                flexGrow={1}
                flexShrink={1}
                flexBasis={'auto'}
                color={'green.400'}
              />
            )
          }
          return (
            <QuestionOutlineIcon
              key={index}
              alignSelf={'center'}
              flexGrow={1}
              flexShrink={1}
              flexBasis={'auto'}
            />
          )
        })}
      </Flex>
      <FormControl id={'guess'}>
        <AsyncSelect
          placeholder={'Guess here'}
          value={guessInput}
          defaultOptions
          loadOptions={loadOptions}
          onChange={(e) => setGuessInput(e)}
        />
      </FormControl>
      {questionsAnswered[currentQuestion] ? (
        <Button
          colorScheme={'blue'}
          py={8}
          onClick={() => {
            if (currentQuestion + 1 === questions.length) {
              gameOverCallback(guesses)
            } else {
              setCurrentQuestion(currentQuestion + 1)
              setCurrentGuess(0)
              setIsCorrect(false)
              setGuessInput(null)
            }
          }}>
          {currentQuestion + 1 === questions.length
            ? 'See Results'
            : 'Next Question'}
        </Button>
      ) : (
        <Stack spacing={4} direction={'row'}>
          <Button w={'full'} colorScheme={'red'} py={8} onClick={handleGiveUp}>
            Give up
          </Button>
          <Button
            w={'full'}
            colorScheme={'green'}
            py={8}
            onClick={handleGuess}
            isDisabled={guessInput === null}>
            Guess
          </Button>
        </Stack>
      )}
    </Stack>
  )
}

QuestionContainer.propTypes = {
  hasStarted: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      movie_id: PropTypes.number,
      created_at: PropTypes.any,
      movie: PropTypes.shape({ name: PropTypes.string })
    })
  ),
  gameOverCallback: PropTypes.func.isRequired
}

export default QuestionContainer
