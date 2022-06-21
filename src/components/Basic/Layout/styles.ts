import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  height: calc(100vh - 50px);
  display: grid;
  grid-template-rows: 1fr 6fr 0.75fr;
  grid-template-areas:
    'left right right'
    'left right right'
    'footer footer footer';
`;

export const Footer = styled('div')`
  grid-area: footer;
  > {
    &:first-of-type{
      height: 100%;
    }
  }
`;

export const Left = styled('div')`
  grid-area: left;
  > {
    &:first-of-type {
      height: 100%;
    }
  }
`;

export const Right = styled('div')`
  grid-area: right;
  > {
    &:first-of-type {
      height: 100%;
    }
  }
`;
