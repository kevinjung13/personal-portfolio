import { Box, Heading, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import ProjectButton from '@/pages/components/Button';
import { useForm } from '@formspree/react';

/* Form Props for FormSpree */
interface FormProps {
  formEndpoint: string;
  onSubmit?: () => void;
}

export default function Form(props: FormProps) {

  const { formEndpoint, onSubmit } = props;
  const [state, handleSubmit] = useForm(formEndpoint);

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
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <FormControl isRequired>
          <FormLabel >
            Name
          </FormLabel>
          <InputGroup>
            {/* Logo of person */}
            <InputLeftElement children={<BsPerson />} />
          <Input
            type={"text"}
            name={"name"}
            placeholder={"Your Name"} />
          </InputGroup>
        </FormControl>
        {/* Email */}
        <FormControl isRequired>
          <FormLabel>
            Email
          </FormLabel>
          <InputGroup>
            { /* Logo of Envelope */}
            <InputLeftElement children={<MdOutlineEmail />} />
            <Input
              type={"email"}
              name={"email"}
              placeholder={"Your Email"} />
          </InputGroup>
        </FormControl>
        {/* Message */}
        <FormControl isRequired>
          <FormLabel>
            Message
          </FormLabel>
          {/* Message box */}
          <Textarea
            name={"message"}
            placeholder={"Your Message"}
            rows={6}
            resize={"none"} />
        </FormControl>
        {/* Send Message Button */}
        <ProjectButton
          type={"submit"}
          target={"none"}
          bgColor={useColorModeValue("blue.400", "charcoal.700")}
          fontColor={useColorModeValue("gray.100", "white")}
          isDisabled={state.submitting}
          text={"Send Message"} />
      </form>
    </>
  );
};
