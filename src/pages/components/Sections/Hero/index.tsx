import ProjectButton from "../../Button";
import { Box, Flex, Heading, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../../Navbar";

export default function Hero() {

  const { colorMode } = useColorMode()

  return (
    <>
      {/* Box for whole main section + background image */}
      <Box
        bgImage={colorMode === 'light' ? {
          base: "url('/photos/main-bg-light-small.jpg')",
          md: "url('/photos/main-bg-light.jpg')"
        } : {
          base: "url('/photos/dark/main-bg-dark-small.jpg')",
          md: "url('/photos/dark/main-bg-dark.jpg')"
          }}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}>
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
            align={{ base: "end", md: "center" }}
            justify={"center"}>
            {/* Stacking */}
            <Stack
              ml={{ base: "none", md: "15" }}
              p={{ base: "3", md: "8" }}
              mt={{ base: "5", md: "none" }}
              spacing={6}
              w={"full"}
              maxW={"lg"}
              opacity={{ base: "100%", md: "none" }}>
              {/* Heading */}
              <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                color={{ base: "white", md: "white" }}>
                Hi, My Name is
                <Text color={{ base: "black", md: "black" }}>
                  Kevin
                </Text>
              </Heading>
              {/* Description */}
              <Text
                color={{ base: "white", md: "text.600" }}
                fontSize={{ base: "md", md: "lg", lg: "lg" }}
                fontWeight={"bold"}>
                Front End Developer
              </Text>
              {/* Stacking of Button */}
              <Stack direction={"row"}>
                <ProjectButton
                  URL={"#about"}
                  bgColor={useColorModeValue("charcoal.700", "charcoal.700")}
                  fontColor={"white"}
                  text={"Introduction"}
                  hoverColor={"red.500"}/>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
