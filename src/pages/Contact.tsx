import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import ProjectButton from './components/Common/Button';

export default function Contact() {

  return (
    <>
      {/* Container for Whole section */}
      <Flex
      bg={useColorModeValue('gray.200', 'gray.900')}
      align="center"
      justify="center"
      id="contact">
        {/* Large container for form and space around */}
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          {/* Container for heading and form */}
          <Box>
          {/* Stacking of heading */}
            <VStack spacing={{ base: 4, md: 8 }}>
            {/* Heading */}
              <Heading fontSize={{base: '4xl', md: '5xl' }}>
              Contact Me
              </Heading>
              {/* Stacking of form itself */}              
              <Stack
              align="center"
              justify="space-around"
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              {/* Container for form itself */}   
                <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                w={{md: '50vw'}}
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                {/* Stacking of form items */}   
                <VStack spacing={5}>
                  {/* Form */}
                  {/* Name */}     
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      {/* Logo of person */} 
                      <InputLeftElement children={<BsPerson />} />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>
                  {/* Email */} 
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      {/* Logo of Envelope */} 
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"/>
                    </InputGroup>
                  </FormControl>
                  {/* Message */} 
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    {/* Message box */} 
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"/>
                    </FormControl>
                  {/* Send Message Button */} 
                  <ProjectButton
                    type={'submit'}
                    target={"none"}
                    bgColor={useColorModeValue("blue.400", "navbar.background")}
                    fontColor={useColorModeValue("gray.100", "white")}
                    text={"Send Message"}
                    hoverColor={"red.500"} />
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
}