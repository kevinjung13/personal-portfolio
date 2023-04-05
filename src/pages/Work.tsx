import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Work() {
// As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Project 3',
      description: "Coming Soon",
      ProjectURL: "/about",
      program: "Next Js, Float UI, Tailwind CSS, Storybook",
      background: "gray.800",
      heading: "white",
      text: "white"
    },
    {
      title: 'Conversor',
      description: "Currency Exchange Website",
      ProjectURL: "https://currency-exchange-rosy.vercel.app/",
      program: "HTML, CSS, JavaScript, React",
      background: "linear-gradient(315deg, #9fa4c4 0%, #9e768f 75%)",
      heading: "white",
      text: "white"
    },
    {
      title: 'Oasis Marketplace',
      description: "An AI NFT Marketplace. Created all Front End related components, layouts and functions",
      ProjectURL: "/",
      program: "Next Js, Chakra UI & TypeScript",
      background: "#2f2f2f",
      heading: "white",
      text: "white"
    }
  ];


  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={'white'}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={'white'}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            height={'6xl'}
            position="relative"
            bgPosition="center"
            bgSize="fit"
            bg={card.background}>
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size={'container.lg'}
              height={'600px'}
              position={'relative'}>
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position={'absolute'}
                top={'50%'}
                transform={'translate(0, -50%)'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={card.heading}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }}
                  color={card.text}>
                  {card.description}
                  <br />
                  <br />
                  {card.program}
                </Text>
                  <Button
                    as={'a'}
                    href={`${card.ProjectURL[index]}`}
                    bg={'blue.400'}
                    w={'fit-content'}
                    color={card.text}
                    rounded={'full'}
                  _hover={{
                    bg: 'red.500'
                  }}>
                Check out project
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}