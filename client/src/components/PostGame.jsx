import {
  Box,
  Button,
  Heading,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

function PostGame() {
  const location = useLocation()
  const results = location.state.results
  const noOfSuccess = results.filter((item) =>
    item.result.includes(true)
  ).length
  const navigate = useNavigate()

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      py={8}
      px={{ base: 8, md: 16 }}>
      <Stack spacing={4}>
        <Heading size="md" textAlign={'center'} fontWeight={'light'}>
          You got
        </Heading>
        <Heading size={'2xl'} textAlign={'center'}>
          {noOfSuccess} / {results.length}
        </Heading>
      </Stack>
      <Button
        colorScheme={'red'}
        mt={8}
        w={'full'}
        onClick={() => navigate(-1)}>
        Go back
      </Button>
    </Box>
  )
}

export default PostGame
