import { styled, css } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';

const button = css`
  font-size: 14px;
  text-transform: none;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  line-height: 1.5;
  transition: all 300ms;
  max-height: 36px;
  &:hover {
    text-decoration: none;
    color: #2450EC
  }
  background-color: #2450EC;
  color: white;
`;

export const StyledButton = styled(LoadingButton)`
  ${button};
`;

export const StyledOutlineButton = styled(StyledButton)`
  ${button};
`;

export const StyledLinkButton = styled(Link)`
  ${button};
`;
