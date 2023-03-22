import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
import { getRequestMeta } from 'next/dist/server/request-meta';

export default function Main() {
  return (
    <>
      {/* 👇 Container of whole main section + background image */ }
      <Box
        bgImage={{ base: "url('main.bg.small.jpg')", md: "url('main.bg.jpg')"}}
        bgPosition={'center'}
        bgSize={{ base: 'cover', md: 'cover'}}
        bgRepeat={'no-repeat'}>
      
      {/* 👇 Stacking of whole main section */ }
      <Stack
        minH={'100vh'}
        direction={'row'}
        p={{ base: 15, md: 15 }}
        >

      {/* 👇 Container for text and buttons */}
          <Flex align={{ base: 'end', md: 'center' }} justify={'center'}>

        {/* Stacking */}
            <Stack p={8} spacing={6} w={'full'} maxW={'lg'} >

          {/* Heading */}
          <Heading fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}>
            <Text
              color={'white'}
              as={'span'}>
              Hi, My Name is
            </Text>{' '}
            <br />
            <Text as={'span'} color={'black'}>
              Kevin Jung
            </Text>
              </Heading>

          {/* Description */}
              <Text
                fontSize={{ base: 'sm', sm: 'sm', md: 'lg', lg: 'lg' }}
                color={'gray.500'}>
            Front End Developer and Former Hotelier 
          </Text>

          {/* Stacking of Button */}
          <Stack direction={'row'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Introduction
            </Button>
          </Stack>

        </Stack>

      </Flex>
      
        </Stack>  
      </Box>
      </>
  );
}