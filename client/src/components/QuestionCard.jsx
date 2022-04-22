import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'

function QuestionCard({ visible, question }) {
  return (
    <Box
      as={motion.div}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      style={{ backfaceVisibility: 'hidden' }}
      py={8}
      px={{ base: 8, md: 16 }}
      position={'absolute'}
      height={'full'}
      width={'full'}
      overflow={'auto'}
      variants={{
        visible: { transform: 'rotateY(180deg)' },
        hidden: { transform: 'rotateY(0deg)' }
      }}
      animate={visible ? 'visible' : 'hidden'}>
      <Stack spacing={4}>
        <Text align={'center'}>{`${question}`}</Text>
        {/* TODO Hint */}
      </Stack>
    </Box>
  )
}

QuestionCard.propTypes = {
  visible: PropTypes.bool.isRequired,
  question: PropTypes.string
}

export default QuestionCard
