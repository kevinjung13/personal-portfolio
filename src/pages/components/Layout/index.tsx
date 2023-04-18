import Header from '../Navbar';
import Footer from '../Footer';
import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {

  const { children } = props;

  return (
    <>
      <Header />
      <Container maxW={'100%'} p={'0'}>
      {children}
      </Container>
      <Footer />
    </>
  )
}