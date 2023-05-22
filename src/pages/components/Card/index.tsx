import {
  Box,
  Button,
  Container,
  Flex,
  Heading, 
  Image, 
  List,
  ListItem,
  Link,
  SimpleGrid, 
  Stack, 
  StackDivider,
  Text, 
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
/* Button */
import ProjectButton from "../Button";

interface CardProps {
  title: string;
  description: string;
  link: string;
  target: string;
  program1: string;
  program2: string;
  program3: string;
  program4?: string;
  summary: string;
  src: string
}

export default function Card(props: CardProps) {

  const {
    title,
    description,
    link,
    target,
    src,
    summary,
    program1,
    program2,
    program3,
    program4
  } = props;

  return (
    <>
     <Container maxW={'full'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 16 }}>
        {/* Image */}
        <Flex>
          <Image
            rounded={'md'}
            src={src}
            alt={'Website Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }} />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {title}
            </Heading>
            <Text
              color={useColorModeValue('teal.500', 'teal.300')}
              fontWeight={300}
              fontSize={'2xl'}>
              {description}
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.400', 'gray.600')} />
              }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {summary}
              </Text>
            </VStack>
            {/* List of Tools */}
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('teal.500', 'teal.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Tools
              </Text>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 2, md: 10 }}>
                <List spacing={2}>
                  <ListItem>{program1}</ListItem>
                  <ListItem>{program2}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{program3}</ListItem>
                  <ListItem>{program4}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            </Stack>
            <Link
              href={link}
              target={target}>
              <Button
                rounded={'full'}
                w={'fit'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('blue.400', 'charcoal.700')}
                color={"white"}
                _hover={{
                  bg: "red.500"}}>
                See Project
              </Button>
            </Link>
        </Stack>
      </SimpleGrid>
    </Container>
    </>
  );
}
