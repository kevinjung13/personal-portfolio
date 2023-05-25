import Form from "./Form";
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {

  return (
    <>
      {/* Container for Whole section */}
      <Flex
        bg={useColorModeValue("gray.300", "gray.900")}
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
              <Heading fontSize={{ base: "4xl", md: "5xl" }}>
                Contact Me
              </Heading>
              {/* Stacking of form itself */}
              <Stack
                align="center"
                justify="space-around"
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}>
                {/* Container for form itself */}
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  w={{ md: "50vw" }}
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base">
                  {/* Stacking of form items */}
                  <VStack spacing={5}>
                    {/* Form */}
                    <Form
                      formEndpoint={"mdovvdeq"} />
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
