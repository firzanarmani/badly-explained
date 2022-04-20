import { Box, Button, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function MainMenu() {
  const navigate = useNavigate()

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      py={8}
      px={{ base: 8, md: 16 }}>
      <Stack spacing={4}>
        <Button
          size={'lg'}
          colorScheme={'green'}
          py={8}
          onClick={() => navigate('/game')}>
          Play Game
        </Button>
        <Button onClick={() => navigate('/settings')}>Game Settings</Button>
        <Button colorScheme={'teal'} onClick={() => navigate('/add')}>
          {`Submit a `}
          <Text fontWeight={'extrabold'} ml={1}>
            Bad Explanation
          </Text>
        </Button>
      </Stack>
    </Box>
  )
}

export default MainMenu
