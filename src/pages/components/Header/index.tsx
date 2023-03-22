import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from './logo';
import DarkMode from './mode';
import ResponsiveMenu from './menu';

// 👇 Menu options

const Links = ['About', 'Work', 'Contact']

 // 👇 Function to render Menu options

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={useColorModeValue('black', 'white')}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'navbar.background'),
    }}
    href={`/${children}`}>
    {children}
  </Link>
);

export default function Header() {

// Menu Button Opening/Closing Function
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    // 👇 Container for entire navbar
    <Box
      bg={useColorModeValue('none', 'gray.700')} px={4}>

      {/* 👇 Container for content inside of navbar */}
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

        {/* logo */}
        <Logo />
        
        {/* 👇 Container for Menu Options and Toggler */}
        <Flex alignItems={'center'} >
            
        {/* Stacking of Menu Options */}
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
      
          {/* Light/Dark Mode Toggler */}
          <DarkMode />
          
          {/* Responsive Open/Close Menu Button for tablets and phones */}
          <IconButton
            size={'md'}
            bg={'none'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            ml={'5'}
            _hover={{
              bg: useColorModeValue('gray.200', 'navbar.background')
            }} />
          
          {/* Responsive Menu */}
          <ResponsiveMenu />

        </Flex>

      </Flex>
      
      {/* Ternary Operator for Menu */}

      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
  );
}