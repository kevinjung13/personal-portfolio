import Head from 'next/head';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Work from './components/Sections/Work';
import Contact from './components/Sections/Contact';
import { useColorMode } from '@chakra-ui/react';

export default function Home() {

  const { colorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>Kevin Jung | Personal Portfolio </title>
        <meta name={"description"} content={"Welcome to Kevin's Portfolio"} />
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
        <link rel={"icon"} href={"/photos/logo-main.png"} />
        <link
          rel="preload"
          as="image"
          href={colorMode === 'light' ? '/photos/main-bg-light-small.jpg' : '/photos/dark/main-bg-dark-small.jpg'} />
        <link
          rel="preload"
          as="image"
          href={colorMode === 'light' ? '/photos/main-bg-light.jpg' : '/photos/dark/main-bg-dark.jpg'} />
      </Head>
      <main>
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Work */}
        <Work />
        {/* Contact */}
        <Contact />
      </main>
    </>
  )
}
