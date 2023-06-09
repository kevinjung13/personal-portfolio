import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout';

/* Font */

import '@fontsource/figtree/400.css';
import '@fontsource/figtree/700.css';

/* Themes */

const theme = extendTheme({
  colors: {
    "charcoal": {
      "50": "#EDF3F7",
      "100": "#CEDFE9",
      "200": "#AECADB",
      "300": "#8FB5CC",
      "400": "#6FA0BE",
      "500": "#4F8CB0",
      "600": "#3F708D",
      "700": "#305469",
      "800": "#203846",
      "900": "#101C23"
    },
    "text": {
      "50": "#F2F2F3",
      "100": "#D9D9DD",
      "200": "#C1C1C8",
      "300": "#A9A9B2",
      "400": "#91919C",
      "500": "#797986",
      "600": "#60606C",
      "700": "#484851",
      "800": "#303036",
      "900": "#18181B"
    }
  },
  fonts: {
    heading: 'Figtree',
    body: 'Figtree'
  }
}) 

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </ChakraProvider>
  )
}
