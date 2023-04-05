import { NavBarProps } from "..";
import { Links } from "..";
import {Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

function DesktopItem(props: NavBarProps) {

  const { name, href } = props;

  return (
    <>
        <Stack direction={'row'} align={'center'}>
          <Box
          as={'a'}
          href={href}
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: 'none' }}>
            <Text
              transition={'all .3s ease'}
              fontWeight={'bold'}
              fontSize={'lg'}
              _groupHover={{
                color: `useColorModeValue('brown', 'yellow.400')`}}>
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
          <DesktopItem {...link} />))}   
      </Stack> 
    </>
  );
};