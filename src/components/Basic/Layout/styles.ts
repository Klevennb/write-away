import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 1fr 6fr 0.75fr;
  grid-template-areas:
    'header header'
    'left  right'
    'footer footer';
`;

export const Footer = styled('div')`
  grid-area: footer;
  > {
    &:first-child {
      height: 100%;
    }
  }
`;

export const Header = styled('div')`
  grid-area: header;
  > {
    &:first-child {
      height: 100%;
    }
  }
`;

export const Left = styled('div')`
  grid-area: left;
  > {
    &:first-child {
      height: 100%;
    }
  }
`;

export const Right = styled('div')`
  grid-area: right;
  > {
    &:first-child {
      height: 100%;
    }
  }
`;
