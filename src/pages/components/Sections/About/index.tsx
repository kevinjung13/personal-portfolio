import ProjectButton from "../../Button";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      {/* Container for whole content */}
      <Box
        bg={useColorModeValue("white", "gray.900")}
        id={"about"}
        w={"full"}>
        {/* Container for Grid */}
        <Container maxW={"5xl"} py={12}>
          {/* Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Stacking of content */}
            <Stack spacing={4}>
              <Heading>About Me</Heading>
              {/* Container for Texts */}
              <Box
                color={useColorModeValue("gray.900", "gray.200")}
                fontSize={"lg"}>
                <Text>
                  Hi, I'm Kevin and I'm passionate about building cool websites
                  (among other things like traveling, hiking and learning new
                  languages). I started my journey in Web Developement in
                  September 2022, after coming across a tutorial on how to build
                  a simple website using HTML.
                </Text>
                <br />
                <Text>
                  Since then, I have dedicated my free time to learn about Front
                  End Development through various platforms (mostly freeCodeCamp
                  & YouTube).
                </Text>
                <br />
                <Text>
                  Nowadays, I have been collaborating with another developer
                  (friend & mentor) to build exciting and challenging projects,
                  in order to continue learning and improving my skills. In
                  addition, I have slowly started diving into the world of Back
                  End Development, in hopes of becoming a Full Stack Developer
                  in the future.
                </Text>
              </Box>
              {/* Button */}
              <ProjectButton
                bgColor={useColorModeValue("blue.400", "charcoal.700")}
                fontColor={"white"}
                text={"Resume"}
                hoverColor={"red.500"}
                URL={"/resume/Kevin-Jung-Resume.pdf"}
                target={"_blank"} />
            </Stack>
            {/* Flex Container for Image */}
            <Flex>
              <Image
                rounded={"md"}
                alt={"profile image"}
                src={"/photos/profile-pic.jpg"}
                objectFit={"cover"} />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
