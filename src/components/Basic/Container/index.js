import { Container, Footer, Header, Left, Right } from './styles';


const Template = (props) => {
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

export default Template;