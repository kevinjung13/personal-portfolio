import Footer from '../Footer';
import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* Props */
interface LayoutProps {
  children: ReactNode;
}

/* Rendering */
export default function Layout(props: LayoutProps) {

  const { children } = props;

  return (
    <>
      <Container
        maxW={'100%'}
        p={'0'}>
        {children}
      </Container>
      <Footer />
    </>
  )
}