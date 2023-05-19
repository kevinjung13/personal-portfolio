import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
/* Button */
import ProjectButton from "../Button";

interface CardProps {
  title: string;
  description: string;
  link: string;
  target: string;
  program: string;
  background: string;
  heading?: string;
  text?: string;
  isHovered?: boolean;
}

export default function Card(props: CardProps) {
  const {
    title,
    description,
    isHovered,
    link,
    target,
    program,
    background,
    heading,
    text,
  } = props;

  return (
    <>
      <Box
        position={"relative"}
        bgPosition={"center"}
        bgSize={"cover"}
        bg={background}
      >
        {/*  */}
        <Container size={"100%"} height={"100vh"} position={"relative"}>
          <Stack
            spacing={5}
            maxW={"100vw"}
            position={"relative"}
            top={"50%"}
            transform={"translate(0, -50%)"}
            textAlign={"center"}
          >
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color={heading}
            >
              {title}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={text}>
              {description}
              <br />
              <br />
              {program}
            </Text>
            <Box>
              <ProjectButton
                URL={link}
                target={target}
                bgColor={"blue.400"}
                fontColor={"white"}
                text={"See Project"}
                hoverColor={{ isHovered } && `${"red.500"}`}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
