import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function MainMenu({ name, children }) {
  return (
    <Flex minH={'100vh'} align={'start'} pt={{ base: 8, md: 12 }}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading
            fontSize={'6xl'}
            fontWeight={'extrabold'}
            textAlign={'center'}>
            Badly Explained
          </Heading>
          <Text fontSize={'lg'} textAlign={'center'}>
            The {name}
          </Text>
        </Stack>

        {children}

        {/* <Stack></Stack> */}
        <Text
          textAlign={'center'}
          fontWeight={'light'}
          fontSize={'sm'}
          color={'gray.500'}>
          2022 Armani.DEV
        </Text>
      </Stack>
    </Flex>
  )
}

MainMenu.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired
}

MainMenu.defaultProps = {
  name: 'Game'
}

export default MainMenu
