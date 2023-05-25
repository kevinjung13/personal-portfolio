import Card from '../../Card';
import { Container, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Work() {
  return (
    <>
      <Container
        maxW={"full"}
        bg={useColorModeValue("gray.200", "gray.800")}
        id={"work"}>
        {/* Title */}
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          p={"10"}
          textAlign={"center"}>
          Portfolio
        </Heading>
        {/* Farang */}
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
          summary={`My most recent project.
          Farang was created out of a desire to help both newly relocated and exisiting expats.
          Biggest lesson: Planning and outlining the structure is crucial before any code is typed into the code editor.`} />
        {/* Oasis Marketplace */}
        <Card
          src={"/photos/oasis.jpg"}
          title={"Oasis Marketplace"}
          description={"Open Source AI NFT Marketplace"}
          link={"https://oasis-marketplace-pxk6wnbo8-jeromevvb.vercel.app/"}
          target={"_blank"}
          program1={"Next Js"}
          program2={"Chakra UI"}
          program3={"TypeScript"}
          summary={`My first collaboration with a seasoned developer (currently still ongoing).
          At this point, I had learnt how to code for 5-6 months.
          Created all Front End related components and pages.
          The biggest lesson I have learnt so far is to ensure to leverage all features of a component library.`} />
        {/* Conversor */}
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
          summary={`A simple currency exchange website I created after going through a few courses on freeCodeCamp 
          (My first attempt at making something).
          At this point, I had learnt how to code for 3-4 months.
          As I was working full time, I maximized my free time (evenings and weekends) to create this.`} />
      </Container>
    </>
  );
}