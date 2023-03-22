import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};


export default function About() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>About Me</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Hi, I'm Kevin and I'm passionate about building cool websites (among other things like traveling, hiking and learning new languages).
            I started my journey in Web Developement in September 2022,
            after coming across a tutorial on how to build a simple website using HTML.
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            Since then, I have dedicated my free time to learn about Front End Development 
            through various platforms (mostly freeCodeCamp & YouTube).
          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            Nowadays, I have been collaborating with another developer (friend & mentor) to build exciting and challenging
            projects, in order to continue learning and improving my skills.
            In addition, I have slowly started diving into the world of Back End Development,
            in hopes of becoming a Full Stack Developer.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Button
            mt={10}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}>
            CV/Resume
          </Button>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              '/profile.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}