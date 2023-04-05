import React from 'react';
import ProjectButton from './components/Button';
import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

// Icons from React-icons
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

// Card Data
const cards = [
  {
    title: 'Conversor',
    description: "Currency Exchange Website",
    link: "https://currency-exchange-rosy.vercel.app/",
    program: "HTML, CSS, JavaScript, React",
    background: "linear-gradient(315deg, #9fa4c4 0%, #9e768f 75%)",
    heading: "white",
    text: "white"
  },
  {
    title: 'Oasis Marketplace (On-going Project)',
    description: "An Open Source AI NFT Marketplace. Created all Front End related components, layouts and functions",
    link: "https://vercel.com/jeromevvb/oasis-marketplace/8WQ3B7psLPCsbMrLQHftCzE3mT8E",
    program: "Next Js, Chakra UI & TypeScript",
    background: "#2f2f2f",
    heading: "white",
    text: "white"
  },
  {
    title: 'Project 3 (On-going Project)',
    description: "Coming Soon",
    link: "https://www.google.com",
    program: "Next Js, Float UI, Tailwind CSS, Storybook",
    background: "gray.800",
    heading: "white",
    text: "white"
  }
];


export default function Work() {
// Slider State
  const [slider, setSlider] = useState<Slider | null>(null);

  // Breakpoints for arrow button positioning
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

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
                <ProjectButton
                URL={`${card.link}`}
                bgColor={'blue.400'}
                fontColor={'white'}
                text={'See Project'}
                hoverColor={'red.500'}/> 
              </Stack>
            </Container>
          </Box>))}
      </Slider>
    </Box>
  );
}