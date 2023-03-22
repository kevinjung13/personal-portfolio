import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Font

import '@fontsource/figtree/400.css';
import '@fontsource/figtree/700.css';

// Themes

const theme = extendTheme({
  colors: {

    navbar: {
      background: "#2e5166"
    }, 
    
    footer: {
      background: "#2B2D42",

    icons: {
        twitter: "#1DA1F2",
        github: "#6E5494",
        linkedin: "#0072b1",
        email: "#EB8778"
      }
    },

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
