import { Link, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Logo() {

  const { colorMode } = useColorMode()

  return (
    <>
      <Link
        href={'/main'}
        _hover={{
        bg: useColorModeValue('none', 'navbar.background'),
        opacity: (colorMode === 'light' ? '50%' : 'none')}}>
        {/* Logo Image */}
        <Image
          alt={'logo'}
          w={'50'}
          h={'50'}
          src={colorMode === 'light' ? '../photos/logo-black.png' : '../photos/logo-white.png'}>
        </Image>
      </Link>
    </>
  )
}