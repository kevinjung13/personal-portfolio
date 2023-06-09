import Link from 'next/link';
import { Image, useColorMode } from "@chakra-ui/react";

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
          _hover={{opacity: "50%"}}>
        </Image>
      </Link>
    </>
  )
}