import Card from '../../Card';
import { Container, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Work() {
  return (
    <>
      <Container maxW={"full"}
      bg={useColorModeValue("gray.200", "gray.800")}>
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          p={"10"}
          textAlign={"center"}>
          Portfolio
        </Heading>
        <Card
          src={"/photos/conversor.png"}
          title={"Conversor"}
          description={"Currency Exchange Platform"}
          link={"https://currency-exchange-rosy.vercel.app/"}
          target={"_blank"}
          program1={"HTML"}
          program2={"CSS"}
          program3={"JavaScript"}
          program4={"React"}
          summary={`A simple currency exchange website I created after going through a few courses on freeCodeCamp (My first attempt at making something).
          At this point, I had learnt how to code for 3-4 months.
          As I was working full time, I had to maximize my free time (Evenings and Weekends) and put in a lot of effort to create this.`} />
        <Card
          src={"/photos/oasis.jpg"}
          title={"Oasis Marketplace"}
          description={"Open Source AI NFT Marketplace"}
          link={"https://vercel.com/jeromevvb/oasis-marketplace/8WQ3B7psLPCsbMrLQHftCzE3mT8E"}
          target={"_blank"}
          program1={"Next Js"}
          program2={"Chakra UI"}
          program3={"TypeScript"}
          summary={`My first collaboration with a seasoned developer and second project (currently still ongoing).
          At this point, I had learnt how to code for 5-6 months.
          Created all Front End related components and pages.`} />
        <Card
          src={"/photos/farang.png"}
          title={"Farang"}
          description={"Bangkok Expat Guide"}
          link={"https://expat-guide.vercel.app/"}
          target={"_blank"}
          program1={"Next Js"}
          program2={"Float UI"}
          program3={"Tailwind CSS"}
          program4={"TypeScript"}
          summary={`My third and most recent project created in May 2023.
          Created out of a desire to help both newly relocated and exisiting expats.`} />
        </Container>
    </>
  );
}