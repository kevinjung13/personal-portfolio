import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Icons from './icons';

export default function Footer() {
  
  return (

    //👇 Responsive Box for whole Footer
    <Box
      as={Stack}
      maxW={'full'}
      py={4}
      direction={'column'}
      spacing={4}
      justify={'center'}
      align={'center'}
      bg={useColorModeValue('black', '#2B2D42')}
      color={useColorModeValue('white', 'gray.200')}>
      {/* Text */}
      <Text>© 2023 - Built by Kevin Jung </Text>
      {/* Icons */}
      <Icons /> 
    </Box>
  );
}