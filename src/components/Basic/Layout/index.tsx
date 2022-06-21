import { Container, Footer, Left, Right } from './styles';
import { ReactNode } from 'react';

type LayoutProps = {
  left?: ReactNode;
  right?: ReactNode;
  footer?: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { left, right, footer } = props;
  
  return (
    <Container>
      <Left>{left}</Left>
      <Right>{right}</Right>
      <Footer>{footer}</Footer>
    </Container>
  );
};

export default Layout;