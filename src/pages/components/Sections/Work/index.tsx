import React from 'react';
import { useState } from 'react';
import Card from '../../Card';
/* Chakra UI Components */
import { Box, IconButton, useBreakpointValue} from '@chakra-ui/react';
/* Icons from React-icons */
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
/* React-slick for Carousel Lib */
import Slider from 'react-slick';
/* CSS for Carousel Lib */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Settings for the slider  */
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
  
    /* Slider State */
  const [slider, setSlider] = useState<Slider | null>();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(
    null
  );
    /* Breakpoints for arrow button positioning */
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <>
      {/* Container */}
      <Box
        id={'work'}
        position={'relative'}
        width={'full'}
        overflow={'hidden'}>
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          bg={'none'}
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider && slider.slickPrev()}
          color={'white'}
          _hover={{
            bg: 'whiteAlpha.300'}}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          bg={'none'}
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider && slider.slickNext()}
          color={'white'}
          _hover={{
            bg: 'whiteAlpha.300'}}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings}
          ref={(slider) => setSlider(slider)}>
          <Card
            title={'Conversor'}
            description={'A Currency Exchange Website'}
            link={'https://currency-exchange-rosy.vercel.app/'}
            target={'_blank'}
            program={'HTML, CSS, JavaScript, React'}
            background={'linear-gradient(315deg, #9fa4c4 0%, #9e768f 75%)'}
            heading={'white'}
            text={'white'} />
          <Card
            title={'Oasis Marketplace'}
            description={'An Open Source AI NFT Marketplace'}
            link={'https://vercel.com/jeromevvb/oasis-marketplace/8WQ3B7psLPCsbMrLQHftCzE3mT8E'}
            target={'_blank'}
            program={'Next Js, Chakra UI & TypeScript'}
            background={'#2f2f2f'}
            heading={'white'}
            text={'white'} />
          <Card
            title={'Farang'}
            description={'Expat Guide for Bangkok Expats'}
            link={'https://expat-guide.vercel.app/'}
            target={'_blank'}
            program={'Next Js, Float UI, Tailwind CSS'}
            background={'gray.800'}
            heading={'white'}
            text={'white'} />
        </Slider>
      </Box>
    </>
  );
}
