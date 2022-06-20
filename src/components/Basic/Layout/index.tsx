import { ConnectedComponent } from 'react-redux';
import { Container, Footer, Header, Left, Right } from './styles';
import Placeholder from '../Placeholder';
import Nav from '../../NavBar/NavBar'
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
      <Header><Nav /></Header>
      <Left>test</Left>
      <Right>test</Right>
      <Footer>test</Footer>
    </Container>
  );
};

export default Layout;