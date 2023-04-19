import Link from 'next/link';
import { NavBarProps } from "..";
import { Links } from "..";
import { Box, Stack, Text, useColorMode } from "@chakra-ui/react";

/* Navbar Item Function */
function DesktopItem(props: NavBarProps) {

  const { colorMode } = useColorMode();
  const { name, href } = props;

  return (
    <>
      {/* Stacking */}
      <Stack direction={'row'} align={'center'}>
        {/* Container */}
        <Link href={`${href}`}>
          <Box
            p={2}
            rounded={'md'}
            _hover={{ bg: 'none' }}>
            {/* Options */}
              <Text
                transition={'all .3s ease'}
                fontWeight={'bold'}
                fontSize={'lg'}
                _hover={{color: (colorMode === 'light' ? 'brown' : 'yellow.400')}}>
                {name}
              </Text>
          </Box>
        </Link>
      </Stack>
    </>
  );
};

/* Desktop Version Navbar */
export default function DesktopNav() {

  return (
    <>  
      {/* Stacking */}
      <Stack direction={'row'} spacing={4}>
        {/* Rendering Navbar Items */}
        {Links.map((link) => (
          <DesktopItem key={link.name} {...link} />))}   
      </Stack> 
    </>
  );
};