import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function DarkMode() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* Dark/Light Mode Toggle Button */}
      <Button
        onClick={toggleColorMode}
        ml={'5'}
        bg={'none'}
        color={useColorModeValue('black','white')}
        _hover={{
          bg: useColorModeValue('gray.300', 'navbar.background')}}>
        
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        
      </Button>
    </>
  )
}