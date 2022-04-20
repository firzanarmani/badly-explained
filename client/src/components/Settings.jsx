import { Box, Button, Stack, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Settings() {
  const navigate = useNavigate()

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      py={8}
      px={{ base: 8, md: 16 }}>
      <Stack spacing={4}>
        {/* TODO Add some useful settings */}
        <Button colorScheme={'green'}>Coming soon</Button>
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

export default Settings
