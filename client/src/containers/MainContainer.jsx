import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

function MainMenu({ name, children }) {
  const { colorMode, toggleColorMode } = useColorMode()

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

        <HStack>
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
