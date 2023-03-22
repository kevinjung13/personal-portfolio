import {
  Center,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';

export default function ResponsiveMenu() {

  return (
    <>
      {/* Menu for Tablets and phones */}
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0} />
            
        {/* Menu List inside of Hamburger Icon */}
        <MenuList>
          <br />
          <Center />         
          <br />
          <MenuDivider />
          <MenuItem id={'About'}>About</MenuItem>
          <MenuItem id={'Work'}>Work</MenuItem>
          <MenuItem id={'Contact'}>Contact</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}