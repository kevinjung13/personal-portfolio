import Logo from "./logo";
import DarkMode from "./mode";
import DesktopNav from "./Devices/desktop";
import MobileNav from "./Devices/mobile";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";

/* 1. Header Props */

export interface NavBarProps {
  name: string;
  subLabel?: string;
  children?: Array<NavBarProps>;
  href?: string;
}

/* 2. Object with Header options */

export const Links: Array<NavBarProps> = [

  {
    name: "About",
    href: "../about",
  },

  {
    name: "Work",
    href: "../work",
  },

  {
    name: "Contact",
    href: "../contact",
  }];

export default function Header() {

// Menu Button Opening/Closing Function
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      {/*👇 Container for whole Navbar */}
      <Box bg={useColorModeValue('white', 'gray.700')} px={4}>
        {/* Container for Navbar content */}
        <Flex
          minH={16}
          justify={'space-between'}
          align={'center'}
          py={{ base: 2 }}
          px={{ base: 4 }}>
          {/* Logo */}
          <Logo />
          {/* Container for Mode and Options */}
          <Flex display={{base: 'flex', md: 'none'}}>
          {/* Light/Dark Mode Toggler */}
          <DarkMode />
          {/* Hamburger Icon */}
          <IconButton
            minW={0}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Open Menu'}
            size={"md"}
            color={useColorModeValue('black', 'white')}
            _hover={{
              bg: 'none',
              color: useColorModeValue('brown', 'yellow.400')}} />
          </Flex>
          {/* Options on Desktop */}
          <Flex display={{ base: 'none', md: 'flex' }} justify={'center'} align={'center'}>
            <DarkMode />
            <DesktopNav />
          </Flex>
          </Flex>
        {/* Display of Options on Mobile Devices */}
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}
    