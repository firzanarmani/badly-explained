import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'

function ResultCard({ visible, result, movie = { name: '' } }) {
  return (
    <Box
      as={motion.div}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      py={8}
      px={{ base: 8, md: 16 }}
      position={'absolute'}
      height={'full'}
      width={'full'}
      overflow={'auto'}
      variants={{
        visible: { transform: 'rotateY(-180deg)' },
        hidden: { transform: 'rotateY(0deg)' }
      }}
      animate={visible ? 'visible' : 'hidden'}
      transition={{ duration: 2 }}
      textAlign={'center'}>
      {result ? (
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      ) : (
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={'red.500'}
            rounded={'50px'}
            w={'55px'}
            h={'55px'}
            textAlign="center">
            <CloseIcon boxSize={'20px'} color={'white'} />
          </Flex>
        </Box>
      )}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {movie.name}
      </Heading>
      <Text color={'gray.500'}>{result ? 'You got it!' : 'Nice try'}</Text>
    </Box>
  )
}

ResultCard.propTypes = {
  visible: PropTypes.bool.isRequired,
  result: PropTypes.bool.isRequired,
  movie: PropTypes.object
}

export default ResultCard
