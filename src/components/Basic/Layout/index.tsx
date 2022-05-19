import { FC } from 'react';
import { ConnectedComponent } from 'react-redux';
import { Container, Footer, Header, Left, Right } from './styles';


type LayoutProps = {
  header: any,
  left: any,
  right: any,
  footer: any,
}

const Layout = (props: LayoutProps) => {
  const { header, left, right, footer } = props;

  return (
    <Container>
      <Header>{header}</Header>
      <Left>{left}</Left>
      <Right>{right}</Right>
      <Footer>{footer}</Footer>
    </Container>
  );
};

export default Layout;