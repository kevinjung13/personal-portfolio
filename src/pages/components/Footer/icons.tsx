import { chakra, Link, Stack, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ReactNode } from 'react';

// Function to Set Footer Icons as Buttons

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('none', 'none')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
      bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Icons() {

  return (
    <>
      {/* 👇 Stacking of Responsive Icons */}
      <Stack direction={'row'} spacing={6}>

        {/* Twitter Icon */}
        <Link _hover={{
          color: 'footer.icons.twitter'}}>
          <SocialButton 
            label={'Twitter'}
            href={'https://twitter.com/kevinhjung93'}>
          <FaTwitter />
          </SocialButton>
        </Link>
        
          {/* Github Icon */}
        <Link _hover={{
          color: 'footer.icons.github'}}>
          <SocialButton 
            label={'GitHub'} 
            href={'https://github.com/kevinjung13'}>
          <FaGithub />
          </SocialButton>
        </Link>

        {/* Linkedin Icon */}
        <Link _hover={{
          color: 'footer.icons.linkedin'}}>
          <SocialButton 
            label={'Linkedin'} 
            href={'https://www.linkedin.com/in/kevin-hwisung-jung-11374a6a/'}>
          <FaLinkedin />
          </SocialButton>
        </Link>

        {/* Email Icon */}
        <Link _hover={{
          color: 'footer.icons.email'}}>
          <SocialButton 
            label={'Email'} 
            href={'mailto:kevinjung13@gmail.com'}>
          <FaEnvelope />
          </SocialButton>
        </Link>
        
      </Stack>
    </>
  )
}