import { Button, Stack} from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/* Icon Props */

interface SocialButtonProps {
  name?: string;
  icon: JSX.Element;
  bgColor?: string;
  fontColor?: string;
  hoverColor?: string;
  URL: string;
}

/* Function for Icon rendering */

function SocialButton(props: SocialButtonProps) {

  const { URL, bgColor, fontColor, hoverColor, icon } = props;  

  return (
    <Button
      as={'a'}
      href={URL}
      bg={bgColor}
      color={fontColor}
      _hover={{ bg: 'none', color: hoverColor }}
      h={'100%'}
      cursor={'pointer'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}>
      {icon}
    </Button>
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
            bgColor={'none'}
            fontColor={'none'}
            hoverColor={'footer.icons.twitter'}
            icon={<FaTwitter />} />             
          {/* Github Icon */}
          <SocialButton 
            URL={'https://github.com/kevinjung13'}
            bgColor={'none'}
            fontColor={'none'}
            hoverColor={'footer.icons.github'}
            icon={<FaGithub />} />
        {/* Linkedin Icon */}
          <SocialButton 
            URL={'https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/'}
            bgColor={'none'}
            fontColor={'none'}
            hoverColor={'footer.icons.linkedin'}
            icon={<FaLinkedin />} />
        {/* Email Icon */}
          <SocialButton
            URL={'mailto:kevinjung13@gmail.com'}
            bgColor={'none'}
            fontColor={'none'}
            hoverColor={'footer.icons.email'}
            icon={<FaEnvelope />} />
      </Stack>
    </>
  )
}