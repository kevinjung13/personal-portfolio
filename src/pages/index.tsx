import Head from 'next/head';
import ProjectButton from "./components/Common/Button";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Jung </title>
        <meta name="description" content="Welcome to Kevin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photos/logo-main.png" />
      </Head>
      <main>
        {/* Box for whole main section + background image */}
        <Box
          bgImage={{ base: "url('/photos/main-bg-small.jpg')", md: "url('/photos/main-bg.jpg')" }}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}>
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
                p={8}
                spacing={6}
                w={"full"}
                maxW={"lg"}
                opacity={{ base: "100%", md: "none" }}>
                {/* Heading */}
                <Heading fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}>
                  <Text color={{ base: "gray.900", md: "white" }} as={"span"}>
                    Hi, My Name is
                  </Text>
                  <br />
                  <Text color={{ base: "white", md: "black" }}>
                    Kevin Jung
                  </Text>
                </Heading>
                {/* Description */}
                <Text
                  color={{ base: "white", md: "gray.600" }}
                  fontSize={{ base: "md", md: "lg", lg: "lg" }}
                  fontWeight={"bold"}>
                  Front End Developer
                </Text>
                {/* Stacking of Button */}
                <Stack direction={"row"}>
                  <ProjectButton
                    URL={"/About"}
                    bgColor={"blue.400"}
                    fontColor={"white"}
                    text={"Introduction"}
                    hoverColor={"red.500"} />
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </main>
    </>
  )
}
