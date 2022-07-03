import { FC } from 'react';

import { ButtonProps } from '@mui/material';
import { StyledButton, StyledOutlineButton } from './styles';

export const PrimaryButton: FC<ButtonProps> = (props) => {
  const { children, size, disabled, onClick, className, variant } = props;
  return variant === 'outlined' ? (
    <StyledOutlineButton
      disabled={disabled}
      onClick={onClick}
      className={className}
      size={size}
    >
      {children}
    </StyledOutlineButton>
  ) : (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      className={className}
      size={size}
    >
      {children}
    </StyledButton>
  );
};