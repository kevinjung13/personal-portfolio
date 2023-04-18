import Link from 'next/link';
import { Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {

  const { colorMode } = useColorMode()

  return (
    <>
      <Link
        href={'/'}>
        {/* Logo Image */}
        <Image
          alt={'logo'}
          w={'50'}
          h={'50'}
          src={colorMode === 'light' ? '../photos/logo-black.png' : '../photos/logo-white.png'}
          _hover={{
            bg: useColorModeValue('none', 'charcoal.700'),
            opacity: (colorMode === 'light' ? '50%' : 'none')}}>
        </Image>
      </Link>
    </>
  )
}