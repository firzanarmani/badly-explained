import { Box, Heading, Text } from '@chakra-ui/react'
import { PropTypes } from 'prop-types'

function GameLoading({ isLoading }) {
  return (
    <Box
      py={10}
      px={6}
      w={'full'}
      h={'full'}
      position={'absolute'}
      textAlign={'center'}
      hidden={!isLoading}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Get ready!
      </Heading>
      <Text color={'gray.500'}>Game is starting!</Text>
    </Box>
  )
}

GameLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default GameLoading
