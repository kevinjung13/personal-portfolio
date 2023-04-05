import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import {BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (

    // Container for whole page
    <Container bg={useColorModeValue('gray.200', 'gray.900')} maxW="full" mt={0} centerContent overflow="hidden">
      {/* Container for whole section */}  
      <Box
          
          color={useColorModeValue('black', 'white')}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}>
          {/* Container for content */}  
        <Box p={4} >
          {/* Container for "Get in touch section" */} 
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} >
              <WrapItem>
                <Box >
                  <Heading>Get In Touch</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} >
                    I look forward to hearing from you!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} >
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +66-6-2520-2510
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        kevinjung13@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Bangkok, Thailand
                      </Button>
                  </VStack>
                  
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                  alignItems="flex-start">
                    {/*  */}
                  </HStack>
                </Box>
              </WrapItem>
            <WrapItem>
              
              {/* Container for Form */}
              <Box bg="white" borderRadius="lg" >
                {/* Container for Content */}
                  <Box m={8} color="#0B0E3F" >
                    <VStack spacing={5}>
                      <FormControl id="name" isRequired>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />} />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Write your message here..."
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      
    </Container>
  )
}