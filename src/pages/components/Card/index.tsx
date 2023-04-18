import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
/* Button */
import ProjectButton from '../Common/Button';

interface CardProps {
  title: string;
  description: string;
  link: string;
  target: string;
  program: string;
  background: string;
  heading?: string;
  text?: string;
}

export default function Card (props: CardProps) {

  const {
    title,
    description,
    link,
    target,
    program,
    background,
    heading,
    text
  } = props;

  return (
    <>
      <Box
        position="relative"
        bgPosition="center"
        bgSize="cover"
        bg={background}>
        {/* This is the block you need to change, to customize the caption */}
        <Container
          size={'100%'}
          height={'600px'}
          position={'relative'}>
          <Stack
            spacing={5}
            maxW={'lg'}
            position={'absolute'}
            top={'50%'}
            transform={'translate(0, -50%)'}>
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color={heading}>
              {title}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}
              color={text}>
              {description}
              <br />
              <br />
              {program}
            </Text>
            <ProjectButton
              URL={link}
              target={target}
              bgColor={'blue.400'}
              fontColor={'white'}
              text={'See Project'}
              hoverColor={'red.500'} /> 
          </Stack>
        </Container>
      </Box>
    </>
  )
}