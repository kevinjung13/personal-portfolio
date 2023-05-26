import { useState } from 'react';
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ProjectButton from '@/pages/components/Button';
import { useForm } from '@formspree/react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

export default function Form() {
  
  /* useForm for FormSpree */
  const [state, handleSubmit] = useForm("mdovvdeq");
  /* State for Loading */
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }
  
  /* Rendering once Submit Button is pressed */
   if (state.succeeded) {
     return (
       <>
        <Box textAlign={"center"}>
          <Heading>
            Thanks for your message!
          </Heading>
          <Text>
            I will get back to you as soon as I can.
            Have a great day!
          </Text>
          <Text>
            Kevin Jung
          </Text>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box
        w={"full"}
        textAlign={"center"}>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <FormControl
            mb={"2"}
            isRequired >
            <FormLabel>Name</FormLabel>
            <InputGroup>
              {/* Logo of person */}
              <InputLeftElement children={<BsPerson />} />
              <Input
                type={"text"}
                name={"name"}
                placeholder={"Your Name"}
                _hover={{
                  borderColor: useColorModeValue("teal.300", "teal.500")}} />
              </InputGroup>
          </FormControl>
          {/* Email */}
          <FormControl
            mb={"2"}
            isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              { /* Logo of Envelope */}
              <InputLeftElement children={<MdOutlineEmail />} />
              <Input
                type={"email"}
                name={"email"}
                placeholder={"Your Email"}
                _hover={{
                  borderColor: useColorModeValue("teal.300", "teal.500")}} />
            </InputGroup>
          </FormControl>
          {/* Message */}
          <FormControl
            mb={"5"}
            isRequired >
            <FormLabel>Message</FormLabel>
            {/* Message box */}
            <Textarea
              name={"message"}
              placeholder={"Your Message"}
              rows={6}
              resize={"none"}
              _hover={{
                borderColor: useColorModeValue("teal.300", "teal.500")}} />
          </FormControl>
          {/* Send Message Button */}
          <ProjectButton
            type={"submit"}
            target={"none"}
            bgColor={useColorModeValue("blue.400", "charcoal.700")}
            fontColor={useColorModeValue("gray.100", "white")}
            hoverColor={"red.500"}
            onClick={handleLoading}
            isLoading={isLoading}
            isDisabled={state.submitting}
            text={"Send Message"} />
        </form>
      </Box>
    </>
  );
};
