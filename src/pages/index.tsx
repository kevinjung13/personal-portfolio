import Head from 'next/head';
import Main from './main';
import About from './about';
import Work from './work';
import Contact from './contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Jung </title>
        <meta name="description" content="Welcome to Kevin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photos/logo-main.png" />
      </Head>
      <main>
        <Main />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  )
}
