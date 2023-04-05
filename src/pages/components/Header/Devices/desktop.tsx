import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";

/* 1. Header Props */

interface Header {
  name: string;
  subLabel?: string;
  children?: Array<Header>;
  href?: string;
}

/* 2. Object with Header options */

const Links: Array<Header> = [

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

function DesktopSubNav(props: Header) {

  const { name, href } = props;

  return (
    <>
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'none' }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{
                color: useColorModeValue('brown', 'yellow.400')
              }}
              fontWeight={500} >
              {name}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
          </Flex>
        </Stack>
      </Link>
    </>
    );
  };

export default function DesktopNav() {

  return (
    <>  
      {/* Stacking */}
      <Stack direction={'row'} spacing={4}>
        {/* Options */}
        {Links.map((link) => (
        <Box key={link.name}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link
                p={2}
                href={link.href}
                fontSize={'lg'}
                fontWeight={'bold'}
                color={useColorModeValue('black', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('brown', 'yellow.400')}}>
                  {link.name}
                </Link>
              </PopoverTrigger>
          </Popover>
        </Box>))}   
      </Stack> 
    </>
  );
};