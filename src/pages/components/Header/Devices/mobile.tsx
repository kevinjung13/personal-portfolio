import { NavBarProps } from "..";
import { Links } from "..";
import {Collapse, Flex, Stack, Text, useColorModeValue, useDisclosure} from "@chakra-ui/react";

/* 3. Rendering of Header Options */
function MobileNavLink(props: NavBarProps) {

  const { name, href } = props;
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Stacking */}
      <Stack spacing={4}>
        {/* Container */}
        <Flex
        onClick={onToggle}
        py={2}
        as={'a'}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'}}>
          {/* Options */}
          <Text
            fontWeight={'bold'}
            fontSize={"lg"}
            px={2}
            py={1}
            color={useColorModeValue('black', 'white')}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              color: useColorModeValue('brown', 'yellow.400')}}>
            {name}
          </Text>
        </Flex>
        {/* Collapse */}
        <Collapse
          in={isOpen}
          style={{ marginTop: '0!important'}}
          animateOpacity>
        {/* Stack inside Menu */}  
        <Stack
          mt={2}
          pl={4}
          color={'black'}
          fontWeight={500}>  
        </Stack>   
        </Collapse>
      </Stack>
    </>
  );
};

/* 4. Rending of Options on Mobile Devices */
export default function MobileNav() {
  return (
    <>
      {/* Stack */} 
      <Stack
        bg={useColorModeValue('white', 'gray.700')}
        p={4}
        display={{ md: 'none' }}>
        {/* Render of MobileNavLink */} 
        {Links.map((link) => (
          <MobileNavLink {...link} />))}
      </Stack>
    </>
  );
};