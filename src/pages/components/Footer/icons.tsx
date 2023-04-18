import { Button, IconButton, Link, Stack } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/* Icon Props */

interface SocialButtonProps {
  name?: string;
  icon: JSX.Element;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  URL: string;
  target: string;
}

/* Function for Icon rendering */

function SocialButton(props: SocialButtonProps) {

  const { URL, bgColor, fontColor, hoverColor, icon, target } = props;  

  return (
    <Link
      href={URL}
      target={target}
      isExternal>
      <IconButton
        aria-label={'social-button'}
        bg={bgColor}
        color={fontColor}
        rounded={'full'}
        size={'md'}
        _hover={{ bg: 'white', color: hoverColor, }}
        cursor={'pointer'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}>
        {icon}
      </IconButton>
    </Link>
  );
}

export default function Icons() {

  return (
    <>
      {/* 👇 Stacking of Responsive Icons */}
      <Stack direction={'row'} spacing={6}>
        {/* Twitter Icon */}
        <SocialButton
          URL={'https://twitter.com/kevinhjung93'}
          target={'_blank'}
          bgColor={'none'}
          fontColor={'none'}
          hoverColor={'#1DA1F2'}
          icon={<FaTwitter />} />             
        {/* Github Icon */}
        <SocialButton 
          URL={'https://github.com/kevinjung13'}
          target={'_blank'}
          bgColor={'none'}
          fontColor={'none'}
          hoverColor={'#6E5494'}
          icon={<FaGithub />} />
        {/* Linkedin Icon */}
        <SocialButton 
          URL={'https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/'}
          target={'_blank'}
          bgColor={'none'}
          fontColor={'none'}
          hoverColor={'#0072b1'}
          icon={<FaLinkedin />} />
        {/* Email Icon */}
        <SocialButton
          URL={'mailto:kevinjung13@gmail.com'}
          target={'_blank'}
          bgColor={'none'}
          fontColor={'none'}
          hoverColor={'#EB8778'}
          icon={<FaEnvelope />} />
      </Stack>
    </>
  )
}