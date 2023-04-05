import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  // useBreakpointValue,
  // useColorModeValue
} from '@chakra-ui/react';

export default function Main() {
  return (
    <>
      {/* 👇 Box for whole main section + background image */ }
      <Box
        bgImage={{ base: "url('main.bg.small.jpg')", md: "url('main.bg.jpg')"}}
        bgPosition={'center'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}>
      
        {/* 👇 Stacking of whole main section */ }
        <Stack
          minH={'100vh'}
          direction={'row'}
          p={{ base: 15, md: 15 }}
          justify={{ base: 'center', md: 'start' }}>

          {/* 👇 Container for text and buttons */}
          <Flex direction={'row'} align={{ base: 'end', md: 'center' }} justify={'center'}>

            {/* Stacking */}
            <Stack p={8} spacing={6} w={'full'} maxW={'lg'} opacity={{ base: '100%', md: 'none' }}>

              {/* Heading */}
              <Heading fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}>
                <Text color={{ base: 'gray.900', md: 'white' }} as={'span'}>
                Hi, My Name is
                </Text>{' '}
                <br />

                <Text as={'span'} color={{ base: 'white', md: 'black' }}>
                Kevin Jung
                </Text>
              </Heading>

              {/* Description */}
              <Text
                color={{ base: 'white', md: 'gray.600' }}
                fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}
                fontWeight={'bold'}>
              Front End Developer and Hotelier 
              </Text>

              {/* Stacking of Button */}
              <Stack direction={'row'}>
                
                <Button
                  as={'a'}
                  href={'/about'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.500'}}>
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