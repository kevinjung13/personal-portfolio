import {
  Box,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

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
      bg={useColorModeValue('gray.200', 'footer.background')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      
      {/*Text */}
      <Text>© 2023 - Built by Kevin Jung </Text>

      {/*Icons */}
      <Icons /> 
    </Box>
  );
}