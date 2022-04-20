import { Box, Button, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function SubmitExplanation() {
  const navigate = useNavigate()

  return (
    <Box
      as={'form'}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      py={8}
      px={{ base: 8, md: 16 }}>
      <Stack spacing={4}>
        <Text align={'center'} fontStyle={'italic'}>
          {/* TODO Implement user submission */}
          Coming soon
        </Text>
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

export default SubmitExplanation
