import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/Navbar';
import Footer from './components/Footer';

// Font

import '@fontsource/figtree/400.css';
import '@fontsource/figtree/700.css';

// Themes

const theme = extendTheme({
  colors: {
    

  },

  fonts: {
    heading: 'Figtree',
    body: 'Figtree'
  },

}
) 

/* breakpoints:
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  dxl: '1536px'
*/

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
   </ChakraProvider>
  )
}
