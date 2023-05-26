import Navbar from "../../Navbar";
import {
  Box,
  Flex,
  Fade,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

export default function Hero() {

  const { colorMode } = useColorMode()

  return (
    <>
      <Fade in={true}>
        {/* Box for whole main section + background image */}
        <Box
          bgImage={colorMode === 'light' ? {
            base: "url('/photos/main-bg-light-small.jpg')",
            md: "url('/photos/main-bg-light.jpg')"
          } : {
            base: "url('/photos/dark/main-bg-dark-small.jpg')",
            md: "url('/photos/dark/main-bg-dark.jpg')"}}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}>
          {/* Navbar */}
          <Navbar />
          {/* Stacking of whole main section */}
          <Stack
            minH={"100vh"}
            direction={"row"}
            p={{ base: 15, md: 15 }}
            justify={{ base: "center", md: "start" }}>
            {/* Container for text and buttons */}
            <Flex
              direction={"row"}
              align={colorMode === 'light' ? {
                base: "end", md: "center"
              } : {
                base: "top", md: "center"}}
              justify={"center"}>
              {/* Stacking */}
              <Stack
                ml={{ base: "none", md: "15" }}
                p={{ base: "3", md: "8" }}
                mt={useColorModeValue({base: "5", md: "none" }, {base: "20", md: "none"})}
                spacing={6}
                w={"100%"}
                h={"fit-content"}>
                {/* Heading */}
                <Heading
                  fontSize={colorMode === 'light' ? {
                    base: "4xl", md: "5xl", lg: "6xl"
                  } : {
                    base: "4xl", sm: "5xl", lg: "6xl"}}
                  color={useColorModeValue("white", "text.800")}>
                  Hi, My Name is
                  <Text
                    color={useColorModeValue({ base: "teal.300", md: "teal.500" }, "teal.300")}
                    align={{base: "center", md: "left"}}>
                    Kevin
                  </Text>
                </Heading>
                {/* Description */}
                <Text
                  color={useColorModeValue({ base: "gray.100", md: "text.600" }, "gray.100")}
                  fontSize={{base: "lg", md: "xl", lg: "2xl"}}
                  fontWeight={"bold"}
                  align={{base: "center", md: "left"}}>
                  Front End Developer
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Fade>
    </>
  );
}
