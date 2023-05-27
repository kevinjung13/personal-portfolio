import ProjectButton from '@/pages/components/Button';
import { useState, useEffect } from 'react';
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from '@formspree/react';
import { CheckCircleIcon } from "@chakra-ui/icons";
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
  /* State for Form submission state*/
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* useEffect for Submission status */
  useEffect(() => {
    if (state.submitting) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [state.submitting]);

  /* handleClick Function for Spinner */
  const handleClick = () => {
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
           <CheckCircleIcon
             mb={"5"}
             color={useColorModeValue("teal.500", "teal.300")}
             boxSize={"50px"} />
          <Heading mb={"6"}>
            Thanks for your message!
           </Heading>
           {/* Container for text */}
           <Box fontSize={"lg"}>
            <Text>
             I will get back to you as soon as I can.
            </Text>
            <Text>
            Have a great day! 😊
            </Text>
            <Text>
            - Kevin -
            </Text>
          </Box>
        </Box>
      </>
    );
  }

  /* Rendering of Form */
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
            bgColor={useColorModeValue("blue.400", "charcoal.700")}
            fontColor={useColorModeValue("gray.100", "white")}
            hoverColor={"red.500"}
            isLoading={isLoading && isSubmitting}
            loadingText={"Sending"}
            onClick={handleClick}
            isDisabled={isSubmitting}
            text={"Send Message"} />
        </form>
      </Box>
    </>
  );
};
