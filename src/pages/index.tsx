import Head from 'next/head';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Work from './components/Sections/Work';
import Contact from './components/Sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Jung | Personal Portfolio </title>
        <meta name="description" content="Welcome to Kevin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photos/logo-main.png" />
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
