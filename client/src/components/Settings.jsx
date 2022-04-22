import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Settings({ settings, setSettings }) {
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()

  const [noOfQuestions, setNoOfQuestions] = useState(
    parseInt(settings.noOfQuestions)
  )

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      py={8}
      px={{ base: 8, md: 16 }}>
      <Stack spacing={4}>
        <HStack>
          <Text fontWeight={'medium'}>No. of Questions Each Round</Text>
          <Spacer />
          <NumberInput
            flex={'2'}
            value={noOfQuestions}
            onChange={(e) => {
              setNoOfQuestions(parseInt(e))
            }}
            min={1}
            max={20}>
            <NumberInputField disabled _disabled={{ cursor: 'default' }} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <HStack>
          <Text fontWeight={'medium'}>Color Theme</Text>
          <Spacer />
          <Tooltip
            label={
              colorMode === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            closeOnClick={false}>
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Tooltip>
        </HStack>
      </Stack>
      <HStack mt={8}>
        <Button colorScheme={'red'} w={'full'} onClick={() => navigate(-1)}>
          Go back
        </Button>
        <Button
          colorScheme={'green'}
          w={'full'}
          onClick={() => {
            setSettings({ noOfQuestions: noOfQuestions })
          }}>
          Apply
        </Button>
      </HStack>
    </Box>
  )
}

Settings.propTypes = {
  settings: PropTypes.shape({
    noOfQuestions: PropTypes.number
  }),
  setSettings: PropTypes.func
}

export default Settings
